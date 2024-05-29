import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'fatal', 'error', 'warn', 'debug'],
  });
  const configService = app.get(ConfigService);
  app.use(cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  }));
  app.useGlobalFilters(new HttpExceptionFilter(configService))
  await app.listen(3000);
}
bootstrap();
