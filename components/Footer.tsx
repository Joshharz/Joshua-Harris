
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterIcon, FacebookIcon, LinkedInIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <LogoIcon className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">MediConnect</span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm">Your trusted partner in health. Providing quality care with compassion.</p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="text-slate-400 hover:text-primary"><TwitterIcon className="h-6 w-6" /></a>
                <a href="#" className="text-slate-400 hover:text-primary"><FacebookIcon className="h-6 w-6" /></a>
                <a href="#" className="text-slate-400 hover:text-primary"><LinkedInIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/find-doctor" className="text-base text-slate-400 hover:text-white">Find a Doctor</Link></li>
              <li><Link to="/my-appointments" className="text-base text-slate-400 hover:text-white">Appointments</Link></li>
              <li><Link to="/success-rate" className="text-base text-slate-400 hover:text-white">Our Success</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-base text-slate-400 hover:text-white">Contact Us</Link></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
                <li>123 Health St, MedCity</li>
                <li>contact@mediconnect.com</li>
                <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MediConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
