import React from "react";
import { useAppointments } from "../context/AppointmentContext";

const DoctorDashboard = () => {
  const { appointments, confirmAppointment, rejectAppointment } = useAppointments();

  const handleConfirm = (appointmentId) => {
    confirmAppointment(appointmentId);
    alert("Appointment confirmed!");
  };

  const handleReject = (appointmentId) => {
    rejectAppointment(appointmentId);
    alert("Appointment rejected!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Appointments</h2>
      <div className="mb-6">
        {appointments.length === 0 ? (
          <p>No appointments to review.</p>
        ) : (
          appointments
            .filter((appt) => appt.status === "Pending")
            .map((appt) => (
              <div key={appt.id} className="border p-4 mb-4">
                <p>{appt.patient} - {appt.specialty} ({appt.hospital})</p>
                <p>{appt.date} at {appt.time}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleConfirm(appt.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleReject(appt.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
