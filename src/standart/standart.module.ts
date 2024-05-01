import { Module } from '@nestjs/common';
import { StandartController } from './standart.controller';
import { StandartService } from './standart.service';
import { Standart } from 'src/entities/Standart';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Standart])],
  controllers: [StandartController],
  providers: [StandartService]
})
export class StandartModule {}
