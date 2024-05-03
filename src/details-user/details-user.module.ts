import { Module } from '@nestjs/common';
import { DetailsUserController } from './details-user.controller';
import { DetailsUserService } from './details-user.service';
import { DetailsUser } from '../entities/DetailsUser';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Standart } from '../entities/Standart';
import { DetailsStandart } from '../entities/DetailsStandart';

@Module({
  imports: [TypeOrmModule.forFeature([DetailsUser, Standart, DetailsStandart])],
  controllers: [DetailsUserController],
  providers: [DetailsUserService]
})
export class DetailsUserModule {}
