import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { verify } from 'jsonwebtoken';

type UserDetailsToken = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
};

export interface JwtMiddlewareRequest extends Request {
  user: UserDetailsToken;
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: JwtMiddlewareRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.accessToken;
      if (!token) {
        throw new HttpException('Please login first', HttpStatus.UNAUTHORIZED);
      }
      const decoded = verify(
        token,
        process.env.JWT_SECRET_KEY,
      ) as UserDetailsToken;
      req.user = decoded;
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new HttpException('Token has expired', HttpStatus.UNAUTHORIZED);
      } else if (error instanceof JsonWebTokenError) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      } else if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
