import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            SignUP to ApnaDoctor
          </h2>
          <p className="text-center mb-4">Select your SignUp type:</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/signup/docsignup')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              SignUP as Doctor
            </button>
            <button
              onClick={() => navigate('/signup/patientsignup')}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              SignUp as Patient
            </button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
