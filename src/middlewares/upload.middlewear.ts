import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (
    _req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
  ) => {
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Invalid file type"));
    } else {
      cb(null, true);
    }
  },
});
