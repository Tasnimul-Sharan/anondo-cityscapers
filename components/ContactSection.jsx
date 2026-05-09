// import { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaHome,
//   FaDollarSign,
// } from "react-icons/fa";

// export default function ContactSection() {
//   const [result, setResult] = useState("");
//   const [success, setSuccess] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("");
//     setSuccess(false);

//     const formData = new FormData(event.target);
//     formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const res = await response.json();

//     if (res.success) {
//       setSuccess(true);
//       setResult("Request submitted! Our agent will contact you shortly.");
//       event.target.reset();
//     } else {
//       setSuccess(false);
//       setResult("Failed to send. Please try again.");
//     }

//     setTimeout(() => setResult(""), 5000);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
//         {/* LEFT SIDE - CONTACT CARD */}
//         <div className="bg-primary/5 p-8 rounded-2xl shadow-sm border">
//           <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
//           <p className="text-gray-500 mt-2">
//             Contact us for buying, selling or renting properties.
//           </p>

//           <div className="mt-8 space-y-6">
//             {/* LOCATION */}
//             <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
//               <div className="bg-primary/10 p-3 rounded-full">
//                 <FaMapMarkerAlt className="text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Location</p>
//                 <p className="text-gray-700 font-medium">
//                   Printers Building, 12-13th Floor, 5 Rajuk Avenue, Motijheel,
//                   1000 Dhaka, Bangladesh
//                 </p>
//               </div>
//             </div>

//             {/* PHONE */}
//             <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
//               <div className="bg-primary/10  p-3 rounded-full">
//                 <FaPhoneAlt className="text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Phone</p>
//                 <p className="text-gray-700 font-medium">+880 1331-115500</p>
//               </div>
//             </div>
//             {/* EMAIL */}
//             <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
//               <div className="bg-primary/10 p-3 rounded-full">
//                 <FaEnvelope className="text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Email</p>
//                 <p className="text-gray-700 font-medium">
//                   info@anondocityscapers.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE - FORM */}
//         <form
//           onSubmit={onSubmit}
//           className="bg-white p-8 rounded-2xl shadow-sm border space-y-5"
//         >
//           <h3 className="text-2xl font-semibold text-gray-800">
//             Request a Property
//           </h3>

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name *"
//             className="w-full p-3 border rounded-lg outline-none"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number *"
//             className="w-full p-3 border rounded-lg outline-none"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             className="w-full p-3 border rounded-lg outline-none"
//           />

//           {/* PROPERTY TYPE */}
//           <div className="flex items-center border rounded-lg px-3">
//             <FaHome className="text-primary" />
//             <select
//               name="property_type"
//               className="w-full p-3 focus:outline-none"
//               required
//             >
//               <option value="">Property Type</option>
//               <option>Apartment</option>
//               <option>House</option>
//               <option>Commercial</option>
//               <option>Land</option>
//             </select>
//           </div>

//           {/* BUDGET */}
//           <div className="flex items-center border rounded-lg px-3">
//             <FaDollarSign className="text-primary" />
//             <select name="budget" className="w-full p-3 focus:outline-none">
//               <option value="">Budget Range</option>
//               <option>Below 50 Lakh</option>
//               <option>50 Lakh - 1 Crore</option>
//               <option>1 - 3 Crore</option>
//               <option>Above 3 Crore</option>
//             </select>
//           </div>

//           <textarea
//             name="message"
//             placeholder="Additional Details..."
//             className="w-full p-3 h-28 border rounded-lg outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Submit Request
//           </button>

//           {result && (
//             <div
//               className={`text-center p-3 rounded-lg ${
//                 success
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {result}
//             </div>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
  FaPaperPlane,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setSuccess(true);
        setResult("Request submitted! Our agent will contact you shortly.");
        event.target.reset();
      } else {
        setSuccess(false);
        setResult("Failed to send. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setResult("Failed to send. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="relative bg-primary/5 py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Request Property Information
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Contact us for buying, selling, renting, investment guidance, or
            project-related property information.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          {/* Left Contact Card */}
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-sm">
            <div className="bg-primary p-8 text-white sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur">
                <FaBuilding />
              </div>

              <h3 className="text-3xl font-bold tracking-[-0.03em]">
                Get in Touch
              </h3>

              <p className="mt-4 text-sm leading-8 text-white/75">
                Our team is ready to help you with property consultation,
                project information, booking, payment guidance, and registration
                support.
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-7">
              <ContactItem
                icon={<FaMapMarkerAlt />}
                label="Location"
                value="Printers Building, 12-13th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh"
              />

              <ContactItem
                icon={<FaPhoneAlt />}
                label="Phone"
                value="+880 1331-115500"
                href="tel:+8801331115500"
              />

              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value="info@anondocityscapers.com"
                href="mailto:info@anondocityscapers.com"
              />

              <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-gray-600">
                    Submit your request and our representative will contact you
                    shortly with the right project information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Property Request
              </p>

              <h3 className="text-3xl font-bold tracking-[-0.03em] text-gray-900">
                Tell Us What You Need
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Fill out the form below. Our agent will review your request and
                contact you soon.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                />

                <InputField
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                />
              </div>

              <InputField
                type="email"
                name="email"
                placeholder="Email Address"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <SelectField name="property_type" icon={<FaHome />} required>
                  <option value="">Property Type *</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </SelectField>

                <SelectField name="budget" icon={<FaDollarSign />}>
                  <option value="">Budget Range</option>
                  <option>Below 50 Lakh</option>
                  <option>50 Lakh - 1 Crore</option>
                  <option>1 - 3 Crore</option>
                  <option>Above 3 Crore</option>
                </SelectField>
              </div>

              <textarea
                name="message"
                placeholder="Additional Details..."
                className="h-32 w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Request"}
                <FaPaperPlane className="transition duration-300 group-hover:translate-x-1" />
              </button>

              {result && (
                <div
                  className={`rounded-2xl border px-5 py-4 text-center text-sm font-semibold ${
                    success
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {result}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-5 transition hover:border-primary/30 hover:bg-white">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          {label}
        </p>

        <p className="mt-2 text-sm font-medium leading-7 text-gray-700">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function InputField({ type, name, placeholder, required }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
    />
  );
}

function SelectField({ name, icon, required, children }) {
  return (
    <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10">
      <span className="text-primary">{icon}</span>

      <select
        name={name}
        required={required}
        onWheel={(e) => e.currentTarget.blur()}
        className="w-full bg-transparent px-3 py-4 text-sm text-gray-900 outline-none"
      >
        {children}
      </select>
    </div>
  );
}