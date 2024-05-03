import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Standart } from '../entities/Standart';
import { Repository } from 'typeorm';

@Injectable()
export class StandartService extends CrudService<Standart>{
    constructor(@InjectRepository(Standart) repository: Repository<Standart>){
        super(repository);
    } 

    find(){
        return this.repository.find()
    }

    async findWithDetails(): Promise<any> {
        return await this.repository
           .createQueryBuilder('standart')
           .leftJoinAndSelect(
             'standart.detailsStandart',
             'detailsStandart',
             'detailsStandart.idStandart = standart.idStandart',
           )
           .getMany();
    }

}
