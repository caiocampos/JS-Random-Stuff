export interface UserSession {
  userPoolId: string;
  region: string;
  clientId?: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  idToken: string;
}
