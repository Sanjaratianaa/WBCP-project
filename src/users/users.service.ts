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
}
