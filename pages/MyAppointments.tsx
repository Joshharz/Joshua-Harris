
import React, { useState } from 'react';
import type { Appointment } from '../types';
import { AppointmentStatus } from '../types';
import { APPOINTMENTS } from '../constants';
import { Link } from 'react-router-dom';

const getStatusClasses = (status: AppointmentStatus) => {
  switch (status) {
    case AppointmentStatus.Upcoming:
      return 'bg-blue-100 text-blue-800';
    case AppointmentStatus.Completed:
      return 'bg-green-100 text-green-800';
    case AppointmentStatus.Cancelled:
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                    <h3 className="text-xl font-bold text-slate-800">{appointment.doctorName}</h3>
                    <p className="text-md text-slate-600">{appointment.doctorSpecialty}</p>
                    <p className="text-sm text-slate-500 mt-2">
                        {new Date(appointment.date).toDateString()} at {appointment.time}
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 text-left sm:text-right">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusClasses(appointment.status)}`}>
                        {appointment.status}
                    </span>
                    <p className="text-lg font-semibold text-slate-700 mt-2">${appointment.cost}</p>
                </div>
            </div>
            {appointment.status === AppointmentStatus.Upcoming && (
                <div className="mt-4 border-t pt-4 flex justify-end gap-2">
                     <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                        Reschedule
                    </button>
                    <Link to={`/payment/${appointment.id}`} className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                        Pay Now
                    </Link>
                </div>
            )}
        </div>
    );
}

const MyAppointments = () => {
    const [appointments, setAppointments] = useState<Appointment[]>(APPOINTMENTS);
    const [filter, setFilter] = useState<AppointmentStatus | 'All'>('All');

    const filteredAppointments = appointments.filter(
        (appt) => filter === 'All' || appt.status === filter
    );

    const filterButtons: (AppointmentStatus | 'All')[] = ['All', AppointmentStatus.Upcoming, AppointmentStatus.Completed, AppointmentStatus.Cancelled];

    return (
        <div className="bg-slate-100 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-slate-800">My Appointments</h1>
                    <p className="mt-2 text-lg text-slate-600">View and manage your appointment history.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex justify-center flex-wrap gap-2">
                    {filterButtons.map(f => (
                         <button 
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 text-sm font-medium rounded-full ${filter === f ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="space-y-6">
                    {filteredAppointments.length > 0 ? (
                        filteredAppointments.map(appointment => (
                            <AppointmentCard key={appointment.id} appointment={appointment} />
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-slate-700">No Appointments Found</h2>
                            <p className="mt-2 text-slate-500">There are no appointments with the selected status.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;
