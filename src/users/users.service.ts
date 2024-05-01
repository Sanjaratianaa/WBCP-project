import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './Users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends CrudService<Users>{
    
    constructor(@InjectRepository(Users) repository: Repository<Users>) {
        super(repository);
    }

    async getUser(id: string) : Promise<Users>{
        let idUser = Number(id);
        console.log(
            await this.repository.findOne(
                { where: {idUser} }
            )
        )
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
}
