import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends CrudService<Users>{
    
    constructor(@InjectRepository(Users) repository: Repository<Users>) {
        super(repository);
    }

    async findUserByEmail(user: Users) {
        return await this.repository.findOneBy(user);
    }

    async getUser(id: string) : Promise<Users>{
        let idUser = (id);
        return await this.repository.findOne({
            where: { idUser }
        })
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
}
