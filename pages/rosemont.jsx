// "use client";

import MasterplanHighlight from "@/components/AnondoRosemont/MasterplanHighlight";

// import { motion } from "framer-motion";

// const Section = ({ title, subtitle, children }) => (
//   <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
//     <div className="mb-10">
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
//       {subtitle && <p className="text-gray-500 mt-3 text-lg">{subtitle}</p>}
//     </div>
//     <div className="text-gray-600 text-lg leading-relaxed space-y-4">
//       {children}
//     </div>
//   </section>
// );

// export default function RosemontEstate() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* HERO */}
//       <section className="h-screen bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')] bg-cover bg-center relative">
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide">
//             ANONDO ROSEMONT ESTATE
//           </h1>
//           <p className="text-2xl text-gray-200 mb-2">
//             Where Elegance Becomes Heritage
//           </p>
//           <p className="italic text-gray-300 mb-8">
//             Elegantia in Aeternum – Elegance Forever
//           </p>
//           <div className="flex gap-4 flex-wrap justify-center">
//             <button className="px-8 py-3 bg-white text-black rounded-full font-semibold">
//               Explore Estate
//             </button>
//             <button className="px-8 py-3 border border-white text-white rounded-full">
//               Master Plan
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <Section title="A Timeless Estate" subtitle="European Inspired Living">
//         <p>
//           Anondo Rosemont Estate is a premium European-inspired duplex villa
//           community located in Ulukhola near Purbachal New Town. Spread across
//           807 bigha, it blends architecture, landscape, and lifestyle into a
//           legacy-driven residential environment.
//         </p>
//       </Section>

//       {/* HIGHLIGHTS */}
//       <section className="bg-gray-50">
//         <Section title="Key Highlights">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "807 Bigha Estate",
//               "Duplex Villas",
//               "12 Bigha Park",
//               "12 Bigha Lake",
//               "Sports Complex",
//               "Community Farming",
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -8 }}
//                 className="p-6 bg-white rounded-2xl shadow"
//               >
//                 <h3 className="text-xl font-semibold">{item}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </Section>
//       </section>

//       {/* VILLAS */}
//       <Section title="Elegant Duplex Villas">
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { name: "5 Katha Villas", size: "2750 sq ft" },
//             { name: "10 Katha Villas", size: "4500 sq ft" },
//             { name: "20 Katha Estates", size: "7200 sq ft" },
//           ].map((villa, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className="p-6 bg-gray-50 rounded-2xl shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold mb-2">{villa.name}</h3>
//               <p>{villa.size}</p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* MASTER PLAN */}
//       <section className="bg-gray-50">
//         <Section title="Master Plan">
//           <ul className="list-disc pl-6 space-y-2">
//             <li>807 Bigha Development</li>
//             <li>60 ft Grand Avenue</li>
//             <li>900+ Residential Plots</li>
//             <li>Elevated Land Design</li>
//           </ul>
//         </Section>
//       </section>

//       {/* LIFESTYLE */}
//       <Section title="Lifestyle & Amenities">
//         <ul className="list-disc pl-6 space-y-2">
//           <li>Grand Sports Complex</li>
//           <li>12 Bigha Central Park</li>
//           <li>Scenic Estate Lake</li>
//           <li>Luxury Clubhouse</li>
//         </ul>
//       </Section>

//       {/* COMMUNITY */}
//       <section className="bg-gray-50">
//         <Section title="Community Living">
//           <ul className="list-disc pl-6 space-y-2">
//             <li>School & College</li>
//             <li>Healthcare Facilities</li>
//             <li>Retail & Commercial Zones</li>
//             <li>Religious Centers</li>
//           </ul>
//         </Section>
//       </section>

//       {/* LOCATION */}
//       <Section title="Strategic Location">
//         <p>
//           Located in Ulukhola near Purbachal New Town, offering connectivity,
//           serenity, and long-term value.
//         </p>
//       </Section>

//       {/* INVESTMENT */}
//       <section className="bg-gray-50">
//         <Section title="Investment Opportunity">
//           <p>
//             A secure and future-ready investment with high appreciation
//             potential, ideal for NRBs and long-term investors.
//           </p>
//         </Section>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-black text-white text-center">
//         <h2 className="text-4xl font-bold mb-4">Begin Your Legacy Today</h2>
//         <button className="bg-white text-black px-8 py-3 rounded-full font-semibold">
//           Book a Visit
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-gray-500">
//         Anondo Rosemont Estate — Where Elegance Becomes Heritage
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// const Section = ({ title, children }) => (
//   <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
//     <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
//       {title}
//     </h2>
//     <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
//       {children}
//     </div>
//   </section>
// );

// export default function RosemontFullWebsite() {
//   return (
//     <div className="bg-white text-black">
//       {/* HERO */}
//       <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//           ANONDO ROSEMONT ESTATE
//         </h1>
//         <p className="text-xl md:text-2xl mb-2">
//           Where Elegance Becomes Heritage
//         </p>
//         <p className="italic text-lg mb-6">
//           Elegantia in Aeternum — Elegance Forever
//         </p>
//         <div className="flex gap-4">
//           <button className="bg-white text-black px-6 py-3 rounded">
//             Explore Estate
//           </button>
//           <button className="border px-6 py-3 rounded">Master Plan</button>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <Section title="Introduction to Rosemont">
//         <p>
//           Anondo Rosemont Estate is a European-inspired duplex villa community
//           located in Ulukhola near Purbachal New Town. Spread across 807 bigha
//           of land, it offers elegant homes, natural landscapes, and a carefully
//           planned lifestyle environment designed for generations.
//         </p>
//         <p>
//           This estate represents more than a housing project—it is a complete
//           ecosystem of land ownership, luxury villas, security, nature, and
//           investment opportunity.
//         </p>
//       </Section>

