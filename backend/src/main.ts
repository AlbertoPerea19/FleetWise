import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://172.17.0.3',
    credentials: true,
  }));
  await app.listen(3000);
}
bootstrap();
