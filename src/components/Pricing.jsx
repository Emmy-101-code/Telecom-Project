import React from "react";
import mtn from "../assets/mtn.png";
import airtel from "../assets/airtel.png";
import glo from "../assets/glo.png";
import nineMobile from "../assets/9mobile.png";

export default function Pricing() {
  const whatsappNumber = "2349129077343"; // Your WhatsApp number (with country code, no + sign)

  const plans = [
    {
      network: "MTN",
      logo: mtn,
      data: [
        { size: "750MB", price: "₦500", validity: "3days" },
        { size: "1.2GB", price: "₦750", validity: "7days" },
        { size: "2GB", price: "₦800", validity: "2days" },
        { size: "5GB", price: "₦1550", validity: "7days" },
      ],
    },
    {
      network: "AIRTEL",
      logo: airtel,
      data: [
        { size: "300MB", price: "₦150", validity: "2days" },
        { size: "750MB", price: "₦470", validity: "14days" },
        { size: "3GB", price: "₦1200", validity: "7days" },
        { size: "10GB", price: "₦3200", validity: "30days" },
      ],
    },
    {
      network: "GLO",
      logo: glo,
      data: [
        { size: "150MB", price: "₦100", validity: "2days" },
        { size: "750MB", price: "₦800", validity: "7days" },
        { size: "2GB", price: "₦900", validity: "30days" },
        { size: "10GB", price: "₦2000", validity: "30days" },
      ],
    },
    {
      network: "9MOBILE",
      logo: nineMobile,
      data: [
        { size: "500MB", price: "₦130", validity: "30days" },
        { size: "2GB", price: "₦360", validity: "30days" },
        { size: "5GB", price: "₦1000", validity: "30days" },
        { size: "10GB", price: "₦2000", validity: "30days" },
      ],
    },
  ];

  // Function to handle order
  const handleOrder = (network) => {
    const message = `Hello 👋🏽 EMMYPAY Telecom, I’m interested in ordering a ${network} data plan. Please share the available prices and setup details.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Affordable Data Plans And Prices
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={plan.logo}
              alt={plan.network}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{plan.network}</h3>
            {plan.data.map((item, i) => (
              <p key={i} className="text-sm">
                {item.size} &nbsp; {item.price} &nbsp; {item.validity}
              </p>
            ))}
            <button
              onClick={() => handleOrder(plan.network)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
