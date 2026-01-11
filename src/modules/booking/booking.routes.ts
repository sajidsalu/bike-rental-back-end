import { Router } from "express";
import { createBooking } from "./booking.controller";
import { upload } from "../../middlewares/upload.middlewear";

import { validate } from "../../middlewares/validate.middleware";
import { createBookingSchema } from "./booking.validation";
import { bookingRateLimiter } from "../../middlewares/rateLimit.middleware";

const router = Router();

// router.post(
//   "/bookings",
//   upload.fields([
//     { name: "idProof", maxCount: 1 },
//     { name: "photo", maxCount: 1 },
//   ]),
//   createBooking
// );

router.post(
  "/bookings",
  bookingRateLimiter,
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  validate(createBookingSchema),
  createBooking
);

export default router;
