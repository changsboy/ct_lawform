import { Module } from '@nestjs/common';
import { AppController, Q1Controller, Q2Controller } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,Q1Controller,Q2Controller],
  providers: [AppService],
})
export class AppModule {}
