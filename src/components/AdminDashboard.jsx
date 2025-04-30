import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [doc, setDoc] = useState([]);

  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/doctor/pending-users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching pending users:", error);
      alert("Failed to load user data.");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/admin/approve-user/${id}`);
      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, isApproved: "Accepted" } : user
        )
      );
    } catch (err) {
      alert("Failed to approve user.");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/admin/reject-user/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      alert("Failed to reject user.");
    }
  };

  const AllDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/allDoctors");
      setDoc(res.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      alert("Failed to load doctor data.");
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-12">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Admin Dashboard
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-500">No pending requests.</p>
        ) : (
          <div className="grid gap-6">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-gradient-to-tr from-white to-blue-50 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-gray-800">{user.name}</h4>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500 capitalize">Role: {user.role}</p>
                  <p className="text-sm font-medium text-yellow-600">Status: {user.isApproved}</p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <button
                    onClick={() => handleApprove(user._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            onClick={AllDoctors}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            View All Doctors
          </button>
        </div>

        {doc.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">All Doctors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {doc.map((doctor) => (
                <div
                  key={doctor._id}
                  className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-700">{doctor.name}</h4>
                  <p className="text-sm text-gray-600">{doctor.email}</p>
                  <p className="text-sm text-gray-500 capitalize">Role: {doctor.role}</p>
                  <p className="text-sm text-blue-500 font-medium">Status: {doctor.isApproved}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
