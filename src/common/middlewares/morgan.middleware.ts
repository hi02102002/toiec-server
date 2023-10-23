import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  private logger;

  constructor() {
    this.logger = morgan('dev'); // Customize the log format as needed
  }

  use(req: Request, res: Response, next: NextFunction) {
    this.logger(req, res, next);
  }
}
