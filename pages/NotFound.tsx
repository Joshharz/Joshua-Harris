
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-slate-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Page Not Found</h2>
        <p className="mt-6 text-base leading-7 text-slate-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10">
          <Link 
            to="/" 
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
