import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploaderModule } from './uploader/uploader.module';
import { ReplicateModule } from './replicate/replicate.module';
import { HandlerGateWay } from 'src/socket/handler.gateway';
import { BrainShopModule } from './brain-shop/brain-shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { StandartModule } from './standart/standart.module';
import { UsersModule } from './users/users.module';
import { DetailsStandartModule } from './details-standart/details-standart.module';
import { StandartUserModule } from './standart-user/standart-user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Le type de votre base de données (postgres pour PostgreSQL)
      host: 'localhost', // L'adresse de votre base de données
      port: 5432, // Le port de votre base de données PostgreSQL par défaut est 5432
      username: 'your_username', // Le nom d'utilisateur de votre base de données
      password: 'your_password', // Le mot de passe de votre base de données
      database: 'patte_sardine_rencontre', // Le nom de votre base de données
      entities: [__dirname + '/entities/*.{.ts,.js}'],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),
    UploaderModule, ReplicateModule, BrainShopModule, StandartModule, UsersModule, DetailsStandartModule, StandartUserModule
  ],
  controllers: [AppController, ],
  providers: [AppService, HandlerGateWay, ],
})
export class AppModule {}
