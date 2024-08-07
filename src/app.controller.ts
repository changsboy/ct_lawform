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

}

@Controller('q1')
export class Q1Controller {
    @Get()
    getQ1(@Res() res: Response) {
        const filePath = join(__dirname, '..', 'public', 'q1.html');
        return res.sendFile(filePath);
    }
}
@Controller('q2')
export class Q2Controller {
    @Get()
    getQ1(@Res() res: Response) {
        const filePath = join(__dirname, '..', 'public', 'q2.html');
        return res.sendFile(filePath);
    }
}
