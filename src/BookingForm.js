import React, { useState } from "react";

const BookingForm = ({ selectedDoctor, onBookingSubmit }) => {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientAddress, setPatientAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(patientName);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
      {selectedDoctor && <p>Selected Doctor: {selectedDoctor.name}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </label>
        <label>
          Patient address:
          <input
            type="text"
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
          />
        </label>
        <label>
          Patient Age:
          <input
            type="number"
            value={patientAge}
            onChange={(e) => setPatientAge(+e.target.value)}
          />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingForm;
