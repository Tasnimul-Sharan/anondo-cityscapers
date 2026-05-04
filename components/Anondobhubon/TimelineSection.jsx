// import { timeline } from "@/data/anondoBhubonData";
// import SectionHeader from "./SectionHeader";

// export default function TimelineSection() {
//   return (
//     <section id="timeline" className="bg-mist py-20 sm:py-24">
//       <div className="site-shell">
//         <SectionHeader
//           eyebrow="Implementation timeline"
//           title="A phased path from infrastructure to full smart integration"
//           copy="Development is organized to establish the ground systems first, then bring homes, water landscapes, business zones, civic facilities, and full township services online."
//           align="center"
//         />

//         <div className="mt-12 grid gap-4 lg:grid-cols-4">
//           {timeline.map((item) => (
//             <article key={item.phase} className="panel p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">
//                 {item.phase}
//               </p>

//               <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
//                 {item.dates}
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-slate-600">
//                 {item.scope}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { timeline } from "@/data/anondoBhubonData";

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-[#F8F9FC] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Implementation Timeline
            </p>
            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#2C3A83] sm:text-5xl">
            A phased path from infrastructure to full smart integration.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            Development is organized to establish the ground systems first, then
            bring homes, water landscapes, business zones, civic facilities and
            full township services online.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="absolute left-0 right-0 top-[32px] hidden h-[2px] bg-[#5F6AA2]/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <article
                key={item.phase}
                className="group relative border border-[#5F6AA2]/20 bg-[#FFFFFF] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2C3A83]/35 hover:shadow-md"
              >
                {/* Number */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center bg-[#2C3A83] text-lg font-bold text-[#FFFFFF] transition duration-300 group-hover:bg-[#F48220]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                  {item.phase}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-[#2C3A83]">
                  {item.dates}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-[#1F2937]/75">
                  {item.scope}
                </p>

                <div className="mt-6 border-t border-[#5F6AA2]/20 pt-5">
                  <span className="block h-[3px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
