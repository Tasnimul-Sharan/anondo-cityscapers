// // =========================
// // FULLY FIXED (BROWSER-SAFE VERSION)
// // =========================
// // Root cause fixed:
// // ❌ `module.exports` not supported in browser → removed
// // ❌ Mixed module systems → unified to ES Modules
// // ❌ Tailwind config cannot run in browser → converted to comment
// // =========================

// // Home.jsx
// import React from "react";

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="h-screen bg-gray-300 flex items-center justify-center">
//         <div className="bg-black/50 p-10 rounded-2xl text-center text-white max-w-2xl">
//           <h1 className="text-5xl font-bold mb-4 tracking-wide">
//             ANONDO ROSEMONT ESTATE
//           </h1>
//           <p className="text-xl mb-2">Where Elegance Becomes Heritage</p>
//           <p className="italic mb-6">Elegantia in Aeternum – Elegance Forever</p>
//           <div className="flex gap-4 justify-center">
//             <a href="#" className="px-6 py-3 bg-white text-black rounded-xl">Explore</a>
//             <a href="#" className="px-6 py-3 border border-white rounded-xl">Master Plan</a>
//             <a href="#" className="px-6 py-3 bg-amber-500 rounded-xl">Book</a>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-20 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-6">A Legacy Estate</h2>
//         <p className="text-lg leading-relaxed">
//           Anondo Rosemont Estate is a European-inspired duplex villa community located in Ulukhola near Purbachal New Town.
//         </p>
//       </section>

//       {/* Highlights */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
//           {[
//             "807 Bigha Estate",
//             "Duplex Villas",
//             "Central Park",
//             "Scenic Lake",
//             "Sports Complex",
//             "Farming Zone",
//           ].map((item, i) => (
//             <div key={i} className="p-6 bg-white rounded-2xl shadow">
//               <p className="font-semibold">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Villas */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-10">Featured Villas</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {["5 Katha Villas", "10 Katha Villas", "20 Katha Estates"].map((villa, i) => (
//             <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
//               <div className="h-48 bg-gray-300"></div>
//               <div className="p-6">
//                 <h3 className="font-bold text-xl">{villa}</h3>
//                 <button className="mt-4 text-amber-600">View Details →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Lifestyle */}
//       <section className="bg-black text-white py-20 text-center">
//         <h2 className="text-3xl mb-6">A Lifestyle Beyond Ordinary</h2>
//         <p className="max-w-2xl mx-auto mb-6">
//           Experience parks, lakes, sports, and community living designed for generations.
//         </p>
//         <a href="#" className="px-6 py-3 bg-white text-black rounded-xl">
//           Explore Lifestyle
//         </a>
//       </section>

//       {/* Investment */}
//       <section className="py-20 text-center">
//         <h2 className="text-3xl mb-6">Investment Opportunity</h2>
//         <p className="mb-6">Secure your future with a premium estate investment.</p>
//         <a href="#" className="px-6 py-3 bg-amber-500 rounded-xl text-white">
//           Why Invest
//         </a>
//       </section>
//     </main>
//   );
// }

// // Navbar.jsx
// export function Navbar() {
//   const links = [
//     "Home",
//     "The Estate",
//     "Master Plan",
//     "Villas",
//     "Amenities",
//     "Community",
//     "Location",
//     "Investment",
//     "Developer",
//     "Gallery",
//     "Contact",
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         <h1 className="font-bold">ROSEMONT</h1>
//         <div className="hidden md:flex gap-6">
//           {links.map((link) => (
//             <a key={link} href="#" className="hover:text-amber-600">
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// // =========================
// // TEST CASES
// // =========================

// // Test 1: Component renders without crashing
// // Expected: No runtime error

// // Test 2: Hero section text visible
// // Expected: "ANONDO ROSEMONT ESTATE" appears

// // Test 3: Navigation links render
// // Expected: 11 menu items shown

// // Test 4: Buttons clickable (anchor works)
// // Expected: No JS error on click

// // Test 5: No module-related errors
// // Expected: "module is not defined" should NOT appear

// // Test 6: React import works
// // Expected: No import/export errors

"use client";

import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

