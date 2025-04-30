import React from "react";
import { motion } from "framer-motion";

const helpTeam = [
  {
    name: "Anjali Mehta",
    role: "Senior Patient Support Manager",
    phone: "+91-9876543210",
    email: "anjali@apnadoctor.in",
    help: "Assists with appointment issues, doctor availability, and feedback.",
    availability: "Mon - Sat, 9 AM - 6 PM",
  },
  {
    name: "Rohit Khurana",
    role: "Hospital Coordinator",
    phone: "+91-9811122233",
    email: "rohit@apnadoctor.in",
    help: "Coordinates with hospitals for patient check-ins and insurance help.",
    availability: "Mon - Fri, 10 AM - 5 PM",
  },
  {
    name: "Simran Kaur",
    role: "Emergency Contact Manager",
    phone: "+91-9000011111",
    email: "simran@apnadoctor.in",
    help: "Handles emergency bookings and follow-ups.",
    availability: "24/7",
  },
];

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e2ecf9] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-4">How Can We Help You?</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Our dedicated team ensures your experience is smooth and stress-free. Contact the right person based on your needs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {helpTeam.map((person, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
            <p className="text-sm text-blue-600 mb-2">{person.role}</p>
            <p className="text-gray-600 text-sm mb-3">{person.help}</p>
            <p className="text-sm text-gray-500">📞 {person.phone}</p>
            <p className="text-sm text-gray-500">📧 {person.email}</p>
            <p className="text-xs text-gray-400 italic mt-2">🕒 {person.availability}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HelpPage;
