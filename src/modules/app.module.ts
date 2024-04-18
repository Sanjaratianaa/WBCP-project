import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UploaderModule } from 'src/uploader/uploader.module';

@Module({
  imports: [
    UploaderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
