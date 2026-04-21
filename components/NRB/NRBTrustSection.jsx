// export default function NRBTrustSection() {
//   return (
//     <section className="py-16 bg-white text-center">
//       <div className="max-w-4xl mx-auto">
        // <h2 className="text-2xl font-semibold mb-8">
        //   Why Investors Trust Anondo Bhubon
        // </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="p-6 border rounded-xl shadow-sm">
//             <h3 className="font-bold text-lg">Ready Land</h3>
//             <p className="text-gray-500 mt-2">
//               No future promises — physically available plots
//             </p>
//           </div>

//           <div className="p-6 border rounded-xl shadow-sm">
//             <h3 className="font-bold text-lg">Instant Registration</h3>
//             <p className="text-gray-500 mt-2">Buy today, legally own today</p>
//           </div>

//           <div className="p-6 border rounded-xl shadow-sm">
//             <h3 className="font-bold text-lg">Zero Risk</h3>
//             <p className="text-gray-500 mt-2">
//               Verified land with full documentation support
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// export default function NRBTrustSection() {
//   return (
//     <section className="py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
//       {/* Glow Effect */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

//       <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
//         {/* MASTER HOOK */}
//         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//           Own Land in Bangladesh —{" "}
//           <span className="text-primary">With Instant Legal Registration</span>
//         </h2>

//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           Buy from anywhere in the world with complete legal assurance and zero
//           hassle.
//         </p>

//         {/* SUPPORTING MESSAGES */}
//         <div className="flex flex-wrap justify-center gap-4 mt-8">
//           {[
//             "No development risk",
//             "Ready land, not future promise",
//             "Complete documentation support",
//             "Buy from abroad, own legally",
//           ].map((item, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 bg-white border rounded-full shadow-sm text-sm font-medium"
//             >
//               ✓ {item}
//             </span>
//           ))}
//         </div>

//         {/* TRUST CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 mt-14">
//           {/* Card 1 */}
//           <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-lg border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <div className="text-4xl mb-4">🏡</div>
//             <h3 className="font-bold text-xl mb-2">Ready Land</h3>
//             <p className="text-gray-500">
//               No future promises — physically available plots ready for
//               ownership.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-lg border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <div className="text-4xl mb-4">📜</div>
//             <h3 className="font-bold text-xl mb-2">Instant Registration</h3>
//             <p className="text-gray-500">
//               Complete legal registration quickly with full documentation
//               support.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-lg border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <div className="text-4xl mb-4">🛡️</div>
//             <h3 className="font-bold text-xl mb-2">Zero Risk</h3>
//             <p className="text-gray-500">
//               Verified land with transparent process — no fraud, no hidden
//               issues.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { FaShieldAlt, FaFileSignature, FaMapMarkedAlt } from "react-icons/fa";

export default function NRBTrustSection() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Ready Land",
      desc: "Physically available plots — no future promises or uncertainty.",
    },
    {
      icon: <FaFileSignature />,
      title: "Instant Registration",
      desc: "Buy today and complete legal registration without delays.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero Risk Investment",
      desc: "Verified land with full documentation and transparency.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Why Investors Trust Anondo Bhubon
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Buy from anywhere in the world with complete legal assurance and zero
          hassle.
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "No development risk",
            "Ready land",
            "Full documentation support",
            "Buy from abroad",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm font-medium bg-white border rounded-full shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-7 bg-white rounded-2xl border hover:border-primary/40 hover:shadow-xl transition duration-300"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4 mx-auto">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
