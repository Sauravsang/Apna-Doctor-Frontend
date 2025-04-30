// import React from "react";
import React, { useState } from "react";
// import { doclogo } from "../Data";
import { logo1 } from "../Data";
// import { Link } from "react-router-dom";
import Doctors from "./Doctors";

const heroBg =
  "https://images.ctfassets.net/4cd45et68cgf/6H6Dq6xqS5s6M6k0q4Wa8A/2e1d39f0d6d8e7d0b2c9f5f3d7e4e6b3/doctor-patient-hero.jpg";
const doctorImg =
  "https://images.ctfassets.net/4cd45et68cgf/3pJ6NwX7q5X7Y9b2s4Aqg7/0d2f4c9d3f6f6d3e4b0a8f9d5e1c7a2e/doctor-profile.jpg";

function Header() {
  const [search, setSearch] = useState(""); // State to manage search input
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      {/* Hero Section */}
      <section
        id="find-doctor"
        className="relative bg-gradient-to-tr from-gray-800 to-gray-700 text-white"
      >
        <img
          src={logo1}
          alt="Doctor consulting patient"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
          loading="lazy"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Find the right doctor, book instantly
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-md drop-shadow-md">
              Search top-rated doctors, read verified patient reviews, and book appointments instantly — all for free.
            </p>
            <form
              className="mt-8 flex max-w-md mx-auto md:mx-0 bg-white rounded-full shadow-lg overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Search doctors"
            >
              <input
                type="text"
                placeholder="Search doctors, specialties, or conditions"
                className="flex-grow py-3 px-5 text-gray-900 placeholder-gray-400 focus:outline-none"
                aria-label="Search doctors, specialties, or conditions"
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Update search state
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 font-semibold text-white rounded-full"
                aria-label="Search"
              >
                Search
              </button>
            </form>
            <p className="mt-4 text-sm opacity-75">
              No hidden fees. Free to use.
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0 rounded-lg overflow-hidden shadow-lg w-80">
            <img
              src={doctorImg}
              alt="Friendly doctor smiling"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Doctors Search Results */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Doctors search={search} />
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900">
          How ApnaDoctor Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Find a Doctor</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              Search by specialty, condition, or location to find the best doctor for your needs.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              View available appointment times and book instantly, no phone calls required.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">See Your Doctor</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              Visit your doctor and manage your health with confidence and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Popular Specialties
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore top specialties and find the right care for you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {[
            { name: "Dentists", icon: "🦷" },
            { name: "Dermatologists", icon: "🧴" },
            { name: "Pediatricians", icon: "🧒" },
            { name: "Cardiologists", icon: "❤️" },
            { name: "Therapists", icon: "🧠" },
            { name: "Optometrists", icon: "👁️" },
          ].map(({ name, icon }) => (
            <a
              key={name}
              href="#"
              className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition-colors"
              aria-label={`Browse ${name}`}
            >
              <div className="text-4xl mb-2">{icon}</div>
              <span className="text-sm font-semibold">{name}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Header;
