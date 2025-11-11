import React from "react";
import mtn from "../assets/mtn.png";
import airtel from "../assets/airtel.png";
import glo from "../assets/glo.png";
import nineMobile from "../assets/9mobile.png";

const logos = [
  { name: "MTN", img: mtn },
  { name: "AIRTEL", img: airtel },
  { name: "GLO", img: glo },
  { name: "9MOBILE", img: nineMobile },
];

export default function Logos() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map((l) => (
          <div
            key={l.name}
            className="p-8 bg-slate-50 rounded-card flex flex-col items-center"
          >
            <img
              src={l.img}
              alt={l.name}
              className="w-20 h-20 rounded-full object-contain"
            />
            <div className="mt-4 font-semibold">{l.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
