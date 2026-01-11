declare module "uuid";

export interface JwtPayload {
  adminId: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
