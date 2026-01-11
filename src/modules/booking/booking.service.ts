import { BookingRepository } from "./booking.repository";
import { ScooterRepository } from "../scooter/scooter.repository";
import { ScooterStatus } from "../scooter/scooter.model";

import { eventBus } from "../../lib/eventBus";

export const BookingService = {
  async createBooking(data: any) {
    // 1. Ensure scooter exists & available
    const scooter = await ScooterRepository.findById(data.scooterId);

    if (!scooter || scooter.status !== ScooterStatus.AVAILABLE) {
      throw new Error("Scooter not available");
    }

    // 2. Create booking
    const booking = await BookingRepository.create(data);

    // 3. Mark scooter ON_ROAD
    await ScooterRepository.updateStatus(data.scooterId, ScooterStatus.ON_ROAD);

    // 4. Trigger async actions (email, sms, etc.)
    // eventBus.publish("BOOKING_CREATED", booking);

    await eventBus.publish("BOOKING_CREATED", booking);
    return booking;
  },
};
