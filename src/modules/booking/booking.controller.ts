import { Request, Response } from "express";
import { BookingService } from "./booking.service";

export const createBooking = async (req: Request, res: Response) => {
  const files = req.files as {
    idProof?: Express.Multer.File[];
    photo?: Express.Multer.File[];
  };

  const booking = await BookingService.createBooking({
    ...req.body,
    idProofImageUrl: files?.idProof?.[0]?.originalname,
    customerPhotoUrl: files?.photo?.[0]?.originalname,
  });

  res.status(201).json(booking);
};
