import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(res: Response): void;
    getHello(): string;
}
export declare class Q1Controller {
    getQ1(res: Response): void;
}
