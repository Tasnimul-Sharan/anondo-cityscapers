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

// "use client";

// import { motion } from "framer-motion";

// const Section = ({ title, children }) => (
//   <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900">
//       {title}
//     </h2>
//     <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
//       {children}
//     </div>
//   </section>
// );

// const List = ({ items }) => (
//   <ul className="list-disc pl-6 space-y-2">
//     {items.map((it, i) => (
//       <li key={i}>{it}</li>
//     ))}
//   </ul>
// );

// export default function AnondoBhubonPage() {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* HERO */}
//       <section className="h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center relative">
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Anondo Bhubon
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
//             A New Horizon in Eco-Friendly Urban Living
//           </p>
//         </div>
//       </section>

//       {/* EXECUTIVE SUMMARY */}
//       <Section title="1. Executive Summary">
//         <p>
//           Anondo Bhubon is an ambitious residential development located east of
//           the Sitalakhya River, near Purbachal New Town. It redefines urban
//           lifestyle by blending sustainability, smart infrastructure, and
//           community well-being.
//         </p>
//         <p>
//           The project includes luxury villas, mid-rise apartments, and
//           condominiums organized into 100-bigha blocks within 400-bigha
//           sectors—each with unique architectural identity.
//         </p>
//         <List
//           items={[
//             "Wide arterial roads & future-ready mobility",
//             "Artificial river & canal system connected to Sitalakhya",
//             "Large lake & green corridor network",
//             "3 km forest walkway",
//             "Parks, meditation zones, sports & community farming",
//             "IT parks, commercial hubs, schools & institutions",
//             "30 minutes from Airport",
//             "10 minutes from MRT-1",
//           ]}
//         />
//       </Section>

//       {/* VISION */}
//       <section className="bg-gray-50">
//         <Section title="2. Project Vision & Philosophy">
//           <p className="italic text-xl text-gray-800">
//             “We are not just offering homes — we are offering a lifestyle rooted
//             in health, harmony, and sustainability.”
//           </p>
//           <List
//             items={[
//               "Nature is preserved, not replaced",
//               "Community harmony & integration",
//               "Green sustainability & walkable design",
//               "Wellness: yoga, meditation, open-air gyms",
//               "24/7 security & gated living",
//             ]}
//           />
//         </Section>
//       </section>

//       {/* LOCATION */}
//       <Section title="3. Location Advantage">
//         <List
//           items={[
//             "30 minutes from Hazrat Shahjalal International Airport",
//             "10 minutes from MRT-1 Depot Station",
//             "Connected via Dhaka Bypass & Purbachal Expressway",
//             "Near Hi-Tech Park, CBD & Bashundhara",
//             "Natural riverbanks & green surroundings",
//           ]}
//         />
//       </Section>

//       {/* MASTER PLAN */}
//       <section className="bg-gray-50">
//         <Section title="4. Master Plan & Sector Design">
//           <p>
//             Each sector consists of 4 blocks (100 bigha each) with unique
//             lifestyle zoning.
//           </p>
//           <List
//             items={[
//               "Luxury Villas Block",
//               "Mid-Rise Residential Block",
//               "Condominium Block",
//               "Artificial river & canal network",
//               "Forest walkway & central lake",
//               "Community parks, mosques, markets",
//               "Schools, clinics, IT parks & commercial zones",
//             ]}
//           />
//         </Section>
//       </section>

//       {/* RESIDENTIAL */}
//       <Section title="Residential Components">
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Luxury Villas",
//               points: [
//                 "Private gardens & pools",
//                 "4–6 bedrooms & smart home tech",
//                 "Solar-ready & energy efficient",
//                 "Lakeside views & clubhouse",
//               ],
//             },
//             {
//               title: "Mid-Rise Apartments",
//               points: [
//                 "2–4 bedroom units",
//                 "Elevator & parking",
//                 "Rooftop gardens",
//                 "Family-friendly community",
//               ],
//             },
//             {
//               title: "Condominiums",
//               points: [
//                 "1–3 bedroom suites",
//                 "Rooftop lounges & co-working",
//                 "Mixed-use retail podium",
//                 "Transit connectivity",
//               ],
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="p-6 bg-white rounded-2xl shadow-lg"
//             >
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <List items={item.points} />
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* INFRA */}
//       <section className="bg-gray-50">
//         <Section title="Green & Blue Infrastructure">
//           <List
//             items={[
//               "Artificial river & central lake",
//               "Canal network for drainage & irrigation",
//               "3 km forest walkway",
//               "Biodiversity zones & green buffers",
//             ]}
//           />
//         </Section>
//       </section>

