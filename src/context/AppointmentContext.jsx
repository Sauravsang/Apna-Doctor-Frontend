import React, { createContext, useState, useContext } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Meera Sharma",
      specialty: "Cardiologist",
      hospital: "Fortis",
      date: "2025-05-10",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. Amit Gupta",
      specialty: "Dentist",
      hospital: "Apollo",
      date: "2025-05-15",
      time: "02:30 PM",
      status: "Pending",
    },
  ]);

  const bookAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const confirmAppointment = (appointmentId) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === appointmentId ? { ...appt, status: "Confirmed" } : appt
      )
    );
  };

  const rejectAppointment = (appointmentId) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === appointmentId ? { ...appt, status: "Rejected" } : appt
      )
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        bookAppointment,
        confirmAppointment,
        rejectAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);
