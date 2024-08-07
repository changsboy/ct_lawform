import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHome(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('q1')
export class Q1Controller {
    @Get()
    getQ1(@Res() res: Response) {
        // q1.html 파일의 경로를 설정합니다.
        const filePath = join(__dirname, '..', 'public', 'q1.html');
        return res.sendFile(filePath);
    }
}
