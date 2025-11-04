import React from 'react'

export default function Awesome(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="md:flex md:items-center md:gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serifhead">We Provide Awesome Services</h2>
          <p className="text-slate-600 mt-4">Although some things are difficult, paying your bills shouldn't be one of them. From the convenience of your home or workplace, EmmyPay enables you to pay for the services you use. You can experience complete convenience, quick service, and simple payment right now.</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="/src/assets/awesome.png" alt="awesome" className="w-full rounded-card shadow"/>
        </div>
      </div>
    </div>
  )
}
