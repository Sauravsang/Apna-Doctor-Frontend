import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const SearchForm = () => {
  const [hospital, setHospital] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");

  const [activeField, setActiveField] = useState(""); 

  const hospitalOptions = ["Fortis", "Apollo", "AIIMS", "Max", "Medanta"];
  const cityOptions = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
  const serviceOptions = ["Cardiology", "Dentistry", "Orthopedics", "Neurology", "Pediatrics"];

  const getSuggestions = (type) => {
    const value = { hospital, city, service }[type];
    const source = { hospital: hospitalOptions, city: cityOptions, service: serviceOptions }[type];
    return source.filter((opt) => opt.toLowerCase().includes(value.toLowerCase()));
  };

  const handleChange = (type, value) => {
    if (type === "hospital") setHospital(value);
    if (type === "city") setCity(value);
    if (type === "service") setService(value);
  };

  return (

<div className="md:w-2/3 mt-2.5 relative">
<motion.h1
  className="text-2xl md:text-4xl font-bold text-[#333231] mb-4 flex flex-wrap items-center gap-1"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Book local doctors who care your{" "}
  <span className="text-blue-600 inline-block min-w-[120px]">
    <Typewriter
      words={["Health", "Wellbeing", "Recovery"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.h1>




  <form className="flex flex-col md:flex-row shadow-lg bg-white rounded-lg mb-3">
    <input
      placeholder="Hospital Name / Search..."
      value={hospital}
      onChange={(e) => handleChange("hospital", e.target.value)}
      onFocus={() => setActiveField("hospital")}
      onBlur={() => setTimeout(() => setActiveField(""), 200)}
      className="flex-1 px-4 py-3 outline-none text-base text-[#333231]"
    />
    <input
      placeholder="City / Search"
      value={city}
      onChange={(e) => handleChange("city", e.target.value)}
      onFocus={() => setActiveField("city")}
      onBlur={() => setTimeout(() => setActiveField(""), 200)}
      className="w-56 px-4 py-3 border-l outline-none text-base text-[#333231]"
    />
    <input
      placeholder="Doctors / Service"
      value={service}
      onChange={(e) => handleChange("service", e.target.value)}
      onFocus={() => setActiveField("service")}
      onBlur={() => setTimeout(() => setActiveField(""), 200)}
      className="w-72 px-4 py-3 border-l outline-none text-base text-[#333231]"
    />
    <button
      type="submit"
      className="bg-[#f6df4e] w-16 rounded-lg md:w-auto px-4 flex items-center justify-center font-bold text-[#333231] hover:bg-yellow-300 transition-colors"
    >
      <span className="hidden md:inline">Search</span>
      <svg className="md:ml-1 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  </form>

  {activeField && getSuggestions(activeField).length > 0 && (
    <div className="absolute z-20 bg-white shadow-lg rounded-lg border mt-2 w-full p-4">
      <h4 className="font-semibold text-gray-700 mb-2 capitalize">
        {activeField === "service" ? "Services" : activeField}s
      </h4>
      <ul>
        {getSuggestions(activeField).map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
            onMouseDown={(e) => {
              e.preventDefault();
              handleChange(activeField, item);
              setActiveField("");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )}

  <div className="text-sm text-gray-500 mt-2">No hidden fees. Free to use.</div>
</div>

  );
};

export default SearchForm;