export default function AnondoBhubonPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Anondo Bhubon
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            A New Horizon in Eco-Friendly Urban Living
          </p>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <Section title="1. Executive Summary">
        <p>
          Anondo Bhubon is an ambitious residential development located east of
          the Sitalakhya River, near Purbachal New Town. It redefines urban
          lifestyle by blending sustainability, smart infrastructure, and
          community well-being.
        </p>
        <p>
          The project includes luxury villas, mid-rise apartments, and
          condominiums organized into 100-bigha blocks within 400-bigha
          sectors—each with unique architectural identity.
        </p>
        <List
          items={[
            "Wide arterial roads & future-ready mobility",
            "Artificial river & canal system connected to Sitalakhya",
            "Large lake & green corridor network",
            "3 km forest walkway",
            "Parks, meditation zones, sports & community farming",
            "IT parks, commercial hubs, schools & institutions",
            "30 minutes from Airport",
            "10 minutes from MRT-1",
          ]}
        />
      </Section>

      {/* VISION */}
      <section className="bg-gray-50">
        <Section title="2. Project Vision & Philosophy">
          <p className="italic text-xl text-gray-800">
            “We are not just offering homes — we are offering a lifestyle rooted
            in health, harmony, and sustainability.”
          </p>
          <List
            items={[
              "Nature is preserved, not replaced",
              "Community harmony & integration",
              "Green sustainability & walkable design",
              "Wellness: yoga, meditation, open-air gyms",
              "24/7 security & gated living",
            ]}
          />
        </Section>
      </section>

      {/* LOCATION */}
      <Section title="3. Location Advantage">
        <List
          items={[
            "30 minutes from Hazrat Shahjalal International Airport",
            "10 minutes from MRT-1 Depot Station",
            "Connected via Dhaka Bypass & Purbachal Expressway",
            "Near Hi-Tech Park, CBD & Bashundhara",
            "Natural riverbanks & green surroundings",
          ]}
        />
      </Section>

      {/* MASTER PLAN */}
      <section className="bg-gray-50">
        <Section title="4. Master Plan & Sector Design">
          <p>
            Each sector consists of 4 blocks (100 bigha each) with unique
            lifestyle zoning.
          </p>
          <List
            items={[
              "Luxury Villas Block",
              "Mid-Rise Residential Block",
              "Condominium Block",
              "Artificial river & canal network",
              "Forest walkway & central lake",
              "Community parks, mosques, markets",
              "Schools, clinics, IT parks & commercial zones",
            ]}
          />
        </Section>
      </section>

      {/* RESIDENTIAL */}
      <Section title="Residential Components">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Villas",
              points: [
                "Private gardens & pools",
                "4–6 bedrooms & smart home tech",
                "Solar-ready & energy efficient",
                "Lakeside views & clubhouse",
              ],
            },
            {
              title: "Mid-Rise Apartments",
              points: [
                "2–4 bedroom units",
                "Elevator & parking",
                "Rooftop gardens",
                "Family-friendly community",
              ],
            },
            {
              title: "Condominiums",
              points: [
                "1–3 bedroom suites",
                "Rooftop lounges & co-working",
                "Mixed-use retail podium",
                "Transit connectivity",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <List items={item.points} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INFRA */}
      <section className="bg-gray-50">
        <Section title="Green & Blue Infrastructure">
          <List
            items={[
              "Artificial river & central lake",
              "Canal network for drainage & irrigation",
              "3 km forest walkway",
              "Biodiversity zones & green buffers",
            ]}
          />
        </Section>
      </section>

      {/* AMENITIES */}
      <Section title="Urban Amenities & Facilities">
        <List
          items={[
            "Parks, playgrounds & amphitheaters",
            "Schools, clinics & hospital",
            "Religious & cultural centers",
            "Police, fire & smart utilities",
          ]}
        />
      </Section>

      {/* COMMERCIAL */}
      <section className="bg-gray-50">
        <Section title="Commercial & Economic Zones">
          <List
            items={[
              "IT & Cyber Business Park",
              "Shopping malls & markets",
              "Transit hubs & logistics",
            ]}
          />
        </Section>
      </section>

      {/* SECURITY */}
      <Section title="Security, Sustainability & Lifestyle">
        <List
          items={[
            "24/7 CCTV & AI monitoring",
            "Solar energy & green infrastructure",
            "Waste recycling & rain harvesting",
            "Yoga, sports & wellness facilities",
          ]}
        />
      </Section>

      {/* INVESTMENT */}
      <section className="bg-gray-50">
        <Section title="Investment Opportunities">
          <p>
            Ideal for investors, NRBs, institutions, and corporate partners with
            strong appreciation potential.
          </p>
        </Section>
      </section>

      {/* TIMELINE */}
      <Section title="Project Timeline">
        <List
          items={[
            "2026: Infrastructure",
            "2027: Villas & Lake",
            "2028-29: Condos & IT Park",
            "2030+: Full smart city",
          ]}
        />
      </Section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Anondo Bhubon</h2>
        <p className="mb-6 text-gray-300">
          Your future eco-friendly lifestyle begins here.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200">
          Contact Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Anondo Bhubon | info@anondobhubon.com
      </footer>
    </div>
  );
}
