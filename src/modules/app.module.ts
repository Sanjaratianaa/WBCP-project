import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UploaderModule } from 'src/uploader/uploader.module';
import { ReplicateModule } from 'src/replicate/replicate.module';
import { HandlerGateWay } from 'src/socket/handler.gateway';

@Module({
  imports: [
    UploaderModule, ReplicateModule
  ],
  controllers: [AppController],
  providers: [AppService, HandlerGateWay],
})
export class AppModule {}
