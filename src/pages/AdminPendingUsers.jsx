import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPendingUsers() {
  const [pendingUsers, setPendingUsers] = useState([]);


  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, []);
  

  // Fetch pending users
  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const res = await fetch('https://apna-doctor-backend.onrender.com/doctor/pending-users');
    
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
    
        const data = await res.json();
        console.log('here the data \n',data);
        
        setPendingUsers(data);
      } catch (error) {
        console.error("Error fetching pending users:", error);
        alert("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchPendingUsers();
  }, []);

  // Approve User
  const approveUser = async (userId, role) => {
    try {
      await axios.put(`https://apna-doctor-backend.onrender.com/admin/approve/${userId}`, { role });
      alert("User approved successfully!");
      // Refresh list after approval
      setPendingUsers(pendingUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error approving user", error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Pending User Approvals</h1>

      {pendingUsers? (
        <p>No pending users.</p>
      ) : (
        <div className="space-y-6">
          {pendingUsers.map(user => (
            <div key={user._id} className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => approveUser(user._id, "Doctor")}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Approve as Doctor
                </button>
                <button
                  onClick={() => approveUser(user._id, "Patient")}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Approve as Patient
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

<button
  onClick={() => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  }}
  className="text-red-500 hover:underline"
>
  Logout
</button>


export default AdminPendingUsers;
