import React, { useEffect } from 'react'

function SendPage() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }
      const parsedUser = JSON.parse(userData);

      if (parsedUser.role === "Patient") {
        navigate("/patientDashboard");
      } else if (parsedUser.role === "Doctor") {
        navigate("/doctorDashboard");
      } else if (parsedUser.role === "Admin") {
        navigate("/adminDashboard");
      } else {
        navigate("/login");
      }
    
  }, []);
  return (
    <div>SendPage</div>
  )
}

export default SendPage