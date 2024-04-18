import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UploaderModule } from 'src/uploader/uploader.module';
import { ReplicateModule } from 'src/replicate/replicate.module';

@Module({
  imports: [
    UploaderModule, ReplicateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
