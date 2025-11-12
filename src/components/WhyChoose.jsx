import React from 'react';
import whyImg from '../assets/why.png'; // Make sure your image is in src/assets/

const points = [
  "We're Fast",
  'Automated Services',
  '100% Secured',
  "We're Reliable",
  'Always Online',
  'Customer Support'
];

export default function WhyChoose() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="md:flex md:items-center md:gap-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serifhead">Why Choose Us?</h2>
          <p className="text-slate-600 mt-3">
            We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="p-3 bg-slate-50 rounded shadow-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={whyImg} alt="Why Choose Us" className="w-full rounded-card shadow" />
        </div>
      </div>
    </div>
  );
}
