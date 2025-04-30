import React, { useState } from "react";
import { doclogo } from "../Data";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/Browse", label: "Browse" },
    { path: "/HelpPage", label: "Help" },
    { path: "/list-of-doctors", label: "List Of Doctors on ApnaDoctor" },
    { path: "/login", label: "Login" },
  ];

  return (
    <motion.nav
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Logo */}
        <Link className="flex gap-3 font-bold items-center" to="/">
          <img src={doclogo} alt="ApnaDoctor logo" className="w-12 h-12" />
          <span className="text-lg md:text-xl">Apna Doctor</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-zinc-700">
          {navItems.map(({ path, label }) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col"
            >
              <Link to={path} className="hover:text-blue-600">
                {label}
              </Link>
              <hr
                className={`${
                  location.pathname === path
                    ? "border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto"
                    : "hidden"
                }`}
              />
            </motion.div>
          ))}
          <Link
            to="/sign-up"
            className="ml-1 bg-[#f6df4e] font-bold px-4 py-2 rounded-full text-[#333231] border border-[#f6df4e] hover:bg-yellow-300 transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 shadow-md"
          >
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block text-gray-700 hover:text-blue-600`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/sign-up"
              className="block mt-2 bg-[#f6df4e] font-bold px-4 py-2 rounded-full text-[#333231] border border-[#f6df4e] hover:bg-yellow-300 transition-colors w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
