import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/supabase';

@Injectable()
export class PrismaSupabaseService extends PrismaClient {
  constructor(configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('SUPABASE_DATABASE_URL'),
        },
      },
    });
  }

}
