import { Module } from '@nestjs/common';
import { StandartUserController } from './standart-user.controller';
import { StandartUserService } from './standart-user.service';

@Module({
  controllers: [StandartUserController],
  providers: [StandartUserService]
})
export class StandartUserModule {}
