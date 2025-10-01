
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DOCTORS } from '../constants';
import { StarIcon } from '../components/icons';
import NotFound from './NotFound';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = DOCTORS.find(d => d.id === id);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!doctor) {
    return <NotFound />;
  }

  const handleBooking = () => {
      // In a real app, this would trigger a more complex booking process
      // and create a real appointment. Here we just navigate to a mock payment page.
      const mockAppointmentId = `appt_doc${doctor.id}_${Date.now()}`;
      alert(`Appointment booked with ${doctor.name} on ${selectedDate?.toDateString()} at ${selectedTime}. Proceeding to payment.`);
      navigate(`/payment/${mockAppointmentId}`);
  };
  
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];


  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:flex md:gap-8">
            {/* Left Column: Image and Basic Info */}
            <div className="md:w-1/3 text-center md:text-left">
              <img 
                src={doctor.imageUrl} 
                alt={`Dr. ${doctor.name}`} 
                className="w-48 h-48 rounded-full mx-auto md:mx-0 object-cover shadow-md border-4 border-primary-light"
              />
              <h1 className="text-3xl font-bold mt-4 text-slate-800">{doctor.name}</h1>
              <p className="text-xl text-primary-dark font-semibold">{doctor.specialty}</p>
              <div className="flex items-center justify-center md:justify-start mt-2 text-amber-500">
                <StarIcon className="w-5 h-5"/>
                <span className="text-slate-600 font-bold ml-1">{doctor.rating}</span>
                <span className="text-slate-500 text-sm ml-2">({doctor.reviews} reviews)</span>
              </div>
              <p className="mt-2 text-slate-500">{doctor.location}</p>
            </div>
            
            {/* Right Column: Details and Booking */}
            <div className="md:w-2/3 mt-8 md:mt-0">
              <h2 className="text-2xl font-bold border-b pb-2 text-slate-700">About Dr. {doctor.name.split(' ').pop()}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{doctor.bio}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-700">Qualifications</h3>
                  <ul className="list-disc list-inside mt-2 text-slate-600">
                    {doctor.qualifications.map(q => <li key={q}>{q}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Experience</h3>
                  <p className="mt-2 text-slate-600">{doctor.experience} years</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Languages</h3>
                  <p className="mt-2 text-slate-600">{doctor.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Section */}
          <div className="bg-slate-50 p-8 border-t">
            <h2 className="text-2xl font-bold text-center text-slate-700">Book an Appointment</h2>
            <div className="mt-6 max-w-lg mx-auto">
              <div className="mb-4">
                  <h3 className="font-semibold text-lg text-slate-700 mb-2">Select a Date</h3>
                  <input 
                      type="date"
                      value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                      onChange={(e) => setSelectedDate(new Date(e.target.value))}
                      className="w-full p-2 border border-slate-300 rounded-md"
                  />
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-slate-700 mb-2">Select a Time</h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => (
                    <button 
                      key={time} 
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-md text-sm border transition-colors ${selectedTime === time ? 'bg-primary text-white border-primary-dark' : 'bg-white hover:bg-primary-light/50 border-slate-300'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed transition-all"
              >
                {selectedTime ? `Book for ${selectedTime}` : 'Select a date and time'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
