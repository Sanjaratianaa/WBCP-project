import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends CrudService<Users>{
    constructor(@InjectRepository(Users) repository: Repository<Users>) {
        super(repository);
    }
}
