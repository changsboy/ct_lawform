import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(res: Response): void;
    getQ3Page(res: Response): void;
}
export declare class Q1Controller {
    getQ1(res: Response): void;
}
export declare class Q2Controller {
    getQ1(res: Response): void;
}