//       {/* IDENTITY */}
//       <Section title="The Identity of Rosemont">
//         <p>
//           The name Rosemont symbolizes beauty, elegance, and elevated living.
//           Built on pillars of Elegance, Legacy, Community, and Security, the
//           estate reflects timeless European inspiration blended with Bangladeshi
//           heritage.
//         </p>
//       </Section>

//       {/* MASTER PLAN */}
//       <Section title="Master Plan Overview">
//         <ul className="list-disc pl-6">
//           <li>807 Bigha Estate Development</li>
//           <li>900 plots – 5 Katha</li>
//           <li>450 plots – 10 Katha</li>
//           <li>90 plots – 20 Katha</li>
//           <li>60 ft Grand Avenue</li>
//           <li>40 ft Avenue</li>
//           <li>25 ft Residential Roads</li>
//         </ul>
//       </Section>

//       {/* VILLAS */}
//       <Section title="Villas & Residences">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-6 border rounded">
//             <h3 className="text-xl font-bold mb-2">5 Katha Villa</h3>
//             <p>2750 sq ft duplex house</p>
//             <p>Ground: 1350 sq ft</p>
//             <p>First: 1400 sq ft</p>
//           </div>
//           <div className="p-6 border rounded">
//             <h3 className="text-xl font-bold mb-2">10 Katha Villa</h3>
//             <p>4500 sq ft duplex</p>
//             <p>Optional pool available</p>
//           </div>
//           <div className="p-6 border rounded">
//             <h3 className="text-xl font-bold mb-2">20 Katha Estate</h3>
//             <p>7200 sq ft luxury villa</p>
//             <p>Triplex option available</p>
//           </div>
//         </div>
//       </Section>

//       {/* DESIGN FEATURES */}
//       <Section title="Estate Design Features">
//         <ul className="list-disc pl-6">
//           <li>Open front lawn concept</li>
//           <li>Pillar-based plot demarcation</li>
//           <li>Privacy boundary design</li>
//           <li>Elevated plots (18–24 inches)</li>
//         </ul>
//       </Section>

//       {/* NATURE */}
//       <Section title="Nature & Open Spaces">
//         <ul className="list-disc pl-6">
//           <li>12 Bigha Central Park</li>
//           <li>12 Bigha Scenic Lake</li>
//           <li>Landscaped boulevards</li>
//           <li>Green walkways</li>
//         </ul>
//       </Section>

//       {/* AMENITIES */}
//       <Section title="Lifestyle & Amenities">
//         <ul className="list-disc pl-6">
//           <li>Grand Sports Complex</li>
//           <li>Clubhouse & Social Center</li>
//           <li>Three Playgrounds</li>
//           <li>Swimming Facilities</li>
//         </ul>
//       </Section>

//       {/* COMMUNITY */}
//       <Section title="Community Facilities">
//         <ul className="list-disc pl-6">
//           <li>School & College</li>
//           <li>Healthcare Facilities</li>
//           <li>Commercial Center</li>
//           <li>Mosque, Mandir, Church</li>
//           <li>Community Farming Zone</li>
//         </ul>
//       </Section>

//       {/* LOCATION */}
//       <Section title="Location Advantage">
//         <p>
//           Located in Ulukhola near Purbachal New Town with strong connectivity,
//           peaceful surroundings, and natural river landscape.
//         </p>
//       </Section>

//       {/* INVESTMENT */}
//       <Section title="Investment & NRB Opportunity">
//         <ul className="list-disc pl-6">
//           <li>Land ownership with villa</li>
//           <li>High appreciation potential</li>
//           <li>Secure gated community</li>
//         </ul>
//       </Section>

//       {/* DEVELOPER */}
//       <Section title="Developer">
//         <p>
//           Anondo Real Estate Group is focused on sustainable, community-centered
//           development with long-term vision.
//         </p>
//       </Section>

//       {/* CONTACT */}
//       <Section title="Contact & Enquiry">
//         <p>Anondo Real Estate Group</p>
//         <p>Email: info@anondobhubon.com</p>
//         <p>Phone: +880XXXXXXXXX</p>
//       </Section>

//       {/* FOOTER */}
//       <footer className="bg-black text-white text-center py-10">
//         <h3 className="text-xl font-semibold">Anondo Rosemont Estate</h3>
//         <p>Where Elegance Becomes Heritage</p>
//       </footer>
//     </div>
//   );
// }

// import Hero from "@/components/rosemont/Hero";
// import Intro from "@/components/rosemont/Intro";
// import Highlights from "@/components/rosemont/Highlights";
// import Villas from "@/components/rosemont/Villas";
// import Sustainability from "@/components/rosemont/Sustainability";
// import CTA from "@/components/rosemont/CTA";

export default function RosemontEstate() {
  return (
    <div className="bg-white text-gray-900">
      <MasterplanHighlight />
      {/* <Hero />
      <Intro />
      <Highlights />
      <Villas />
      <Sustainability />
      <CTA /> */}
    </div>
  );
}