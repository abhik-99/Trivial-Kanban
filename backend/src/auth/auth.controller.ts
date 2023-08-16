import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { HttpUser } from 'src/decorators';
import { HttpGoogleOAuthGuard } from 'src/guards';

@UseGuards(HttpGoogleOAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  async googleAuth(@Req() _req: Request) {}

  @Get('google-redirect')
  googleAuthRedirect(@HttpUser() user) {
    return this.authService.googleLogin(user);
  }
}
