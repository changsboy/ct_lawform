import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Controller, Get, Res } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', 'my-app/build'));
  app.setBaseViewsDir(join(__dirname, '..', 'my-app/build'));
  app.setViewEngine('html');
  await app.listen(3000);
}
bootstrap();
