import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../Database/database.service';
import { Prisma } from '@prisma/client';
import { hashSync, compareSync } from 'bcryptjs';
import {
  JsonWebTokenError,
  sign,
  TokenExpiredError,
  verify,
} from 'jsonwebtoken';
import { Response } from 'express';
import { DtoMapper } from 'src/Utils/dto.mapper';
import { LoginResponseDto, SignUpResponseDto } from './dto/auth.response.dto';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  //Sign Up User
  async signUp(data: Prisma.UserCreateInput): Promise<SignUpResponseDto> {
    try {
      const existingUser = await this.databaseService.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (existingUser) {
        throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
      }
      const hashedPassword = hashSync(data.password, 10);
      const newUser = await this.databaseService.user.create({
        data: {
          password: hashedPassword,
          email: data.email,
        },
      });
      if (!newUser) {
        throw new HttpException(
          'Failed to create user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(newUser, SignUpResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Login User
  async login(
    data: Prisma.UserCreateInput,
    res: Response,
  ): Promise<LoginResponseDto> {
    try {
      const validUser = await this.databaseService.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!validUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const validPassword = compareSync(data.password, validUser.password);
      if (!validPassword) {
        throw new HttpException('Check your password', HttpStatus.UNAUTHORIZED);
      }
      const token = sign(
        {
          email: validUser.email,
          firstName: validUser.firstName,
          lastName: validUser.lastName,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h',
        },
      );
      const response = DtoMapper.mapDto(validUser, LoginResponseDto);
      res.cookie('accessToken', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 60 * 60 * 1000,
        path: '/',
      });
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Validate Token
  async verifyToken(token: string) {
    try {
      const validUser = verify(token, process.env.JWT_SECRET_KEY);
      return validUser;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new HttpException('Token has expired', HttpStatus.UNAUTHORIZED);
      } else if (error instanceof JsonWebTokenError) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      } else {
        throw new HttpException(
          'Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  //Logout
  async logout(res: Response) {
    res.clearCookie('accessToken');
    res.status(200).json({
      message: 'Logout Successful',
    });
    try {
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
