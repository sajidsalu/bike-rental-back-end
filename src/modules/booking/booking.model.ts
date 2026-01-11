import { Schema, model } from "mongoose";

export enum BookingStatus {
  CREATED = "CREATED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

const BookingSchema = new Schema(
  {
    customerName: { type: String, required: true },
    phoneNumber: { type: String, require: true, index: true },
    idProofImageUrl: { type: String, require: true },
    customerPhotoUrl: { type: String, required: true },

    bookingDate: { type: Date, required: true },
    pickupLocation: { type: String, required: true },
    depositAmount: { type: Number, required: true },

    scooterId: {
      type: Schema.Types.ObjectId,
      ref: "Scooter",
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: Object.values(BookingStatus),
      default: BookingStatus.CREATED,
      index: true,
    },
  },
  { timestamps: true }
);

export const Booking = model("Booking", BookingSchema);
