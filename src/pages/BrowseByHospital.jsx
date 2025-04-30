import React, { useEffect, useState } from "react";
import { CiHospital1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BrowseByHospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/browseData")
      .then((res) => res.json())
      .then((data) => {
        console.log("Hospitals fetched:", data);
        setHospitals(data.hospitals);
      })
      .catch((error) => console.error("Error fetching hospitals:", error));
  }, []);

  const handleRedirect = (hospital) => {
    navigate(`/list-of-doctors?hospital=${encodeURIComponent(hospital)}`);
  };

  return (
    <div className="py-10 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex justify-center items-center gap-2">
        <CiHospital1 className="w-7 h-7 text-blue-500" /> Browse by Hospital
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={hospital._id}
            className="bg-white rounded-xl shadow-md border border-gray-200 cursor-pointer"
            onClick={() => handleRedirect(hospital.name)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
            // frontend\public\assets\hp1.png
              // src="../../public/assets/hp1.png"

              // src={hospital.image}
              src={hospital.banner}
              alt={hospital.name}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                {hospital.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{hospital.location}</p>
              <p className="text-gray-600 text-sm">{hospital.description}</p>
              <p className="mt-3 text-sm text-blue-600 hover:underline">
                See doctors at this hospital →
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByHospital;








// import React from "react";
// import { CiHospital1 } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Hp, Hp2, Hp3, Hp4, Hp5 } from "../Data";

// const hospitals = [
//   {
//     name: "AIIMS",
//     location: "Delhi",
//     description: "Top multi-specialty government hospital.",
//     image: Hp,
//   },
//   {
//     name: "Apollo Hospitals",
//     location: "Pan India",
//     description: "Renowned private hospital network.",
//     image: Hp2,
//   },
//   {
//     name: "Fortis Healthcare",
//     location: "Gurgaon",
//     description: "Leading chain for modern medical care.",
//     image: Hp3,
//   },
//   {
//     name: "Max Healthcare",
//     location: "Delhi NCR",
//     description: "Quality care with experienced doctors.",
//     image: Hp4,
//   },
//   {
//     name: "Medanta",
//     location: "Gurgaon",
//     description: "Famous for advanced surgeries and care.",
//     image: Hp5,
//   },
// ];

// const BrowseByHospital = () => {
//   const navigate = useNavigate();

//   const handleRedirect = (hospital) => {
//     navigate(`/list-of-doctors?hospital=${encodeURIComponent(hospital)}`);
//   };

//   return (
//     <div className="py-10 px-6 md:px-16 bg-gray-50">
//       <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex justify-center items-center gap-2">
//         <CiHospital1 className="w-7 h-7 text-blue-500" /> Browse by Hospital
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {hospitals.map((hospital, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl shadow-md border border-gray-200 cursor-pointer"
//             onClick={() => handleRedirect(hospital.name)}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//           >
//             <img
//               src={hospital.image}
//               alt={hospital.name}
//               className="w-full h-40 object-cover rounded-t-xl"
//             />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-blue-700 mb-1">
//                 {hospital.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-2">{hospital.location}</p>
//               <p className="text-gray-600 text-sm">{hospital.description}</p>
//               <p className="mt-3 text-sm text-blue-600 hover:underline">
//                 See doctors at this hospital →
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseByHospital;
