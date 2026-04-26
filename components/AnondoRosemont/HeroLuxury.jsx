// "use client";

// export default function HeroLuxury() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//         alt="Luxury Villa"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Light Overlay (IMPORTANT: not dark) */}
//       <div className="absolute inset-0 bg-white/40 backdrop-brightness-90" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
//         <div className="max-w-2xl">
//           {/* Small Top Text */}
//           <p className="text-sm text-gray-700 mb-4">Anondo Rosemont Estate</p>

//           {/* Main Heading (blue stroke effect) */}
//           <h1 className="text-4xl md:text-6xl font-bold text-transparent stroke-text mb-4">
//             Where Elegance Becomes Heritage
//           </h1>

//           {/* Sub Heading */}
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
//             Where the Hills Whisper and Roses Welcome You Home
//           </h2>

//           {/* Tagline */}
//           <p className="text-gray-700 mb-2 italic">
//             Elegantia in Aeternum — Elegance Forever
//           </p>

//           <p className="text-gray-700 mb-6">
//             A Signature Duplex Township by Anondo Rosemont Estate under Anondo
//             CityScappers Ltd.
//           </p>

//           {/* Description */}
//           <p className="text-gray-800 mb-6 leading-relaxed">
//             Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//             township redefining structured luxury living in Bangladesh. A
//             disciplined, architect-controlled community where villas meet
//             vision.
//           </p>

//           {/* Location */}
//           <p className="text-gray-700 mb-8 flex items-center gap-2">
//             <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
//             Ulukhola | South of Turag River | Near Purbachal New Town
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-[#1f4f78] text-white px-6 py-3 rounded-md font-medium">
//               Explore Rosemont Estate
//             </button>

//             <button className="border border-white text-white px-6 py-3 rounded-md backdrop-blur-sm bg-white/20">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for stroke */}
//       <style jsx>{`
//         .stroke-text {
//           -webkit-text-stroke: 1px #1f4f78;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#101714] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,17,14,0.94)_0%,rgba(10,17,14,0.78)_39%,rgba(10,17,14,0.34)_72%,rgba(10,17,14,0.16)_100%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_35%,rgba(202,164,102,0.26),transparent_32%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#111816] via-[#111816]/70 to-transparent" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center py-28 md:py-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
//           <div className="max-w-4xl">
//             <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#d7b985]">
//               <span className="h-px w-12 bg-[#d7b985]" />
//               Anondo Rosemont Estate
//             </p>

//             <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
//               Where Elegance Becomes Heritage
//             </h1>

//             <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[#f7efe1] md:text-4xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-7 max-w-2xl border-l border-[#c8a46e]/70 pl-5">
//               <p className="text-lg italic leading-relaxed text-[#e7d2ad]">
//                 Elegantia in Aeternum - Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
//               <span className="h-2 w-2 rounded-full bg-[#d7b985]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group inline-flex items-center justify-center gap-4 bg-[#c8a46e] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#101714] shadow-2xl shadow-black/25 transition duration-300 hover:bg-white">
//                 Explore Rosemont Estate
//                 <span className="h-px w-9 bg-[#101714] transition duration-300 group-hover:w-12" />
//               </button>

//               <button className="inline-flex items-center justify-center border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:border-[#d7b985] hover:bg-[#d7b985]/15">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
//             <div className="border border-[#d7b985]/35 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b985]">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-2xl font-semibold leading-snug text-white">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-white/15 bg-[#101714]/82 backdrop-blur-md sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[104px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-bold tracking-normal text-white md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b985]">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-12 bg-[#d7b985]/70" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#101714] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,17,14,0.78)_0%,rgba(10,17,14,0.52)_38%,rgba(10,17,14,0.18)_72%,rgba(10,17,14,0.06)_100%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,14,0.16)_0%,rgba(10,17,14,0.04)_42%,rgba(10,17,14,0.76)_100%)]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.66fr] lg:items-end">
//           <div className="max-w-3xl">
//             <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9bd87]">
//               <span className="h-px w-10 bg-[#d9bd87]" />
//               Anondo Rosemont Estate
//             </p>

//             <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Where Elegance Becomes Heritage
//             </h1>

//             <h2 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-[#f5ead7] md:text-3xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-7 max-w-2xl border-l border-[#d8b779]/70 pl-5">
//               <p className="text-base italic leading-relaxed text-[#ead2a8] md:text-lg">
//                 Elegantia in Aeternum - Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
//               <span className="h-2 w-2 bg-[#d9bd87]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group inline-flex items-center justify-center gap-4 bg-[#d8b779] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#101714] shadow-2xl shadow-black/25 transition duration-300 hover:bg-white">
//                 Explore Rosemont Estate
//                 <span className="h-px w-9 bg-[#101714] transition duration-300 group-hover:w-12" />
//               </button>

//               <button className="inline-flex items-center justify-center border border-white/35 bg-black/18 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#d9bd87] hover:bg-[#d9bd87]/15">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-white/16 bg-[#101714]/42 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
//             <div className="border border-[#d9bd87]/35 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9bd87]">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-xl font-medium leading-snug text-white/92">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-white/15 bg-[#101714]/72 backdrop-blur-md sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[96px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-white md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd87]">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-10 bg-[#d9bd87]/70" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#380a0a] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.76)_0%,rgba(56,10,10,0.50)_38%,rgba(56,10,10,0.18)_72%,rgba(56,10,10,0.06)_100%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.10)_0%,rgba(56,10,10,0.02)_42%,rgba(56,10,10,0.78)_100%)]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.66fr] lg:items-end">
//           <div className="max-w-3xl">
//             <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9bd87]">
//               <span className="h-px w-10 bg-[#d9bd87]" />
//               Anondo Rosemont Estate
//             </p>

//             <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Where Elegance Becomes Heritage
//             </h1>

//             <h2 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-[#f5ead7] md:text-3xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-7 max-w-2xl border-l border-[#d8b779]/70 pl-5">
//               <p className="text-base italic leading-relaxed text-[#ead2a8] md:text-lg">
//                 Elegantia in Aeternum - Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
//               <span className="h-2 w-2 bg-[#d9bd87]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group inline-flex items-center justify-center gap-4 bg-[#d8b779] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#380a0a] shadow-2xl shadow-black/25 transition duration-300 hover:bg-white">
//                 Explore Rosemont Estate
//                 <span className="h-px w-9 bg-[#380a0a] transition duration-300 group-hover:w-12" />
//               </button>

//               <button className="inline-flex items-center justify-center border border-white/35 bg-[#380a0a]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#d9bd87] hover:bg-[#d9bd87]/15">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-white/16 bg-[#380a0a]/45 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
//             <div className="border border-[#d9bd87]/35 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9bd87]">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-xl font-medium leading-snug text-white/92">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-white/15 bg-[#380a0a]/76 backdrop-blur-md sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[96px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-white md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd87]">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-10 bg-[#d9bd87]/70" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const estateHighlights = [
  { value: "807", label: "Bigha Estate" },
  { value: "60 ft", label: "Grand Avenue" },
  { value: "Villa", label: "Only Township" },
];

