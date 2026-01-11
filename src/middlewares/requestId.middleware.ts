import { v4 as uuidv4 } from "uuid";
import { Request, Response, NextFunction } from "express";

export const requestIdMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  req.headers["x-request-id"] = uuidv4();
  next();
};
