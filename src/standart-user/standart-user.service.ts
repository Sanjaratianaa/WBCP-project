import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StandartUser } from '../entities/StandartUser';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class StandartUserService extends CrudService<StandartUser>{
    constructor(@InjectRepository(StandartUser) repository: Repository<StandartUser>){
        super(repository)
    }

    async getStandardForUser(userId: number): Promise<StandartUser[]> {
        return await getConnection().createQueryBuilder(StandartUser, 'su')
            .innerJoinAndSelect('su.standart', 'standart')
            .innerJoinAndSelect('standart.detailsStandart', 'detailsStandart')
            .where('su.idUser = :userId', { userId })
            .getMany();
    }
}
