import React from "react";
import serviceImg from "../assets/chill.png"; // <-- your uploaded image

export default function Services() {
  const services = [
    {
      title: "Data & Airtime Topup",
      text: "Buy internet subscription of all networks (MTN, Airtel, Glo, 9mobile) within seconds. You can recharge any network of your choice from EmmyPay Telecom.",
    },
    {
      title: "Convert Airtime To Cash",
      text: "Mistakenly over recharged? We've got you covered. Convert Airtime to cash and get paid directly to your bank account within few seconds.",
    },
    {
      title: "Bill Payment",
      text: "We cater for all forms of utility payments instantly. Electricity, DSTV, GOTV and Startimes can all be done from the comfort of your home with EmmyPay.",
    },
    {
      title: "Bulk SMS",
      text: "Don't overpay for Bulk SMS. EmmyPay's efficient Bulk SMS system has you covered. Send more, save more, and pay less.",
    },
    {
      title: "Exam Result Checker",
      text: "Generate your WAEC or NECO result checker token easily with EmmyPay Telecom.",
    },
    {
      title: "Cable Subscription",
      text: "You'll never be cut off from your favorite shows again. Get fast access to cable subscriptions (GOTV, DSTV, Startimes) on EmmyPay.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT SECTION - Text and Services */}
      <div>
        <h2 className="text-4xl font-bold text-center md:text-left font-serifhead">
          Our Services
        </h2>
        <p className="text-center md:text-left text-gray-600 mt-2 mb-8">
          All the services we offer our great customers.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION - Image */}
      <div className="flex justify-center">
        <img
          src={serviceImg}
          alt="Our Services"
          className="rounded-2xl w-full max-w-sm md:max-w-md object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
