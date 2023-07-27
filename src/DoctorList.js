import React from "react";

const DoctorList = ({ doctors, onDoctorSelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold">Available Doctors:</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} onClick={() => onDoctorSelect(doctor)}>
            {doctor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
