
import React, { useState, useMemo } from 'react';
import type { Doctor } from '../types';
import { DOCTORS } from '../constants';
import DoctorCard from '../components/DoctorCard';

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');

  const specialties = useMemo(() => ['All', ...new Set(DOCTORS.map(d => d.specialty))], []);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doctor => {
      const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const specialtyMatch = specialtyFilter === 'All' || doctor.specialty === specialtyFilter;
      return nameMatch && specialtyMatch;
    });
  }, [searchTerm, specialtyFilter]);

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-extrabold text-slate-800">Find Your Specialist</h1>
          <p className="mt-2 text-lg text-slate-600">Search our directory of world-class doctors.</p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="search-doctor" className="block text-sm font-medium text-slate-700">
              Search by name
            </label>
            <input
              type="text"
              id="search-doctor"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="e.g., Dr. Evelyn Reed"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="filter-specialty" className="block text-sm font-medium text-slate-700">
              Filter by specialty
            </label>
            <select
              id="filter-specialty"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              value={specialtyFilter}
              onChange={e => setSpecialtyFilter(e.target.value)}
            >
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-slate-700">No Doctors Found</h2>
            <p className="mt-2 text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
