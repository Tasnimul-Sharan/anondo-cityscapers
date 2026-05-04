// import { pillars } from "@/data/anondoBhubonData";
// import FramedImage from "./FramedImage";
// import SectionHeader from "./SectionHeader";

// const locationStats = [
//   { value: "5 min", label: "from Kanchan Bridge" },
//   { value: "30 min", label: "from Hazrat Shahjalal International Airport" },
//   { value: "10 min", label: "from MRT-1 Depot Station" },
// ];

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-white py-20 sm:py-24"
//     >
//       <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(15,76,63,0.08),transparent)]" />
//       <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-lagoon/10 blur-3xl" />

//       <div className="site-shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
//         <div>
//           <SectionHeader
//             eyebrow="About us"
//             title="Sustainable living, inspired by nature"
//             copy="Anondo Bhubon is more than a residential project. It is a carefully planned lifestyle address where green infrastructure, wellness, security, and modern urban access come together."
//           />

//           <div className="mt-8 rounded-lg border border-canopy/10 bg-mist/70 p-5 shadow-soft">
//             <p className="font-serif text-2xl leading-snug text-ink">
//               We are not just offering homes. We are shaping a healthier way to
//               live, connect, move, and grow.
//             </p>
//           </div>

//           <div className="mt-6 grid gap-4">
//             {pillars.map((pillar, index) => (
//               <article
//                 key={pillar.title}
//                 className="group rounded-lg border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-canopy/25 hover:shadow-soft"
//               >
//                 <div className="flex gap-4">
//                   <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ink text-sm font-bold text-white transition group-hover:bg-canopy">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <div>
//                     <h3 className="text-lg font-semibold text-ink">
//                       {pillar.title}
//                     </h3>
//                     <p className="mt-2 text-sm leading-7 text-slate-600">
//                       {pillar.text}
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         <div className="relative">
//           <div className="grid gap-4 sm:grid-cols-2">
//             <FramedImage
//               src="/assets/lake.jpg"
//               alt="Lake infrastructure inside Anondo Bhubon"
//               className="aspect-[4/5] sm:translate-y-10"
//             />

//             <FramedImage
//               src="/assets/communal-park.jpg"
//               alt="Community park and pool landscape"
//               className="aspect-[4/5]"
//             />
//           </div>

//           <div className="relative z-10 mt-4 rounded-lg border border-white/80 bg-white/90 p-5 shadow-lift backdrop-blur sm:-mt-10 sm:mx-8">
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
//                   Location advantage
//                 </p>
//                 <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
//                   Minutes from key access points, yet surrounded by water,
//                   greenery, and the calm edge of Purbachal.
//                 </p>
//               </div>

//               <a href="#contact" className="button-ghost shrink-0">
//                 Learn More
//               </a>
//             </div>

//             <div className="mt-6 grid gap-3 sm:grid-cols-3">
//               {locationStats.map((item) => (
//                 <div
//                   key={item.label}
//                   className="rounded-md border border-slate-200 bg-white p-4"
//                 >
//                   <p className="font-serif text-3xl font-semibold text-canopy">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-sm leading-6 text-slate-600">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { pillars } from "@/data/anondoBhubonData";
import FramedImage from "./FramedImage";

