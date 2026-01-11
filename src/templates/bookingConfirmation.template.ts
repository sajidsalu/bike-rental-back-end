export const bookingConfirmationTemplate = (data: {
  customerName: string;
  bookingId: string;
  pickupLocation: string;
}) => `
  <h2>Booking Confirmed</h2>
  <p>Hello ${data.customerName},</p>
  <p>Your booking <strong>${data.bookingId}</strong> is confirmed.</p>
  <p>Pickup Location: ${data.pickupLocation}</p>
  <p>Thank you for choosing us.</p>
`;
