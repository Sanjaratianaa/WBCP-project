import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await createConnection();
  app.setGlobalPrefix("wcbp");
  await app.listen("3000", '127.0.0.1');
  // await app.listen(process.env.PORT, '0.0.0.0');
  console.log(`Application is d running on: ${await app.getUrl()}`);
}
bootstrap();
