import { Injectable, UseGuards } from '@nestjs/common';
import { HttpGoogleOAuthGuard } from './guards';

@Injectable()
export class AppService {
  @UseGuards(HttpGoogleOAuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
