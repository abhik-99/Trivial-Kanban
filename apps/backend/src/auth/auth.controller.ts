import { Controller, Get, Req, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { HttpUser } from 'src/decorators';
import { HttpGoogleOAuthGuard } from 'src/guards';
import { GoogleLoginUserDto } from './dto/google-login.dto';

@SetMetadata('google-login', true)
@UseGuards(HttpGoogleOAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  async googleAuth(@Req() _req: Request) {}

  @Get('google-redirect')
  googleAuthRedirect(@HttpUser() user: GoogleLoginUserDto) {
    return this.authService.googleLogin(user);
  }
}
