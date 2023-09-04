import { Global, Module } from '@nestjs/common';
import { PrismaRenderService } from './prisma-render.service';

@Global()
@Module({
  providers: [PrismaRenderService],
  exports: [PrismaRenderService]
})
export class PrismaRenderModule {}
