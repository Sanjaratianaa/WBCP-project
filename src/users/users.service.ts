import { CrudService } from '@nestjs-library/crud';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository, Not } from 'typeorm';
import { StandartUser } from '../entities/StandartUser';
import { Standart } from '../entities/Standart';
import { StandartService } from '../standart/standart.service';

@Injectable()
export class UsersService extends CrudService<Users>{
    
    constructor(
        @InjectRepository(Users) repository: Repository<Users>, 
        @Inject(StandartService) private standartService: StandartService,
    ) {
        super(repository);
    }

    async findUserByEmail(user: Users) {
        return await this.repository.findOneBy(user);
    }

    async getUser(id: number) : Promise<Users>{
        let idUser = (id);

        return await this.repository
        .createQueryBuilder('users')
        .innerJoinAndSelect(
            'users.detailsUser',
            'detailsUser',
            'detailsUser.idUser = users.idUser',
        )
        .leftJoinAndSelect(
            'users.standartUser',
            'standartUser',
            'standartUser.idUser = users.idUser',
        )
        .where('detailsUser.idUser = :idUser', { idUser: idUser })
        .getOne();
    }

    async getAllUtilisateurs(userId: number): Promise<Users[]> {
        return await this.repository
        .createQueryBuilder('users')
        .leftJoinAndSelect(
        'users.detailsUser',
        'detailsUser',
        'detailsUser.idUser = users.idUser',
        )
        .where('detailsUser.idUser != :idUser', { idUser: userId })
        .getMany();
    }

    find(){
        return this.repository.find()
    }

    addUser(user: Users){
        this.repository.save(user);
    }

    async login(user: Users){
        let users = await this.repository.findOneBy(user);
        if(users.userPassword !== user.userPassword) throw new Error(`User ${user.userName} does not exist`);
        return users;
    }

    async signin(user: Users){
        await this.repository.save(user);
    }

    async calculScore(user: Users, standartUser: StandartUser[]) {
        let score = 0;

        for(let oneStandart of standartUser) {
            for(let oneDetails of user.detailsUser) {
                if(oneDetails.idDetailsStandart === oneStandart.idDetailsStandart){
                    score += oneStandart.coefficient;
                }
            }
        }

        return score;
    }

    async getAllMatch(userId: number): Promise<any> {
        const user = await this.getUser(userId);
        // const standart = await this.standartService.findWithDetails();
        const allUsers = await this.getAllUtilisateurs(userId);

        const result = [];
        try {
            for (const oneUser of allUsers) {
                let score = await this.calculScore(oneUser, user.standartUser);
                result.push(
                    {
                        "user": oneUser,
                        "score": score
                    }
                )
            }
        } catch (error) {
            console.error(error);
        }
           
        result.sort((a, b) => b.score - a.score);

        const half = Math.ceil(result.length / 2); // Calculate the midpoint, rounding up
        const firstHalf = result.slice(0, half); // Get the first half of the array

        // console.log(result);

        return firstHalf;
    }
}
