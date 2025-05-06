import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const doctorsList = [
  {
    name: "Dr. Priya Verma",
    specialty: "Neurologist",
    hospital: "AIIMS",
  },
  {
    name: "Dr. Rahul Sen",
    specialty: "Orthopedic",
    hospital: "Medanta",
  },
  {
    name: "Dr. Sneha Kapoor",
    specialty: "Dermatologist",
    hospital: "Max",
  },
];

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      doctor: "Dr. Meera Sharma",
      specialty: "Cardiologist",
      hospital: "Fortis",
      date: "2025-05-10",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      doctor: "Dr. Amit Gupta",
      specialty: "Dentist",
      hospital: "Apollo",
      date: "2025-05-15",
      time: "02:30 PM",
      status: "Pending",
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0]);
  const [changingText, setChangingText] = useState("Your Health");
  const navigate = useNavigate();

  const words = ["Your Health", "Your Family", "Your Wellness", "Your Care"];
  let wordIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setChangingText(words[wordIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
if (!user || user.role !== "Patient") {
  alert("Only patients can access this page.");
  navigate("/login");
}

  }, [navigate]);

  const bookAppointment = () => {
    const newAppointment = {
      doctor: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      hospital: selectedDoctor.hospital,
      date: "2025-05-20",
      time: "11:00 AM",
      status: "Pending",
    };
    setAppointments((prev) => [...prev, newAppointment]);
    alert(`Appointment booked with ${selectedDoctor.name}.`);
  };

  const cancelAppointment = (index) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this appointment?");
    if (confirmCancel) {
      const updatedAppointments = appointments.filter((_, i) => i !== index);
      setAppointments(updatedAppointments);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#333231]">
          Book local doctors who Care For
          <span
            className="text-blue-600 inline-block transition-opacity duration-700 ease-in-out animate-fade ml-2"
            key={changingText}
          >
            {changingText}
          </span>
        </h1>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Appointments</h2>
        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments booked yet.</p>
        ) : (
          <div className="grid gap-4">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow bg-white hover:shadow-md"
              >
                <p className="text-lg font-semibold text-blue-800">
                  {appt.doctor} ({appt.specialty})
                </p>
                <p className="text-sm text-gray-600">
                  {appt.hospital} - {appt.date} at {appt.time}
                </p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm rounded-full font-medium ${
                    appt.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {appt.status}
                </span>
                <button
                  onClick={() => cancelAppointment(index)}
                  className="ml-4 mt-2 text-sm text-red-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Book a New Appointment</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Doctor:</label>
          <select
            value={selectedDoctor.name}
            onChange={(e) => {
              const selected = doctorsList.find((doc) => doc.name === e.target.value);
              setSelectedDoctor(selected);
            }}
            className="w-full px-4 py-2 border rounded-md shadow-sm"
          >
            {doctorsList.map((doc, i) => (
              <option key={i} value={doc.name}>
                {doc.name} ({doc.specialty}, {doc.hospital})
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={bookAppointment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Book Now
        </button>
      </section>

      <style>
        {`
          @keyframes fade {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fade {
            animation: fade 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PatientDashboard;
