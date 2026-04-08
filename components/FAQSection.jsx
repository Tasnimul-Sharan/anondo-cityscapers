"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Where is Anondo Rosemont Estate located?",
      a: "Anondo Rosemont Estate is located in Ulukhola, near Purbachal New Town, along the scenic southern banks of the Turag River.",
    },
    {
      q: "What makes Rosemont Estate unique?",
      a: "Rosemont Estate is inspired by European countryside living, featuring open landscapes, villa-based planning, wide roads, and a harmonious blend of nature and architecture.",
    },
    {
      q: "What is the total land area of the project?",
      a: "The estate spans across approximately 807 bigha of master-planned residential land.",
    },
    {
      q: "What types of villas are available?",
      a: "The project offers 5 Katha, 10 Katha, and 20 Katha duplex villas, designed with modern architecture, spacious layouts, and optional luxury features like private pools.",
    },
    {
      q: "Are the villas developer-built?",
      a: "Yes, all villas are developed by the project authority to ensure architectural consistency, quality, and a premium community environment.",
    },
    {
      q: "What facilities are included in the estate?",
      a: "The estate includes a central park, scenic lake, sports complex, playgrounds, community farming area, and essential facilities like school, hospital, mosque, mandir, and church.",
    },
    {
      q: "Is the project suitable for NRB (Non-Resident Bangladeshis)?",
      a: "Absolutely. With developer-built villas and secure infrastructure, it is an ideal investment and lifestyle option for NRBs.",
    },
    {
      q: "What kind of road infrastructure is available?",
      a: "The project features 60 ft and 40 ft wide grand avenues, along with 25 ft residential roads, ensuring spacious and organized connectivity.",
    },
    {
      q: "How is security maintained in the estate?",
      a: "The estate includes 24/7 CCTV surveillance, controlled entry points, and professional security personnel to ensure safety and peace of mind.",
    },
    {
      q: "When will possession be handed over?",
      a: "Possession will be handed over upon completion of payments, expected between 2027 and 2028.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-3">
          Everything you need to know about Rosemont Estate
        </p>
        <div className="w-24 h-[3px] bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto px-4 space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 border border-dashed
              ${
                isOpen
                  ? "bg-white border-primary/30"
                  : "bg-white/70 backdrop-blur border-gray-200 hover:border-primary/30"
              }`}
            >
              {/* Question */}
              <div
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex justify-between items-center px-6 py-5 cursor-pointer transition-all
                ${isOpen ? "bg-secondary text-white" : "text-gray-900"}`}
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>

                {/* Icon */}
                <div
                  className={`text-xl transition-all duration-500 ${
                    isOpen ? "rotate-180 text-white" : "text-gray-500"
                  }`}
                >
                  {isOpen ? <IoRemove /> : <IoAdd />}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out
                ${
                  isOpen
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// "use client";
// import { useState } from "react";
// import { IoAdd, IoRemove } from "react-icons/io5";

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       q: "Where is Anondo Rosemont Estate located?",
//       a: "Anondo Rosemont Estate is located in Ulukhola, near Purbachal New Town, along the scenic southern banks of the Turag River.",
//     },
//     {
//       q: "What makes Rosemont Estate unique?",
//       a: "Inspired by European countryside living, it blends nature, open space, and elegant villa planning.",
//     },
//     {
//       q: "What is the total land area?",
//       a: "Approximately 807 bigha of master-planned residential land.",
//     },
//     {
//       q: "What types of villas are available?",
//       a: "5, 10, and 20 Katha luxury duplex villas with optional premium features.",
//     },
//     {
//       q: "Are the villas developer-built?",
//       a: "Yes, ensuring consistency, quality, and premium lifestyle standards.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//       {/* Heading */}
//       <div className="text-center mb-16 px-4">
//         <h2 className="text-4xl font-bold text-gray-900">
//           Frequently Asked Questions
//         </h2>
//         <p className="text-gray-500 mt-3">
//           Everything you need to know about Rosemont Estate
//         </p>
//         <div className="w-24 h-[3px] bg-primary mx-auto mt-4 rounded-full" />
//       </div>

//       {/* FAQ */}
//       <div className="max-w-4xl mx-auto px-4 space-y-5">
//         {faqs.map((faq, index) => {
//           const isOpen = openIndex === index;

//           return (
//             <div
//               key={index}
//               className={`group rounded-xl border backdrop-blur-md bg-white/70 shadow-md transition-all duration-500 overflow-hidden
//               ${
//                 isOpen
//                   ? "border-primary shadow-lg"
//                   : "border-gray-200 hover:border-primary/40"
//               }`}
//             >
//               {/* Question */}
//               <div
//                 className="flex justify-between items-center px-6 py-5 cursor-pointer"
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">
//                   {faq.q}
//                 </h3>

//                 <div
//                   className={`text-xl transition-transform duration-500 ${
//                     isOpen ? "rotate-180 text-primary" : "text-gray-500"
//                   }`}
//                 >
//                   {isOpen ? <IoRemove /> : <IoAdd />}
//                 </div>
//               </div>

//               {/* Answer */}
//               <div
//                 className={`px-6 transition-all duration-500 ease-in-out ${
//                   isOpen ? "max-h-40 py-4 opacity-100" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
//               </div>

//               {/* Bottom glow line */}
//               <div
//                 className={`h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
//                   isOpen ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-16">
//         <p className="text-gray-600 mb-4">
//           Still have questions? We’re here to help you.
//         </p>
//         <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//           Contact Our Consultant
//         </button>
//       </div>
//     </section>
//   );
// }
