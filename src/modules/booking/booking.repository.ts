import { Booking } from "./booking.model";

export const BookingRepository = {
  create(data: any) {
    return Booking.create(data);
  },

  findById(id: string) {
    return Booking.findById(id).populate("scooterId");
  },
};
