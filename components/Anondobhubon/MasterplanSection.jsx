// import Image from "next/image";
// import { planItems } from "@/data/anondoBhubonData";
// import SectionHeader from "./SectionHeader";

// export default function MasterplanSection() {
//   return (
//     <section id="masterplan" className="bg-white py-20 sm:py-24">
//       <div className="site-shell">
//         <SectionHeader
//           eyebrow="Master plan framework"
//           title="A sector-based smart community organized around water, shade, and civic life"
//           copy="Every 100 bighas form a block. Four blocks form a sector, allowing the township to grow in distinct lifestyle zones while staying connected by a unified green and blue network."
//           align="center"
//         />

//         <div className="mt-12 grid gap-5 lg:grid-cols-3">
//           {planItems.map((item, index) => (
//             <article
//               key={item.title}
//               className={
//                 index === 0
//                   ? "panel overflow-hidden lg:col-span-2 lg:row-span-2"
//                   : "panel overflow-hidden"
//               }
//             >
//               <div
//                 className={
//                   index === 0
//                     ? "relative aspect-[16/10]"
//                     : "relative aspect-[4/3]"
//                 }
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                   sizes="(min-width: 1024px) 33vw, 100vw"
//                 />
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-7 text-slate-600">
//                   {item.text}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { planItems } from "@/data/anondoBhubonData";

const planningStats = [
  { value: "100", label: "Bigha per block" },
  { value: "400", label: "Bigha per sector" },
  { value: "6", label: "Planning layers" },
];

