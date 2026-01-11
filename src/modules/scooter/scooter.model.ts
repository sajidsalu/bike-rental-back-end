import { Schema, model } from "mongoose";

export enum ScooterStatus {
  AVAILABLE = "AVAILABLE",
  ON_ROAD = "ON_ROAD",
  MAINTENANCE = "MAINTENANCE",
}

const ScooterSchema = new Schema(
  {
    vehicleType: {
      type: String,
      enum: ["SCOOTER", "BIKE", "CAR"],
      required: true,
    },
    company: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },

    registrationNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    insuranceExpiryDate: { type: Date, required: true },
    pollutionLastTakenDate: { type: Date, required: true },
    pollutionExpiryDate: { type: Date, required: true },

    status: {
      type: String,
      enum: Object.values(ScooterStatus),
      default: ScooterStatus.AVAILABLE,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const Scooter = model("Scooter", ScooterSchema);
