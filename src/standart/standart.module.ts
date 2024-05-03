import { Module } from '@nestjs/common';
import { StandartController } from './standart.controller';
import { StandartService } from './standart.service';
import { Standart } from '../entities/Standart';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Standart])],
  controllers: [StandartController],
  providers: [StandartService],
  exports: [StandartService]
})
export class StandartModule {}
