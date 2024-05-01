import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
    ) { }

    public 
}
