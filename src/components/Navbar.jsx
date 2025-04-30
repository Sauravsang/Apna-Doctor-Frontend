import React from 'react'
import { doclogo } from '../Data'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation()
  return (
   
    <motion.nav
      className="bg-white shadow-sm sticky top-0 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-4">
        <Link className="flex gap-5 font-bold items-center" to="/">
          <img src={doclogo} alt="ApnaDoctor logo" className="w-15" />
          Apna Doctor
        </Link>
        <div className="hidden md:flex gap-6 items-center text-zinc-700">
          {[
            { path: "/Browse", label: "Browse" },
            { path: "/HelpPage", label: "Help" },
            { path: "/list-of-doctors", label: "List Of Doctors on ApnaDoctor" },
            { path: "/login", label: "Login" },
          ].map(({ path, label }) => (
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
            whileHover={{ scale: 1.05 }}
            className="ml-1 bg-[#f6df4e] font-bold px-4 py-2 rounded-full text-[#333231] border border-[#f6df4e] hover:bg-yellow-300 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </motion.nav>
//   );
// };

// export default Navbar;

    // <header className="bg-white shadow-sm sticky top-0 z-50">
    //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    //           <img src={doclogo} alt="Apna Doctor" className="h-10 w-auto" />
    //           <h3 className="font-bold -ml-20 sm:-ml-50 md:-ml-90 lg:-ml-160">Apna Doctor</h3>
    //           <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
    //           <Link
    //             to="/find-doctor"
    //             className="hover:text-blue-600 transition-colors duration-200"
    //           >
              
              
    //             Find a Doctor
    //           </Link>
    //           <Link
    //             to="/book-appointment"
    //             className="hover:text-blue-600 transition-colors duration-200"
    //           >
    //             Book Appointment
    //           </Link>
    //           <Link
    //             to="/how-it-works"
    //             className="hover:text-blue-600 transition-colors duration-200"
    //           >
    //             How It Works
    //           </Link>
    //           <Link
    //             to="/sign-in"
    //             className="hover:text-blue-600 transition-colors duration-200"
    //           >
    //             Sign In
    //           </Link>
    //           </nav>
    //           <button className="md:hidden text-gray-600 focus:outline-none" aria-label="Open menu">
    //             <svg
    //               className="h-6 w-6"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M4 6h16M4 12h16M4 18h16" />
    //             </svg>
    //           </button>
    //         </div>
    //       </header>
  )
}

export default Navbar