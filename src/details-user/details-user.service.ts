// import { CrudService } from '@nestjs-library/crud';
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { DetailsUser } from '../entities/DetailsUser';
// import { Standart } from '../entities/Standart';
// import { DetailsStandart } from '../entities/DetailsStandart';

// @Injectable()
// export class DetailsUserService extends CrudService<DetailsUser>{
//     constructor(
//         @InjectRepository(DetailsUser)
//         private detailsUserRepository: Repository<DetailsUser>,
//         @InjectRepository(Standart)
//         private standartRepository: Repository<Standart>,
//         @InjectRepository(DetailsStandart)
//         private detailsStandartRepository: Repository<DetailsStandart>,
//     ) {
//         super(detailsUserRepository);
//     }

//     async getAllDetailsByUserId(userId: number): Promise<any> {
//         const detailsUsers = await this.detailsUserRepository
//             .createQueryBuilder('du')
//             .leftJoin('standart', 's', 'du.standartId = s.id') // Join with standart table using standartId
//             .leftJoin('details_standart', 'ds', 's.detailsStandartId = ds.id') // Join with details_standart table using detailsStandartId
//             .where('du.idUser = :userId', { userId })
//             .getMany();

//         return detailsUsers;
//     }
// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standart } from '../entities/Standart';
import { DetailsStandart } from '../entities/DetailsStandart';
import { DetailsUser } from '../entities/DetailsUser';
import { CrudService } from '@nestjs-library/crud';

@Injectable()
export class DetailsUserService extends CrudService<DetailsUser>{
 constructor(
    @InjectRepository(Standart)
    private standartRepository: Repository<Standart>,
    @InjectRepository(DetailsStandart)
    private detailsStandartRepository: Repository<DetailsStandart>,
    @InjectRepository(DetailsUser)
    private detailsUserRepository: Repository<DetailsUser>,
 ) {
    super(detailsUserRepository)
 }

 async getAllDetailsByUserId(IdUser: number): Promise<any> {
 return await this.standartRepository
    .createQueryBuilder('standart')
    .innerJoinAndSelect(
      'standart.detailsStandart',
      'detailsStandart',
      'detailsStandart.idStandart = standart.idStandart',
    )
    .leftJoinAndSelect(
      'detailsStandart.detailsUser',
      'detailsUser',
      'detailsUser.idDetailsStandart = detailsStandart.idDetailsStandart',
    )
    .where('detailsUser.idUser = :userId', { userId: IdUser })
    .getMany();
 }
}
