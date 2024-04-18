import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ReplicateModule } from 'src/replicate/replicate.module';

@Module({
  imports: [ReplicateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
