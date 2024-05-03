import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from '../entities/Users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandartModule } from '../standart/standart.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), StandartModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
