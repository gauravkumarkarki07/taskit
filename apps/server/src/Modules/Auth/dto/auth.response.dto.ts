import { Expose } from 'class-transformer';

export class SignUpResponseDto {
  @Expose()
  id: string;
  @Expose()
  email: string;
}

export class LoginResponseDto {
  @Expose()
  id: string;
  @Expose()
  email: string;
  @Expose()
  firstName?: string;
  @Expose()
  lastName?: string;
}