export default function MasterplanSection() {
  const featuredPlan = planItems[0];
  const otherPlans = planItems.slice(1);

  return (
    <section
      id="masterplan"
      className="border-y border-slate-200 bg-[#f5f6fa] py-20 sm:py-24 lg:py-28"
    >
      <div className="site-shell">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#f48420]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#2c3a83]">
              Master Plan Framework
            </p>
            <span className="h-[2px] w-12 bg-[#f48420]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#2c3a83] sm:text-5xl">
            A sector-based smart community organized around water, shade, and
            civic life.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">
            Every 100 bighas form a block. Four blocks form a sector, allowing
            the township to grow in distinct lifestyle zones while staying
            connected by a unified green and blue network.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          {/* Featured Masterplan */}
          <article className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-[#eef1f7]">
              <Image
                src={featuredPlan.image}
                alt={featuredPlan.title}
                fill
                priority
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-contain p-4 sm:p-6"
              />

              <div className="absolute left-5 top-5 border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f48420]">
                  Primary Layout
                </p>
                <p className="mt-1 text-sm font-bold text-[#2c3a83]">
                  Overall Township Plan
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f48420]">
                01 / Masterplan
              </p>

              <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#2c3a83] sm:text-3xl">
                {featuredPlan.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-slate-600">
                {featuredPlan.text}
              </p>
            </div>
          </article>

          {/* Planning Intelligence */}
          <aside className="border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f48420]">
              Planning Intelligence
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#2c3a83] sm:text-3xl">
              A complete township logic built around land use, movement, and
              green-blue infrastructure.
            </h3>

            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Residential zones, civic anchors, water bodies, road networks,
              pedestrian corridors, and ecological buffers are planned as one
              connected development framework.
            </p>

            <div className="mt-7 grid gap-3">
              {planningStats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border border-slate-200 bg-[#f8f9fc] p-4"
                >
                  <p className="text-sm font-semibold leading-6 text-slate-600">
                    {item.label}
                  </p>

                  <p className="text-3xl font-extrabold tracking-[-0.03em] text-[#2c3a83]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-l-2 border-[#f48420] bg-[#f8f9fc] p-5">
              <p className="text-sm font-bold leading-7 text-slate-700">
                Designed for long-term value through controlled density,
                environmental balance, future mobility, and planned civic
                access.
              </p>
            </div>
          </aside>
        </div>

        {/* Other Plans */}
        <div className="mt-6 grid gap-5 lg:grid-cols-6">
          {otherPlans.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2c3a83]/30 hover:shadow-md ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/9] bg-[#eef1f7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-contain p-4 transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-[#2c3a83] text-sm font-extrabold text-white shadow-sm">
                  {String(index + 2).padStart(2, "0")}
                </div>
              </div>

              <div className="p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f48420]">
                  Planning Layer
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#2c3a83]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                  {item.text}
                </p>

                <span className="mt-5 block h-[3px] w-12 bg-[#f48420] transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";
// import { planItems } from "@/data/anondoBhubonData";
// import SectionHeader from "./SectionHeader";

// const planningStats = [
//   { value: "100", label: "bigha per block" },
//   { value: "400", label: "bigha per sector" },
//   { value: "6", label: "planning layers" },
// ];

// export default function MasterplanSection() {
//   const featuredPlan = planItems[0];
//   const otherPlans = planItems.slice(1);

//   return (
//     <section
//       id="masterplan"
//       className="relative overflow-hidden border-y border-slate-200 bg-[#f7f9f8] py-20 sm:py-24"
//     >
//       <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(15,76,63,0.08),transparent)]" />

//       <div className="site-shell relative">
//         <SectionHeader
//           eyebrow="Master plan framework"
//           title="A sector-based smart community organized around water, shade, and civic life"
//           copy="Every 100 bighas form a block. Four blocks form a sector, allowing the township to grow in distinct lifestyle zones while staying connected by a unified green and blue network."
//           align="center"
//         />

//         <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
//           <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lift">
//             <div className="relative aspect-[16/10] bg-[#eef3ec]">
//               <Image
//                 src={featuredPlan.image}
//                 alt={featuredPlan.title}
//                 fill
//                 priority
//                 sizes="(min-width: 1024px) 62vw, 100vw"
//                 className="object-contain p-4 sm:p-6"
//               />

//               <div className="absolute left-5 top-5 rounded-md border border-white/70 bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
//                 <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
//                   Primary layout
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-ink">
//                   Overall township plan
//                 </p>
//               </div>
//             </div>

//             <div className="grid gap-5 border-t border-slate-200 p-6 sm:grid-cols-[0.7fr_1fr] sm:items-center">
//               <div>
//                 <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember">
//                   01 / Masterplan
//                 </p>
//                 <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink">
//                   {featuredPlan.title}
//                 </h3>
//               </div>

//               <p className="text-sm leading-7 text-slate-600">
//                 {featuredPlan.text}
//               </p>
//             </div>
//           </article>

//           <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
//             <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
//               Planning intelligence
//             </p>

//             <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink">
//               Integrated land use, mobility, and green-blue infrastructure.
//             </h3>

//             <p className="mt-4 text-sm leading-7 text-slate-600">
//               Residential districts, civic services, commercial activity, water
//               bodies, open spaces, and pedestrian networks are organized into
//               one connected township model.
//             </p>

//             <div className="mt-7 grid gap-3">
//               {planningStats.map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex items-center justify-between rounded-md border border-slate-200 bg-[#f7f9f8] p-4"
//                 >
//                   <p className="text-sm leading-6 text-slate-600">
//                     {item.label}
//                   </p>
//                   <p className="font-serif text-3xl font-semibold text-canopy">
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 rounded-md border-l-2 border-ember bg-mist/80 p-5">
//               <p className="text-sm font-semibold leading-7 text-slate-700">
//                 Designed for long-term value through controlled density,
//                 environmental balance, and planned accessibility.
//               </p>
//             </div>
//           </aside>
//         </div>

//         <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
//           {otherPlans.map((item, index) => (
//             <article
//               key={item.title}
//               className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-canopy/30 hover:shadow-soft"
//             >
//               <div className="relative aspect-[16/11] bg-[#eef3ec]">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
//                   className="object-contain p-3 transition duration-700 group-hover:scale-[1.03]"
//                 />

//                 <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-ink text-sm font-bold text-white shadow-soft">
//                   {String(index + 2).padStart(2, "0")}
//                 </div>
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold leading-tight text-ink">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-600">
//                   {item.text}
//                 </p>
//                 <span className="mt-5 block h-[3px] w-12 rounded-full bg-ember transition-all duration-300 group-hover:w-20" />
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
