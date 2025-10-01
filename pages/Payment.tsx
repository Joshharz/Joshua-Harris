
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Appointment } from '../types';
import { AppointmentStatus } from '../types';
import { APPOINTMENTS } from '../constants';

const Payment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [cardDetails, setCardDetails] = useState({
      number: '',
      name: '',
      expiry: '',
      cvc: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const foundAppointment = APPOINTMENTS.find(a => a.id === appointmentId);
    if (foundAppointment) {
        setAppointment(foundAppointment);
    } else {
        // Create a mock appointment for direct navigation (e.g., from doctor profile)
        setAppointment({
            id: appointmentId || 'new_appt',
            doctorName: 'New Specialist',
            doctorSpecialty: 'Consultation',
            date: new Date().toDateString(),
            time: 'N/A',
            // FIX: Used AppointmentStatus enum instead of a string literal to match the type definition.
            status: AppointmentStatus.Upcoming,
            cost: 200, // Default cost
        });
    }
  }, [appointmentId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
        setIsProcessing(false);
        alert('Payment Successful! Thank you for your payment.');
        navigate('/my-appointments');
    }, 2000);
  };

  if (!appointment) {
      return <div className="text-center py-20">Loading payment details...</div>
  }

  return (
    <div className="bg-slate-100 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-slate-800">Secure Online Payment</h1>
                <p className="mt-2 text-lg text-slate-600">Complete your payment for medical services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Payment Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-700 mb-6">Payment Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-slate-700">Card Number</label>
                                <input type="text" id="card-number" name="number" value={cardDetails.number} onChange={handleInputChange} placeholder="•••• •••• •••• ••••" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                            </div>
                             <div>
                                <label htmlFor="card-name" className="block text-sm font-medium text-slate-700">Cardholder Name</label>
                                <input type="text" id="card-name" name="name" value={cardDetails.name} onChange={handleInputChange} placeholder="John Doe" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label htmlFor="card-expiry" className="block text-sm font-medium text-slate-700">Expiry Date</label>
                                    <input type="text" id="card-expiry" name="expiry" value={cardDetails.expiry} onChange={handleInputChange} placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="card-cvc" className="block text-sm font-medium text-slate-700">CVC</label>
                                    <input type="text" id="card-cvc" name="cvc" value={cardDetails.cvc} onChange={handleInputChange} placeholder="•••" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                                </div>
                            </div>
                        </div>
                        <button type="submit" disabled={isProcessing} className="mt-8 w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg disabled:bg-slate-400 disabled:cursor-wait transition-colors">
                           {isProcessing ? 'Processing...' : `Pay $${appointment.cost.toFixed(2)}`}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-slate-50 p-8 rounded-lg shadow-lg border">
                    <h2 className="text-2xl font-bold text-slate-700 mb-6">Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Service:</span>
                            <span className="font-semibold text-slate-800">{appointment.doctorSpecialty} Consultation</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-slate-600">Doctor:</span>
                            <span className="font-semibold text-slate-800">{appointment.doctorName}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-slate-600">Date:</span>
                            <span className="font-semibold text-slate-800">{appointment.date}</span>
                        </div>
                        <div className="border-t my-4"></div>
                        <div className="flex justify-between text-xl font-bold">
                            <span className="text-slate-700">Total:</span>
                            <span className="text-primary-dark">${appointment.cost.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Payment;