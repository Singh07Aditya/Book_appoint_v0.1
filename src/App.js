import React, { useState } from "react";
import DoctorList from "./DoctorList";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";

const App = () => {
  const [doctors] = useState([
    { id: 1, name: "Dr. Akhilesh kumar" },
    { id: 2, name: "Dr. Mithilesh kumar" },
    { id: 2, name: "Dr. jitendra kumar" },
    { id: 2, name: "Dr. veena singh" },
    { id: 2, name: "Dr. kanhaiya singh" },
    { id: 2, name: "Dr. rakesh pandey" },
    { id: 2, name: "Dr. ranjan kumar" }

    // Add more doctors here
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingNumber, setBookingNumber] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBookingSubmit = (patientName) => {
    // Here you can implement the logic to actually book the appointment and generate a booking number
    // For simplicity, we'll just set a random booking number here
    const randomBookingNumber = Math.floor(Math.random() * 10000);
    setBookingNumber(randomBookingNumber);
  };

  return (
    <div>
      {!bookingNumber ? (
        <>
          <DoctorList doctors={doctors} onDoctorSelect={handleDoctorSelect} />
          {selectedDoctor && (
            <BookingForm
              selectedDoctor={selectedDoctor}
              onBookingSubmit={handleBookingSubmit}
            />
          )}
        </>
      ) : (
        <BookingConfirmation bookingNumber={bookingNumber} />
      )}
    </div>
  );
};

export default App;