//       {/* AMENITIES */}
//       <Section title="Urban Amenities & Facilities">
//         <List
//           items={[
//             "Parks, playgrounds & amphitheaters",
//             "Schools, clinics & hospital",
//             "Religious & cultural centers",
//             "Police, fire & smart utilities",
//           ]}
//         />
//       </Section>

//       {/* COMMERCIAL */}
//       <section className="bg-gray-50">
//         <Section title="Commercial & Economic Zones">
//           <List
//             items={[
//               "IT & Cyber Business Park",
//               "Shopping malls & markets",
//               "Transit hubs & logistics",
//             ]}
//           />
//         </Section>
//       </section>

//       {/* SECURITY */}
//       <Section title="Security, Sustainability & Lifestyle">
//         <List
//           items={[
//             "24/7 CCTV & AI monitoring",
//             "Solar energy & green infrastructure",
//             "Waste recycling & rain harvesting",
//             "Yoga, sports & wellness facilities",
//           ]}
//         />
//       </Section>

//       {/* INVESTMENT */}
//       <section className="bg-gray-50">
//         <Section title="Investment Opportunities">
//           <p>
//             Ideal for investors, NRBs, institutions, and corporate partners with
//             strong appreciation potential.
//           </p>
//         </Section>
//       </section>

//       {/* TIMELINE */}
//       <Section title="Project Timeline">
//         <List
//           items={[
//             "2026: Infrastructure",
//             "2027: Villas & Lake",
//             "2028-29: Condos & IT Park",
//             "2030+: Full smart city",
//           ]}
//         />
//       </Section>

//       {/* CTA */}
//       <section className="py-20 bg-black text-white text-center">
//         <h2 className="text-4xl font-bold mb-4">Welcome to Anondo Bhubon</h2>
//         <p className="mb-6 text-gray-300">
//           Your future eco-friendly lifestyle begins here.
//         </p>
//         <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200">
//           Contact Now
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-gray-500">
//         © 2026 Anondo Bhubon | info@anondobhubon.com
//       </footer>
//     </div>
//   );
// }

import Image from "next/image";

const stats = [
  { value: "40%-50%", label: "green, blue, and open infrastructure" },
  { value: "3 km", label: "forest walkway through native landscape" },
  { value: "30 min", label: "from Hazrat Shahjalal International Airport" },
  { value: "10 min", label: "from the MRT-1 Depot Station" },
];

const pillars = [
  {
    title: "Smart Urban Planning",
    text: "Sector-based blocks, wide arterial roads, civic services, and future-ready mobility planned around daily ease.",
  },
  {
    title: "Wellness and Community",
    text: "Parks, meditation zones, sports areas, clubhouses, and community farming built into neighborhood life.",
  },
  {
    title: "Safe and Secure Living",
    text: "Gated blocks, monitored access, security posts, surveillance networks, and emergency response planning.",
  },
];

const planItems = [
  {
    title: "Overall Masterplan",
    image: "/assets/masterplan-overall.jpg",
    text: "A water-led township framework with residential, civic, green, and commercial districts arranged around connected corridors.",
  },
  {
    title: "Masterplan Zones",
    image: "/assets/masterplan-zones.jpg",
    text: "Distinct lifestyle zones connect villas, apartments, civic anchors, and riverfront recreation.",
  },
  {
    title: "Land Use and Building Height",
    image: "/assets/land-use-plan.jpg",
    text: "Balanced density, open-space buffers, neighborhood amenities, and flexible residential typologies.",
  },
  {
    title: "Green Strategies",
    image: "/assets/green-strategies.jpg",
    text: "Green corridors, water bodies, and pedestrian landscapes establish the ecological identity of the township.",
  },
  {
    title: "Road Network Plan",
    image: "/assets/road-network.jpg",
    text: "Hierarchical mobility routes are designed for local loops, emergency access, and future transit integration.",
  },
  {
    title: "Pedestrian Network Plan",
    image: "/assets/pedestrian-network.jpg",
    text: "Walkable links, shaded promenades, and calm internal routes make the township feel human-scaled.",
  },
];

