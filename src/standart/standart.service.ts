import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Standart } from 'src/entities/Standart';
import { Repository } from 'typeorm';

@Injectable()
export class StandartService extends CrudService<Standart>{
    constructor(@InjectRepository(Standart) repository: Repository<Standart>){
        super(repository);
    } 
}
