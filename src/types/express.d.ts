import "express";

declare module "express" {
  export interface Request {
    requestId?: string;
    user?: any;
  }
}
