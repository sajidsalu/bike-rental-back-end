import { eventBus } from "../lib/eventBus";
import { EmailService } from "../services/email.service";
import { bookingConfirmationTemplate } from "../templates/bookingConfirmation.template";

eventBus.subscribe("BOOKING_CREATED", async (booking) => {
  await EmailService.send(
    "sjd@yopmail.com", // later dynamic
    "Booking Confirmation",
    bookingConfirmationTemplate({
      customerName: booking.customerName,
      bookingId: booking._id,
      pickupLocation: booking.pickupLocation,
    })
  );
  console.log(
    bookingConfirmationTemplate({
      customerName: "Sajid",
      bookingId: "BOOK123",
      pickupLocation: "Indiranagar",
    })
  );
});
