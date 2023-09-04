import { Global, Module } from '@nestjs/common';
import { PrismaSupabaseService } from './prisma-supabase.service';

@Global()
@Module({
  providers: [PrismaSupabaseService],
  exports: [PrismaSupabaseService]
})
export class PrismaSupabaseModule {}
