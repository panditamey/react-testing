import React from "react";

const Appointment = ({ customer }) => {
  return (
    <div>
      <h1>{customer.firstName}</h1>
    </div>
  );
};

export default Appointment;
