import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import LogIn from './pages/LogIn';
import ListOfDoctors from './pages/ListOfDoctors';
import { AppointmentProvider } from "./context/AppointmentContext";
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import BrowseByHospital from './pages/BrowseByHospital';
import HelpPage from './pages/HelpPage';
// import AdminLogin from './pages/AdminLogIn';
import AdminPendingUsers from './pages/AdminPendingUsers';
import AdminDashboard from './components/AdminDashboard';
import DoctorSignup from './pages/DoctorSignup';
import PatientSignup from './pages/PatientSignup';
import SendPage from './pages/SendPage';
import LoginAdmin from './pages/LoginAdmin';
import LoginDoctor from './pages/LoginDoctor';
import LoginPatient from './pages/LoginPatient';

function App() {
  return (
      <AppointmentProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list-of-doctors" element={<ListOfDoctors />} />
        <Route path="/Browse" element={ <BrowseByHospital/> } />
        <Route path='/HelpPage' element={ <HelpPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/admin/pending-users" element={<AdminPendingUsers />} />
        <Route path='/patientDashboard' element={ <PatientDashboard />} />
        <Route path='/doctorDashboard' element={ <DoctorDashboard />} />
        <Route path='/signup/docsignup' element={ <DoctorSignup />} />
        <Route path='/signup/patientsignup' element={ <PatientSignup />} />
        <Route path='/send' element={ <SendPage />} />
        <Route path='/login/admin' element={ <LoginAdmin />} />
        <Route path='/login/doctor' element={ <LoginDoctor />} />
        <Route path='/login/patient' element={ <LoginPatient />} />

      </Routes>
      <Footer/>
    </Router>
        </AppointmentProvider>
  );
}

export default App;
