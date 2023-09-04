import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, PrismaHealthIndicator } from '@nestjs/terminus';
import { Public } from 'src/decorators';
import { PrismaSupabaseService } from 'src/prisma-supabase/prisma-supabase.service';

@Public()
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private prismaHealth: PrismaHealthIndicator,
    private prismaSupabase: PrismaSupabaseService,
  ) {}

  @Get('db/supabase')
  @HealthCheck()
  check() {
    return this.health.check([
      async () => this.prismaHealth.pingCheck('prisma', this.prismaSupabase),
    ]);
  }
}
