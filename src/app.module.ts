import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploaderModule } from './uploader/uploader.module';
import { ReplicateModule } from './replicate/replicate.module';
import { HandlerGateWay } from './socket/handler.gateway';
import { BrainShopModule } from './brain-shop/brain-shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UsersController } from './users/users.controller';
//import { UsersService } from './users/users.service';
import { StandartModule } from './standart/standart.module';
import { UsersModule } from './users/users.module';
import { DetailsStandartModule } from './details-standart/details-standart.module';
import { StandartUserModule } from './standart-user/standart-user.module';
import { Users } from './users/Users';
import { Standart } from './entities/Standart';
import { StandartUser } from './entities/StandartUser';
import { DetailsStandart } from './entities/DetailsStandart';
import { AuthentificationController } from './authentification/authentification.controller';
import { AuthentificationService } from './authentification/authentification.service';
import { AuthentificationModule } from './authentification/authentification.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Le type de votre base de données (postgres pour PostgreSQL)
      host: 'localhost', // L'adresse de votre base de données
      port: 5432, // Le port de votre base de données PostgreSQL par défaut est 5432
      username: 'your_username', // Le nom d'utilisateur de votre base de données
      password: 'your_password', // Le mot de passe de votre base de données
      database: 'rencontre', // Le nom de votre base de données
      entities: [Users, Standart, StandartUser, DetailsStandart],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),
    UploaderModule, ReplicateModule, BrainShopModule, StandartModule, UsersModule, DetailsStandartModule, StandartUserModule, AuthentificationModule
  ],
  controllers: [AppController, AuthentificationController, ],
  providers: [AppService, HandlerGateWay, AuthentificationService, ],
})
export class AppModule {}
