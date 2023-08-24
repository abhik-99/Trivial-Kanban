export class GoogleLoginUserDto {
  providerAccountId: string;
  email: string;
  email_verified: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  refreshToken: string;
  id_token: string;
  expires_in: number;
}
