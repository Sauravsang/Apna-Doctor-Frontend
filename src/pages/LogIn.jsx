import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Log In to ApnaDoctor
          </h2>
          <p className="text-center font-medium mb-4">Select your login type:</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/login/doctor')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Login as Doctor
            </button>
            <button
              onClick={() => navigate('/login/patient')}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Login as Patient
            </button>
            <button
              onClick={() => navigate('/login/admin')}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900"
            >
              Login as Admin
            </button>
          </div>
        </div>
     
    </div>
  );
};

export default LogIn;
