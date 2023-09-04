import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { GoogleStrategy } from './strategies';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { HealthModule } from './health/health.module';
import { PrismaSupabaseModule } from './prisma-supabase/prisma-supabase.module';
import { PrismaRenderModule } from './prisma-render/prisma-render.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        SUPABASE_DATABASE_URL: Joi.string().required(),
        SUPABASE_DIRECT_URL: Joi.string().required(),
        RENDER_DATABASE_URL: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_CALLBACK_URL: Joi.string().required(),
        APP_JWT_SECRET: Joi.string().required()
      }),
    }),
    AuthModule,
    PassportModule,
    JwtModule.register({
      global: true,
    }),
    HealthModule,
    PrismaSupabaseModule,
    PrismaRenderModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, JwtStrategy],
})
export class AppModule {}
