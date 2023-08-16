import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(user: any) {
    if (!user) {
      throw new UnauthorizedException('No user from google');
    }

    return {
      message: 'User information from google',
      user
    };
  }
}
