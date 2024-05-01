import { Module } from '@nestjs/common';
import { StandartController } from './standart.controller';
import { StandartService } from './standart.service';

@Module({
  controllers: [StandartController],
  providers: [StandartService]
})
export class StandartModule {}
