"use client";

import LeadForm from "./LeadForm";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function LeadCaptureCard() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white flex justify-center">
      <div className="w-full max-w-xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl border p-8 md:p-10 relative overflow-hidden">
          {/* Top Badge */}
          <div className="absolute top-4 right-4 text-xs bg-primary text-white px-3 py-1 rounded-full">
            Limited Slots
          </div>
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-center leading-tight">
            Book Your Site Visit
          </h3>
          <p className="text-center text-gray-500 mt-3">
            Visit the project physically or connect via video call from abroad
          </p>
          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>Free Consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>No Hidden Charges</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>Full Legal Support</span>
            </div>
          </div>
          {/* Form */}
          <div className="mt-6">
            <LeadForm />
          </div>
          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/880XXXXXXXXX"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
          >
            <FaWhatsapp /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState } from "react";
// import { FaUser, FaPhoneAlt } from "react-icons/fa";

// export default function LeadCaptureCard() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-green-50 to-white flex justify-center">
//       <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
//         {/* Top Badge */}
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow">
//           Limited Offer
//         </div>

//         {/* Heading */}
//         <h3 className="text-2xl font-bold text-center text-gray-900 mt-2">
//           Book Your Site Visit
//         </h3>

//         <p className="text-center text-gray-500 mt-2 text-sm">
//           Visit the project physically before booking — 100% transparency
//         </p>

//         {/* Form */}
//         <div className="mt-6">
//           <LeadForm />
//         </div>

//         {/* Trust Line */}
//         <p className="text-xs text-center text-gray-400 mt-4">
//           🔒 Your information is safe & secure
//         </p>
//       </div>
//     </section>
//   );
// }

// function LeadForm() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = {
//       name: e.target.name.value,
//       phone: e.target.phone.value,
//     };

//     try {
//       await fetch("/api/lead", {
//         method: "POST",
//         body: JSON.stringify(formData),
//       });

//       alert("Submitted successfully!");
//       e.target.reset();
//     } catch (err) {
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Name */}
//       <div className="relative">
//         <FaUser className="absolute left-3 top-4 text-gray-400" />
//         <input
//           name="name"
//           placeholder="Your Name"
//           required
//           className="w-full border pl-10 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
//         />
//       </div>

//       {/* Phone */}
//       <div className="relative">
//         <FaPhoneAlt className="absolute left-3 top-4 text-gray-400" />
//         <input
//           name="phone"
//           placeholder="Phone Number"
//           required
//           className="w-full border pl-10 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
//         />
//       </div>

//       {/* CTA Button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
//       >
//         {loading ? "Submitting..." : "🚀 Book Now"}
//       </button>
//     </form>
//   );
// }