export default function HeroLuxury() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#380a0a] text-white">
      <Image
        src="/10 katha villa/MAHI Final.jpeg"
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.58)_0%,rgba(56,10,10,0.36)_38%,rgba(56,10,10,0.14)_72%,rgba(56,10,10,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.07)_0%,rgba(56,10,10,0.01)_42%,rgba(56,10,10,0.54)_100%)]" />

      <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.66fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/82">
              <span className="h-px w-10 bg-off_white" />
              Anondo Rosemont Estate
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Where Elegance Becomes Heritage
            </h1>

            <h2 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-white md:text-3xl">
              Where the Hills Whisper and Roses Welcome You Home
            </h2>

            <div className="mt-7 max-w-2xl border-l border-[#380a0a]/70 pl-5">
              <p className="text-base italic leading-relaxed text-white md:text-lg">
                Elegantia in Aeternum - Elegance Forever
              </p>
              <p className="mt-3 leading-relaxed text-white/78">
                A signature duplex township by Anondo Rosemont Estate under
                Anondo CityScappers Ltd.
              </p>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
              township redefining structured luxury living in Bangladesh. A
              disciplined, architect-controlled community where villas meet
              vision.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
              <span className="h-2 w-2 bg-[#380a0a]" />
              <span>Ulukhola</span>
              <span className="h-px w-7 bg-white/30" />
              <span>South of Turag River</span>
              <span className="h-px w-7 bg-white/30" />
              <span>Near Purbachal New Town</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-[#380a0a] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-2xl shadow-black/25 transition duration-300 hover:bg-white hover:text-[#380a0a]">
                <span className="relative z-10">Explore Rosemont Estate</span>

                <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-white transition-[transform,background-color] delay-100 duration-700 ease-out group-hover:scale-x-100 group-hover:bg-[#380a0a]" />
              </button>

              <button className="inline-flex items-center justify-center border border-white/35 bg-[#380a0a]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#380a0a] hover:bg-[#380a0a]/55">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="hidden border border-white/16 bg-[#380a0a]/45 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
            <div className="border border-[#380a0a]/35 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                Estate Signature
              </p>
              <p className="mt-4 text-xl font-medium leading-snug text-white/92">
                Architect-controlled villas, landscaped avenues, and a legacy
                community planned for generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="custom-container mx-auto">
          <div className="grid border border-white/15 bg-[#380a0a]/76 backdrop-blur-md sm:grid-cols-3">
            {estateHighlights.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[96px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
              >
                <div>
                  <p className="text-3xl font-semibold text-white md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/82">
                    {item.label}
                  </p>
                </div>
                <span className="h-px w-10 bg-white/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
