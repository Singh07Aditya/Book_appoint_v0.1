import React from "react";

const BookingConfirmation = ({ bookingNumber }) => {
  return (
    <div>
      <h2>Booking Successful!</h2>
      <p>Booking Number: {bookingNumber}</p>
    </div>
  );
};

export default BookingConfirmation;
