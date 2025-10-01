
import React from 'react';
import { Link } from 'react-router-dom';
import type { Service, Testimonial } from '../types';
import { SERVICES, DOCTORS, TESTIMONIALS } from '../constants';
import DoctorCard from '../components/DoctorCard';
import { StarIcon } from '../components/icons';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-primary-light/30 p-4 rounded-full">
                <service.icon className="h-8 w-8 text-primary-dark" />
            </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-slate-600">{service.description}</p>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full -mt-20 border-4 border-white shadow-md" />
        <p className="mt-4 text-slate-600 italic">"{testimonial.text}"</p>
        <div className="mt-4 font-semibold text-slate-800">{testimonial.name}</div>
        <div className="text-sm text-slate-500">{testimonial.location}</div>
    </div>
);

const Home = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-secondary-light pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800">
            Compassionate Care, Conveniently Connected.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-700">
            Book appointments with top specialists, manage your health records, and experience a new standard of healthcare.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              to="/find-doctor" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Find a Doctor
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-slate-100 text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
                <ServiceCard key={service.name} service={service} />
            ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
              <img src="https://picsum.photos/seed/care/800/600" alt="Doctor with patient" className="rounded-lg shadow-2xl"/>
          </div>
          <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-800">Why Choose MediConnect?</h2>
              <p className="mt-4 text-slate-600">
                We are committed to providing you with the best possible medical care in a comfortable and modern environment. Our platform is designed to make healthcare accessible and stress-free.
              </p>
              <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                      <StarIcon className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-1"/>
                      <span><span className="font-semibold">Top-Rated Specialists:</span> Access a network of highly qualified and experienced doctors across various fields.</span>
                  </li>
                  <li className="flex items-start">
                      <StarIcon className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-1"/>
                      <span><span className="font-semibold">Seamless Online Booking:</span> Find available slots and book your appointments 24/7 from anywhere.</span>
                  </li>
                  <li className="flex items-start">
                      <StarIcon className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-1"/>
                      <span><span className="font-semibold">Patient-Centric Approach:</span> Your health and comfort are our top priorities. We listen and we care.</span>
                  </li>
              </ul>
          </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800">Meet Our Specialists</h2>
          <p className="mt-2 text-lg text-center text-slate-600">Dedicated professionals committed to your well-being.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.slice(0, 4).map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-3xl font-bold text-center text-slate-800">What Our Patients Say</h2>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TESTIMONIALS.map(testimonial => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