const residences = [
  {
    title: "Luxury Villas",
    image: "/assets/luxury-villas.jpg",
    audience:
      "Executives, NRBs, expats, diplomats, and families seeking privacy.",
    features: [
      "Private gardens and pools",
      "4-6 bedrooms with terraces",
      "Lakeside promenade access",
    ],
  },
  {
    title: "Mid-Rise Apartments",
    image: "/assets/midrise-apartments.jpg",
    audience:
      "Professionals and growing families who want urban comfort beside open green space.",
    features: [
      "4-7 story buildings",
      "Rooftop gardens and parking",
      "Courtyards, parks, schools, and clinics nearby",
    ],
  },
  {
    title: "Condominiums",
    image: "/assets/arrival-plaza.jpg",
    audience:
      "Young professionals, NGO staff, government officials, and compact modern households.",
    features: [
      "1-3 bedroom suites",
      "Rooftop lounges and coworking",
      "Mixed-use podiums and transit links",
    ],
  },
];

const infrastructure = [
  {
    title: "Artificial River and Lake",
    image: "/assets/lake.jpg",
    text: "A River Sitalakhya-fed water system supports stormwater retention, cooling, leisure decks, and canal connectivity.",
  },
  {
    title: "Forest Walkway",
    image: "/assets/forest-walkway.jpg",
    text: "A 3-kilometer shaded trail with native trees, rest decks, solar lighting, wellness stops, and nature education.",
  },
  {
    title: "Road Architecture",
    image: "/assets/sectional-perspective.jpg",
    text: "Generous streets, pedestrian bands, cycling paths, and water-sensitive infrastructure shape calm daily movement.",
  },
];

const amenities = [
  {
    title: "Residential Clubhouse",
    image: "/assets/residential-clubhouse.jpg",
  },
  { title: "Communal Park", image: "/assets/communal-park.jpg" },
  { title: "Parking Courts", image: "/assets/parking.jpg" },
  { title: "Sports Facilities", image: "/assets/sport-facilities-one.jpg" },
  { title: "Courts and Fields", image: "/assets/sport-facilities-two.jpg" },
  { title: "Kid's Playground", image: "/assets/kids-playground.jpg" },
  { title: "Communal Kitchen", image: "/assets/communal-kitchen.jpg" },
  { title: "Riverside Park", image: "/assets/riverside-park.jpg" },
  { title: "Meditation Area", image: "/assets/meditation-area.jpg" },
  { title: "Meditation Space", image: "/assets/meditation-space.jpg" },
  { title: "Relaxation Zone", image: "/assets/relaxation-zone.jpg" },
  { title: "IT and Cyber Hub", image: "/assets/it-hub.jpg" },
];

const benefits = [
  "Solar lighting and renewable-ready infrastructure",
  "Rain harvesting, canal circulation, and wastewater recycling",
  "Underground utility corridors for electricity, gas, and water",
  "Waste segregation, EV charging, and low-carbon material strategy",
  "Police outposts, security posts, CCTV, and visitor access systems",
  "Schools, clinics, fire service, transit terminal, and commercial plazas",
];

const timeline = [
  {
    phase: "Phase 1",
    dates: "Jan 2026 - Dec 2026",
    scope: "Roads, utilities, canals, and primary infrastructure",
  },
  {
    phase: "Phase 2",
    dates: "Jan 2027 - Dec 2027",
    scope: "Luxury villas, forest walkway, lake, and water edges",
  },
  {
    phase: "Phase 3",
    dates: "2028 - 2029",
    scope: "Condos, IT park, civic facilities, and business districts",
  },
  {
    phase: "Phase 4",
    dates: "2030 onward",
    scope: "Schools, hospitals, malls, and full smart integration",
  },
];

const investmentPaths = [
  {
    name: "Private Residences",
    text: "Villa plots, apartments, and condominiums for families, expats, NRBs, and long-term residents.",
  },
  {
    name: "Institutional Anchors",
    text: "Opportunities for schools, hospitals, malls, clubs, wellness facilities, and civic partnerships.",
  },
  {
    name: "Knowledge Economy",
    text: "IT parks, coworking, green offices, startup zones, fiber connectivity, and commercial services.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}) {
  const titleClass = `${align === "center" ? "section-title mx-auto" : "section-title"} ${
    tone === "dark" ? "text-white" : "text-ink"
  }`;
  const copyClass = `${align === "center" ? "section-copy mx-auto" : "section-copy"} ${
    tone === "dark" ? "text-white/70" : "text-slate-600"
  }`;

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
      {copy ? <p className={copyClass}>{copy}</p> : null}
    </div>
  );
}

function FramedImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}) {
  return (
    <div className={`image-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <div className="site-shell flex h-16 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 text-white"
            aria-label="Anondo Bhubon home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-white/25 bg-white text-lg font-black lowercase text-canopy">
              ab
            </span>
            <span className="hidden text-sm font-semibold tracking-wide sm:block">
              Anondo Bhubon
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#masterplan">
              Masterplan
            </a>
            <a className="nav-link" href="#residences">
              Residences
            </a>
            <a className="nav-link" href="#amenities">
              Amenities
            </a>
            <a className="nav-link" href="#timeline">
              Timeline
            </a>
          </nav>
          <a href="#contact" className="button-primary px-4 py-2.5">
            Get in touch
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative min-h-[88vh] bg-ink pt-16 text-white"
      >
        <Image
          src="/assets/forest-walkway.jpg"
          alt="Tree-lined forest walkway planned for Anondo Bhubon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,24,28,0.92),rgba(5,24,28,0.55)_42%,rgba(5,24,28,0.12)),linear-gradient(180deg,rgba(5,24,28,0.35),rgba(5,24,28,0.82))]" />
        <div className="site-shell relative z-10 flex min-h-[calc(88vh-4rem)] items-end pb-12 pt-20 sm:pb-16">
          <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow text-lagoon">
                Bangladesh's eco-conscious township
              </p>
              <h1 className="mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Anondo Bhubon
              </h1>
              <p className="mt-4 max-w-3xl text-xl font-medium text-white/90 sm:text-2xl">
                A new horizon in eco-friendly urban living.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Discover a township where nature, wellness, and modern living
                exist in harmony near Purbachal, Kanchan Bridge, and the River
                Sitalakhya.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary" href="#contact">
                  Download Brochure
                </a>
                <a className="button-secondary" href="#pricing">
                  View Pricing
                </a>
              </div>
            </div>
            <div className="dark-panel grid gap-5 p-4 sm:grid-cols-2 lg:p-5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-white/10 bg-white/[0.06] p-4"
                >
                  <p className="font-serif text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="About us"
              title="Sustainable living, inspired by nature"
              copy="Anondo Bhubon is more than a residential project. It is a vision for a healthy, community-driven lifestyle with urban access and natural calm in the same address."
            />
            <div className="mt-8 space-y-4">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="panel p-5">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-canopy text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FramedImage
              src="/assets/lake.jpg"
              alt="Lake infrastructure inside Anondo Bhubon"
              className="aspect-[4/5] sm:translate-y-8"
            />
            <FramedImage
              src="/assets/communal-park.jpg"
              alt="Community park and pool landscape"
              className="aspect-[4/5]"
            />
            <div className="panel p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
                Location advantage
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-serif font-semibold text-canopy">
                    5 min
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    from Kanchan Bridge
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold text-canopy">
                    Near
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Purbachal New Town
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold text-canopy">
                    Direct
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Dhaka Bypass and Purbachal Expressway access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FramedImage
            src="/assets/sectional-perspective.jpg"
            alt="Sectional perspective of the planned township"
            className="aspect-[16/9]"
          />
          <div>
            <SectionHeader
              eyebrow="Location advantage"
              title="Connected to Dhaka, buffered by water and green land"
              copy="Strategically placed east of the River Sitalakhya, Anondo Bhubon is close enough for daily access and far enough to restore air, views, and peace."
            />
            <div className="mt-7 grid gap-3">
              {[
                "30 minutes from Hazrat Shahjalal International Airport",
                "10 minutes from MRT-1 Depot Station",
                "Direct access via Dhaka Bypass Expressway and Purbachal Expressway",
                "Close to Bangladesh Hi-Tech Park, Purbachal CBD, and Bashundhara Residential Zone",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-ember" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="masterplan" className="bg-white py-20 sm:py-24">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Master plan framework"
            title="A sector-based smart community organized around water, shade, and civic life"
            copy="Every 100 bighas form a block. Four blocks form a sector, allowing the township to grow in distinct lifestyle zones while staying connected by a unified green and blue network."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planItems.map((item, index) => (
              <article
                key={item.title}
                className={
                  index === 0
                    ? "panel overflow-hidden lg:col-span-2 lg:row-span-2"
                    : "panel overflow-hidden"
                }
              >
                <div
                  className={
                    index === 0
                      ? "relative aspect-[16/10]"
                      : "relative aspect-[4/3]"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="residences" className="bg-ink py-20 text-white sm:py-24">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Residential components"
            title="Homes for privacy, family growth, and efficient city living"
            copy="Luxury villas, mid-rise apartments, and condominiums are placed as distinct neighborhoods with shared access to parks, canals, civic amenities, and transit."
            align="center"
            tone="dark"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {residences.map((home) => (
              <article
                key={home.title}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold">
                    {home.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {home.audience}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-white/80">
                    {home.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Green and blue infrastructure"
            title="Water systems, forest routes, and calm streets form the township backbone"
            copy="The plan uses artificial rivers, canals, lakes, shaded walkways, and road architecture as daily amenities and as practical environmental systems."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {infrastructure.map((item) => (
              <article key={item.title} className="panel overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-mist py-20 sm:py-24">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Urban amenities and facilities"
            title="A township built for everyday rituals, not just addresses"
            copy="From clubhouses and sports courts to riverside walks, meditation decks, gardens, kitchens, and play spaces, every sector is designed to support shared life."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item, index) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-lg bg-white shadow-soft ${index === 0 || index === 11 ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={
                    index === 0 || index === 11
                      ? "relative aspect-[16/9]"
                      : "relative aspect-[4/3]"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Commercial and economic zones"
              title="A self-sufficient lifestyle ecosystem with its own knowledge economy"
              copy="Anondo Bhubon integrates IT parks, green-certified offices, daily markets, civic services, logistics, and transit support into the same township framework."
            />
            <div className="mt-8 grid gap-4">
              {investmentPaths.map((item) => (
                <article key={item.name} className="panel p-5">
                  <h3 className="text-lg font-semibold text-canopy">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <FramedImage
            src="/assets/it-hub.jpg"
            alt="IT and cyber business hub"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <section id="pricing" className="bg-ink py-20 text-white sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Core features and benefits"
              title="Designed for sustainability, security, and long-term value"
              copy="The township combines environmental systems, private security, civic services, mobility links, and community amenities into one integrated development model."
              tone="dark"
            />
            <a href="#contact" className="button-primary mt-8">
              Request advisor pricing
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
              >
                <span className="block h-1 w-10 rounded-full bg-ember" />
                <p className="mt-4 text-sm leading-7 text-white/75">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-mist py-20 sm:py-24">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Implementation timeline"
            title="A phased path from infrastructure to full smart integration"
            copy="Development is organized to establish the ground systems first, then bring homes, water landscapes, business zones, civic facilities, and full township services online."
            align="center"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.phase} className="panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">
                  {item.phase}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                  {item.dates}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.scope}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <FramedImage
            src="/assets/riverside-park.jpg"
            alt="Riverside park along the water"
            className="aspect-[16/10]"
          />
          <div>
            <SectionHeader
              eyebrow="A new way of life"
              title="A place where the future feels calmer, healthier, and more connected"
              copy="Anondo Bhubon is a vision for green living that remains accessible to modern Dhaka. It brings family homes, wellness, mobility, civic life, and investment potential into one carefully planned address."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-canopy p-5 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                  Developer
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Ulukhola Sustainable Township Consortium
                </p>
              </div>
              <div className="rounded-lg bg-[#f3eadb] p-5 text-ink">
                <p className="text-sm uppercase tracking-[0.2em] text-clay">
                  Head office
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Ulukhola, near Purbachal New Town
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-ink py-20 text-white sm:py-24"
      >
        <Image
          src="/assets/relaxation-zone.jpg"
          alt="Relaxation landscape at Anondo Bhubon"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/90" />
        <div className="site-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-lagoon">A step closer to your future</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Join Anondo Bhubon and begin the move toward healthier urban
              living.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Get in touch with an expert advisor for brochure access, available
              residence types, sector planning, investment opportunities, and
              appointment scheduling.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/80">
              <p>info@anondobhubon.com</p>
              <p>+880-1XXXXXXXXX</p>
              <p>www.anondobhubon.com</p>
            </div>
          </div>
          <form className="rounded-lg border border-white/10 bg-white p-5 text-ink shadow-lift sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Full name
                <input
                  className="mt-2 h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-semibold">
                Phone
                <input
                  className="mt-2 h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                  name="phone"
                  placeholder="+880"
                />
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                Interest
                <select
                  className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                  name="interest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a residence or investment type
                  </option>
                  <option>Luxury villas</option>
                  <option>Mid-rise apartments</option>
                  <option>Condominiums</option>
                  <option>Institutional or commercial partnership</option>
                </select>
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                Message
                <textarea
                  className="mt-2 min-h-32 w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                  name="message"
                  placeholder="Tell us what you would like to explore"
                />
              </label>
            </div>
            <button className="button-primary mt-5 w-full" type="submit">
              Get in touch
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
