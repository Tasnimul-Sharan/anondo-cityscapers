"use client";

import { FaArrowRight, FaGlobeAsia, FaWhatsapp } from "react-icons/fa";

export default function NRBHeroSection() {
  const WHATSAPP_NUMBER = "8801313775333";

  const countries = [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Kuwait",
    "Oman",
    "UK",
    "USA",
    "Malaysia",
    "South Africa",
    "Japan",
    "South Korea",
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 text-white sm:py-28 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-green-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center text-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <FaGlobeAsia className="text-primary" />
              NRB Exclusive Investment Opportunity
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Own Land in Bangladesh with{" "}
              <span className="text-primary">Instant Legal Registration</span>
            </h1>

            {/* Sub Text */}
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-white/70 sm:text-lg">
              Secure your future with ready land near Purbachal — fully
              verified, legally safe, and supported for NRB investors worldwide.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-primary/90"
              >
                Book Site Visit
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Anondo Cityscapers, I would like to know more about NRB land investment opportunities.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-primary hover:bg-primary/10"
              >
                <FaWhatsapp className="text-lg text-green-400" />
                WhatsApp Now
              </a>
            </div>

            {/* Country Badges */}
            <div className="mt-8 flex flex-col items-center">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Trusted by NRB buyers from
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
