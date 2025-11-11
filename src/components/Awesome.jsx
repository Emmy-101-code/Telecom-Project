import React from 'react';
import awesomeImg from '../assets/awesome.png'; // adjust path if needed

export default function Awesome() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="md:flex md:items-center md:gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serifhead text-blue-700 font-bold">
            We Provide Awesome Services
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Although some things are difficult, paying your bills shouldn't be one of them.
            From the convenience of your home or workplace, <span className="font-semibold text-indigo-600">EmmyPay</span> 
            enables you to pay for the services you use. You can experience complete convenience, 
            quick service, and simple payment right now.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={awesomeImg}
            alt="awesome"
            className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>
    </div>
  );
}
