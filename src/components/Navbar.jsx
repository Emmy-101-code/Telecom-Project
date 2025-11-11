import React from "react";
import logo from "../assets/logo.png"; // ✅ Correct import path

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo Section */}
          <img
            src={logo}
            alt="logo"
            className="w-[90px] h-[90px] object-contain rounded-full"
          />

          {/* Header Text Section */}
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-bold text-blue-600">EMMYPAY</span>
            <span className="text-lg text-black-600">Telecom</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-indigo-500">Home</a>
          <a href="#pricing" className="hover:text-indigo-500">Pricing</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
