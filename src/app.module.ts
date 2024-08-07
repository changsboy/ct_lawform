import { Module } from '@nestjs/common';
import { AppController, Q1Controller } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,Q1Controller],
  providers: [AppService],
})
export class AppModule {}
