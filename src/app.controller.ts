import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('*')
  getIndex(@Res() res: Response) {
    res.sendFile('index.html', { root: 'dist' }); // dist 폴더의 index.html 파일을 반환
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
