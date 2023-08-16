import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: {
      DATABASE_URL: Joi.string().required(),
      GOOGLE_CLIENT_ID: Joi.string().required(),
      GOOGLE_CLIENT_SECRET: Joi.string().required(),
      GOOGLE_CALLBACK_URL: Joi.string().required()
    },
    envFilePath: '.env'
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
