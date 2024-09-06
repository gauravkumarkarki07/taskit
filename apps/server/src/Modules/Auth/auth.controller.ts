import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto, SignUpRequestDto } from './dto/auth.request.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //SignUp Account
  @Post('signup')
  async signUp(@Body() data: SignUpRequestDto) {
    return this.authService.signUp(data);
  }

  @Post('login')
  async login(
    @Body() data: LoginRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(data, res);
  }
}
