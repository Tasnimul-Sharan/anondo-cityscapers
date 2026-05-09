"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What types of villas are available?",
      a: "The project offers 5 Katha, 10 Katha, and 20 Katha duplex villas with modern architecture, spacious layouts, and premium lifestyle features.",
    },
    {
      q: "Are the villas developer-built?",
      a: "Yes, all villas are developed by the project authority to maintain architectural consistency, construction quality, and a premium community environment.",
    },
    {
      q: "What makes this estate a premium villa community?",
      a: "The estate combines luxury duplex villas, wide roads, green landscapes, secure gated living, community facilities, and modern lifestyle amenities.",
    },
    {
      q: "What facilities are included in the estate?",
      a: "The estate includes parks, scenic lake, sports facilities, playgrounds, community spaces, farming areas, and essential civic amenities.",
    },
    {
      q: "Are educational and healthcare facilities available?",
      a: "Yes, the estate is planned with important facilities such as school, hospital or clinic support, and other essential community services.",
    },
    {
      q: "Are religious facilities included?",
      a: "Yes, the project includes religious facilities such as mosque, mandir, and church to support an inclusive community lifestyle.",
    },
    {
      q: "What kind of road infrastructure is available?",
      a: "The project features 60 ft and 40 ft wide grand avenues, along with 25 ft residential roads for organized and comfortable connectivity.",
    },
    {
      q: "Is the project suitable for NRB buyers?",
      a: "Yes, the estate is suitable for NRBs due to developer-built villas, secure infrastructure, premium lifestyle facilities, and long-term investment potential.",
    },
    {
      q: "How is security maintained in the estate?",
      a: "Security is maintained through 24/7 CCTV surveillance, controlled entry points, and professional security personnel.",
    },
    {
      q: "Are there parks and open green spaces?",
      a: "Yes, the estate includes central parks, landscaped green zones, playgrounds, walkways, and community open spaces.",
    },
    {
      q: "Is the estate suitable for family living?",
      a: "Yes, the estate is designed for family living with secure roads, playgrounds, parks, community spaces, and essential daily facilities.",
    },
    {
      q: "Are private pools available with the villas?",
      a: "Private pools may be available as an optional luxury feature depending on villa type, plot size, and design package.",
    },
    {
      q: "What lifestyle amenities are planned?",
      a: "The estate includes lifestyle amenities such as central park, scenic lake, sports complex, community spaces, playgrounds, and green recreational areas.",
    },
    {
      q: "When will possession be handed over?",
      a: "Possession is expected between 2027 and 2028, subject to completion of payments and project development progress.",
    },
    {
      q: "Why should someone invest in this estate?",
      a: "The estate offers premium villa living, planned infrastructure, secure community lifestyle, green surroundings, and strong long-term real estate value.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            FAQ
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Everything you need to know about Rosemont Estate, villa ownership,
            facilities, security, registration, and investment value.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* FAQ Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          {/* Left Info Card */}
          <div className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-sm lg:sticky lg:top-24">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
              <FaQuestionCircle />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Need More Information?
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              Browse the most common questions about Rosemont Estate. For more
              specific project, payment, or registration details, contact our
              authorized team.
            </p>

            <div className="mt-7 space-y-4 border-t border-primary/10 pt-6">
              <SupportPoint text="Villa type and size information" />
              <SupportPoint text="Developer-built project guidance" />
              <SupportPoint text="Facilities and lifestyle details" />
              <SupportPoint text="Registration and possession support" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 shadow-lg"
                      : "border-primary/10 hover:border-primary/30"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-bold transition ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`pt-1 text-base font-bold leading-7 transition sm:text-lg ${
                          isOpen ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isOpen ? <IoRemove /> : <IoAdd />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">
                        <div className="border-t border-primary/10 pt-5">
                          <p className="text-sm leading-8 text-gray-600 sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              <FaCheckCircle />
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Information may vary based on villa type, plot size, design
              package, payment status, and project development progress. Please
              verify final details with the project authority before making any
              decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportPoint({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm font-medium text-gray-700">
      <FaCheckCircle className="mt-1 shrink-0 text-primary" />
      <span>{text}</span>
    </div>
  );
}
