import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/render';

@Injectable()
export class PrismaRenderService extends PrismaClient {
  constructor(configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('RENDER_DATABASE_URL'),
        },
      },
    });
  }

}
