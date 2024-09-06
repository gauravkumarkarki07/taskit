import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto, SignUpRequestDto } from './dto/auth.request.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //SignUp Account
  @Post('signup')
  async signUp(@Body() data: SignUpRequestDto) {
    return this.authService.signUp(data);
  }

  //Login
  @Post('login')
  async login(
    @Body() data: LoginRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(data, res);
  }

  //Verify Token
  @Get('verifytoken')
  async verifyToken(@Req() req: Request) {
    const token = req.cookies.accessToken;
    if (!token) {
      throw new HttpException('Please Login', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.verifyToken(token);
  }
}
