import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/supabase';
import { PrismaSupabaseService } from 'src/prisma-supabase/prisma-supabase.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaSupabaseService) {}
  findAll(where: Prisma.usersWhereInput) {
    return this.prisma.users.findMany({where});
  }

  findOne(id: string) {
    return this.prisma.users.findUniqueOrThrow({where: {id}});
  }

  remove(id: string) {
    return this.prisma.users.delete({where: {id}});
  }
}
