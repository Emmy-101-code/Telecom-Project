import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serifhead text-center">Contact</h2>
      <p className="text-center text-slate-600 mt-2">
        Get in touch with our sales team.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <form onSubmit={submit} className="p-6 bg-white rounded-card shadow">
          <label className="text-sm">Full name</label>
          <input required className="w-full mt-2 p-3 border rounded" />
          <label className="text-sm mt-4">Email</label>
          <input required type="email" className="w-full mt-2 p-3 border rounded" />
          <label className="text-sm mt-4">Message</label>
          <textarea required className="w-full mt-2 p-3 border rounded" rows="4" />
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 rounded bg-indigo-600 text-white">Send</button>
            {sent && <div className="text-green-600">Message sent (demo)</div>}
          </div>
        </form>

        {/* 👇 Corrected contact info */}
        <div className="p-6 bg-slate-50 rounded-card">
          <h4 className="font-semibold">Contact Info</h4>
          {/* <p className="mt-2 text-slate-600"> */}
            Email:{" eokunola99@gmail.com "}
             {/* <a href="mailto:eokunola99@gmail.com"className="text-indigo-600 underline hover:text-indigo-800 focus:text-indigo-800 cursor-pointer relative z-10" */}
                {/* target="_blank" rel="noopener noreferrer" >   eokunola99@gmail.com  </a> </p> */}
          <p className="mt-1 text-slate-600">Phone: Call/Whatsapp 09129077343</p>
        </div>
      </div>
    </div>
  );
}