const locationStats = [
  { value: "5 min", label: "from Kanchan Bridge" },
  { value: "30 min", label: "from Hazrat Shahjalal International Airport" },
  { value: "10 min", label: "from MRT-1 Depot Station" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFFFF] py-20 sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(44,58,131,0.08),transparent)]" />
      <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#5F6AA2]/10 blur-3xl" />

      <div className="site-shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          {/* Updated Header Font + Color */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
                About Us
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#2C3A83] sm:text-5xl">
              Sustainable living, inspired by nature
            </h2>

            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#1F2937]/75">
              Anondo Bhubon is more than a residential project. It is a
              carefully planned lifestyle address where green infrastructure,
              wellness, security, and modern urban access come together.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-[#5F6AA2]/15 bg-[#5F6AA2]/10 p-5 shadow-sm">
            <p className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#2C3A83]">
              We are not just offering homes. We are shaping a healthier way to
              live, connect, move, and grow.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group rounded-lg border border-[#5F6AA2]/20 bg-[#FFFFFF] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2C3A83]/30 hover:shadow-md"
              >
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#2C3A83] text-sm font-bold text-[#FFFFFF] transition group-hover:bg-[#F48220]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold leading-tight text-[#2C3A83]">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-7 text-[#1F2937]/75">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#5F6AA2]/20 bg-[#FFFFFF] p-3 shadow-sm sm:translate-y-10">
              <FramedImage
                src="/assets/lake.jpg"
                alt="Lake infrastructure inside Anondo Bhubon"
                className="aspect-[4/5]"
              />
            </div>

            <div className="rounded-lg border border-[#5F6AA2]/20 bg-[#FFFFFF] p-3 shadow-sm">
              <FramedImage
                src="/assets/communal-park.jpg"
                alt="Community park and pool landscape"
                className="aspect-[4/5]"
              />
            </div>
          </div>

          <div className="relative z-10 mt-4 rounded-lg border border-[#5F6AA2]/20 bg-[#FFFFFF]/95 p-5 shadow-lg backdrop-blur sm:-mt-10 sm:mx-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                  Location Advantage
                </p>

                <p className="mt-2 max-w-md text-sm font-medium leading-7 text-[#1F2937]/75">
                  Minutes from key access points, yet surrounded by water,
                  greenery, and the calm edge of Purbachal.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#2C3A83]/20 bg-[#2C3A83] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#FFFFFF] transition duration-300 hover:bg-[#F48220]"
              >
                Learn More
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {locationStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-[#5F6AA2]/20 bg-[#F8F9FC] p-4"
                >
                  <p className="text-3xl font-bold tracking-[-0.03em] text-[#2C3A83]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-[#1F2937]/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { pillars } from "@/data/anondoBhubonData";
// import FramedImage from "./FramedImage";
// import SectionHeader from "./SectionHeader";

// const locationStats = [
//   { value: "5 min", label: "Kanchan Bridge" },
//   { value: "30 min", label: "International Airport" },
//   { value: "10 min", label: "MRT-1 Depot Station" },
// ];

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="border-y border-slate-200 bg-[#f7f9f8] py-20 sm:py-24"
//     >
//       <div className="site-shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//         <div>
//           <SectionHeader
//             eyebrow="About us"
//             title="A future-ready township shaped by sustainability, planning, and long-term value"
//             copy="Anondo Bhubon is a premium eco-conscious residential township designed for modern families, institutional investors, and long-term community growth near Purbachal."
//           />

//           <div className="mt-8 border-l-4 border-canopy bg-white p-6 shadow-soft">
//             <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
//               Development philosophy
//             </p>
//             <p className="mt-4 font-serif text-2xl leading-snug text-ink">
//               A master-planned urban address where green infrastructure,
//               security, wellness, and civic convenience work as one complete
//               lifestyle ecosystem.
//             </p>
//           </div>

//           <div className="mt-6 grid gap-4">
//             {pillars.map((pillar, index) => (
//               <article
//                 key={pillar.title}
//                 className="group border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-canopy/30 hover:shadow-soft"
//               >
//                 <div className="flex gap-4">
//                   <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-sm font-bold text-white transition group-hover:bg-canopy">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <div>
//                     <h3 className="text-lg font-semibold text-ink">
//                       {pillar.title}
//                     </h3>
//                     <p className="mt-2 text-sm leading-7 text-slate-600">
//                       {pillar.text}
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         <div>
//           <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
//             <FramedImage
//               src="/assets/lake.jpg"
//               alt="Lake infrastructure inside Anondo Bhubon"
//               className="aspect-[4/5]"
//             />

//             <div className="grid gap-4">
//               <FramedImage
//                 src="/assets/communal-park.jpg"
//                 alt="Community park and pool landscape"
//                 className="aspect-[4/5]"
//               />

//               <div className="bg-ink p-5 text-white shadow-lift">
//                 <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lagoon">
//                   Strategic access
//                 </p>
//                 <p className="mt-3 text-sm leading-7 text-white/75">
//                   Positioned near Purbachal with direct connectivity to major
//                   expressways, airport access, and future transit infrastructure.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 border border-slate-200 bg-white p-6 shadow-soft">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
//                   Location advantage
//                 </p>
//                 <h3 className="mt-2 text-2xl font-semibold text-ink">
//                   Connected, calm, and commercially positioned
//                 </h3>
//               </div>

//               <a href="#contact" className="button-ghost">
//                 Learn More
//               </a>
//             </div>

//             <div className="mt-6 grid gap-3 sm:grid-cols-3">
//               {locationStats.map((item) => (
//                 <div
//                   key={item.label}
//                   className="border border-slate-200 bg-[#f7f9f8] p-4"
//                 >
//                   <p className="font-serif text-3xl font-semibold text-canopy">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-sm leading-6 text-slate-600">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
