
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon, MenuIcon, XIcon } from './icons';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary-dark' : 'text-slate-700 hover:bg-primary-light/50 hover:text-slate-900'}`}>Home</NavLink>
        <NavLink to="/find-doctor" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary-dark' : 'text-slate-700 hover:bg-primary-light/50 hover:text-slate-900'}`}>Find a Doctor</NavLink>
        <NavLink to="/my-appointments" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary-dark' : 'text-slate-700 hover:bg-primary-light/50 hover:text-slate-900'}`}>My Appointments</NavLink>
        <NavLink to="/success-rate" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary-dark' : 'text-slate-700 hover:bg-primary-light/50 hover:text-slate-900'}`}>Success Rates</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary-dark' : 'text-slate-700 hover:bg-primary-light/50 hover:text-slate-900'}`}>Contact Us</NavLink>
    </>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-primary-dark hover:text-primary transition-colors">
              <LogoIcon className="h-10 w-10" />
              <span className="text-2xl font-bold">MediConnect</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="hidden md:block">
             <Link to="/find-doctor" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Book Now
             </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-light focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavLinks />
            <Link to="/find-doctor" className="mt-4 w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full shadow-lg">
                Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
