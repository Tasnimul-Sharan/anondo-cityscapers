"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Can I buy land from abroad?",
    a: "Yes, the entire process can be done remotely.",
  },
  {
    q: "Is registration possible without visiting?",
    a: "Yes, via Power of Attorney.",
  },
  {
    q: "Is the land legally safe?",
    a: "Yes, fully verified and ready for registration.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b py-4 cursor-pointer"
            onClick={() => setActive(active === i ? null : i)}
          >
            <h3 className="font-semibold text-lg">{faq.q}</h3>
            {active === i && <p className="text-gray-500 mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
