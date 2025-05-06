import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPatient() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      const res = await fetch('https://apna-doctor-backend.onrender.com/login/patient', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userType", "Patient");

        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message || "Invalid credentials" };
      }

    } catch (err) {
      return { success: false, message: "Login failed. Please try again." };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(email, password);
  
    if (res.success) {
      console.log("User role:", res.user.role);
  
      const role = res.user.role;
      console.log(role);
      
  
      if (role == "Patient") {
        localStorage.setItem("userType", "Patient");
        navigate("/patientDashboard");
      } else {
        alert("Only Patient can access this area.");
        // navigate("/login");
      }
    } else {
      alert(res.message);
    }
  };

  return (
    <div className='flex justify-center py-12'>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Log In as Patient
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default LoginPatient;
