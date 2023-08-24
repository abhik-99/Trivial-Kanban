import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoogleLoginUserDto } from './dto/google-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}
  async googleLogin(user: GoogleLoginUserDto) {
    if (!user) {
      throw new UnauthorizedException('No user from google');
    }
    const {
      firstName,
      lastName,
      email,
      email_verified,
      expires_in,
      picture,
      providerAccountId,
      accessToken,
      refreshToken,
      id_token,
    } = user;
    const userData = await this.prisma.users.findFirst({
      where: { email},
      include: { accounts: true },
    });
    if (!userData) {
      const newUserData = await this.prisma.users.create({
        data: {
          name: `${firstName} ${lastName}`,
          email: email,
          emailVerified: email_verified? (new Date()).toISOString(): null,
          image: picture,
          accounts: {
            create: {
              type: 'oauth',
              provider: 'google',
              providerAccountId: providerAccountId,
              access_token: accessToken,
              refresh_token: refreshToken,
              id_token: id_token,
              expires_at: expires_in,
            },
          },
        },
      });
      const access_token = await this.signJwt(
        newUserData.id,
        id_token,
        accessToken,
        expires_in,
      );
      return { access_token };
    }
    const access_token = await this.signJwt(
      userData.id,
      id_token,
      accessToken,
      expires_in,
    );
    return { access_token };
  }
  signJwt(
    userId: string,
    id_token: string,
    access_token: string,
    expires_at: number,
    expiresIn = '1d',
  ): Promise<string> {
    const payload = {
      sub: userId,
      id_token,
      access_token,
      expires_at,
    };
    return this.jwtService.signAsync(payload, {
      expiresIn,
      secret: this.configService.get('APP_JWT_SECRET'),
    });
  }
}
