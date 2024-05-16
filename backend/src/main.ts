import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://172.0.17.1',
    credentials: true,
  }));
  await app.listen(3000);
}
bootstrap();
