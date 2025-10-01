
import React from 'react';
import type { Doctor } from '../types';
import { Link } from 'react-router-dom';
import { StarIcon } from './icons';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <img className="w-full h-56 object-cover object-center" src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
        <p className="text-md text-primary-dark font-semibold mt-1">{doctor.specialty}</p>
        <p className="text-sm text-slate-500 mt-1">{doctor.location}</p>
        <div className="flex items-center mt-3 text-amber-500">
            <StarIcon className="w-5 h-5"/>
            <span className="text-slate-600 font-bold ml-1">{doctor.rating}</span>
            <span className="text-slate-500 text-sm ml-2">({doctor.reviews} reviews)</span>
        </div>
        <div className="mt-auto pt-4">
          <Link 
            to={`/doctor/${doctor.id}`} 
            className="w-full block text-center bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
