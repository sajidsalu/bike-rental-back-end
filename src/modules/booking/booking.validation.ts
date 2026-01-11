import { z } from "zod";

export const createBookingSchema = z.object({
  customerName: z.string().min(2),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/),
  bookingDate: z.string(),
  pickupLocation: z.string().min(3),
  depositAmount: z.number().positive(),
  scooterId: z.string(),
});
