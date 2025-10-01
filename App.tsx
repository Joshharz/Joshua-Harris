
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import DoctorProfile from './pages/DoctorProfile';
import MyAppointments from './pages/MyAppointments';
import SuccessRate from './pages/SuccessRate';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <div className="bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/success-rate" element={<SuccessRate />} />
            <Route path="/payment/:appointmentId" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
