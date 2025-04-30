import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ListOfDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // yahan direct fetch se data le rahe hain
    fetch("http://localhost:5000/doctorsData")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);   // <-- yaha check kar bhai kya aa raha
        setDoctors(data.doctors);  // response ke andar "doctors" array aayega
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-500 px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-10"
      >
        List of Doctors
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor._id}  // database ka _id use kar rahe hain
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-bold text-blue-700">{doctor.name}</h2>
            <p className="text-gray-700">{doctor.specialization}</p>
            <p className="text-gray-500">{doctor.address}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListOfDoctors;
