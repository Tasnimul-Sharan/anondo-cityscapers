"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Anondo Bhubon?",
      a: "Anondo Bhubon is a master-planned, eco-conscious residential township near Purbachal New Town. It combines homes, smart infrastructure, green and water networks, commercial areas, civic facilities, and community-focused amenities in one integrated environment.",
    },
    {
      q: "Where is Anondo Bhubon located, and how is it connected?",
      a: "The project is located on the east bank of the River Sitalakhya near Purbachal New Town. It is approximately 30 minutes from Hazrat Shahjalal International Airport and 10 minutes from the MRT-1 Depot Station, with access via the Dhaka Bypass Expressway and Purbachal Expressway.",
    },
    {
      q: "How is the master plan organized?",
      a: "Anondo Bhubon follows a sector-based master plan. Every 100 bighas forms a block, and four blocks form a 400-bigha sector. Each sector is planned with its own architectural identity, lifestyle focus, infrastructure, and community facilities.",
    },
    {
      q: "What types of residential properties are planned?",
      a: "The residential plan includes luxury villas, mid-rise apartments, and condominiums. These options are designed for different groups, including families, professionals, returning expatriates, government and NGO officials, and corporate residents.",
    },
    {
      q: "What features are planned for the luxury villas?",
      a: "Luxury villas are planned on generous plots with private gardens and pools. Proposed features include 4-6 bedrooms, private terraces, double-height ceilings, rooftop solar readiness, energy-efficient architecture, smart-home technology, lakeside access, and a private clubhouse.",
    },
    {
      q: "What will the mid-rise apartments offer?",
      a: "The mid-rise residential blocks are planned as 4-7 story buildings with 2-4 bedroom units, elevators, underground parking, rooftop gardens, shared courtyards, and mini parks. They are intended to remain close to schools, clinics, shopping, and other daily services.",
    },
    {
      q: "What facilities are planned for the condominiums?",
      a: "Condominium buildings are planned to rise up to 10 stories and offer 1-3 bedroom suites. Proposed facilities include rooftop lounges, co-working spaces, mixed-use podiums with cafes, groceries and daycare, and convenient access to transit and IT business districts.",
    },
    {
      q: "How will the artificial river, lake, and canal network function?",
      a: "A central artificial river connected to the River Sitalakhya is planned to circulate water through the township. The central lake will serve as a stormwater reservoir and leisure hub, while the canal network is designed to support rainwater harvesting, flood control, irrigation, drainage, beautification, and habitat restoration.",
    },
    {
      q: "What is special about the forest walkway and green zones?",
      a: "The plan includes a 3-kilometer forest walkway with native trees, fitness areas, solar lighting, rest decks, meditation pavilions, edible gardens, butterfly sanctuaries, and nature-education signage. Blocks will also include green buffers, orchards, and herb gardens.",
    },
    {
      q: "What everyday amenities will be available within the community?",
      a: "Each block is planned with a community park, playground, religious facility, mini market, waste-management point, and security post. Sector-level plans include community gathering spaces, open-air theatres, picnic lawns, farming plots, stadiums, transit facilities, and commercial services.",
    },
    {
      q: "What education, healthcare, and civic facilities are planned?",
      a: "The brochure proposes primary schools, daycares, tutoring centers, a central modern hospital, sector-level clinics, mobile emergency units, and telehealth services. Civic infrastructure includes police outposts, fire stations, surveillance hubs, and underground utility corridors.",
    },
    {
      q: "Will the township include religious and cultural spaces?",
      a: "Yes. The plan includes mosques in every sector, temples and churches where population permits, interfaith prayer halls, and cultural centers for arts, music, and drama.",
    },
    {
      q: "What commercial and employment zones are proposed?",
      a: "Anondo Bhubon plans a dedicated IT and Cyber Business Hub with high-speed fiber connectivity, co-working spaces, startup support, and green-certified offices. Commercial plans also include sector markets, shopping centers, a mega mall, food courts, organic-produce areas, and handicraft markets.",
    },
    {
      q: "What transport and mobility options are planned?",
      a: "The mobility plan includes wide arterial roads, pedestrian promenades, bicycle lanes, internal bus terminals, shuttle loops, bicycle sharing, e-scooter lanes, and a logistics hub. MRT-1 connectivity expansion and water-taxi terminals are identified as planned future options.",
    },
    {
      q: "How is security planned for Anondo Bhubon?",
      a: "The township is designed as a gated smart community with 24/7 CCTV coverage, AI-assisted monitoring, trained in-house security teams, visitor-management systems, RFID access in condominiums, and emergency-response networks with community alerts.",
    },
    {
      q: "What sustainability measures are included?",
      a: "The brochure states that 40%-50% of the land is reserved for green, water, and open infrastructure. Planned measures include solar lighting, future solar farms, wastewater recycling, rainwater harvesting, low-carbon materials, smart waste segregation, EV charging, and renewable-ready utilities.",
    },
    {
      q: "What lifestyle and wellness facilities are planned?",
      a: "Planned facilities include yoga and meditation gardens, wellness centers, spa clinics, swimming and hydrotherapy zones, football, cricket, tennis and volleyball facilities, social clubs, senior zones, reading cafes, community farming, gardening, and artisan workshops.",
    },
    {
      q: "Who may consider Anondo Bhubon as an investment opportunity?",
      a: "The brochure identifies opportunities for residential investors, NRBs, expatriates, government officers, institutional investors in malls, hospitals and schools, partners in IT and co-working zones, and organizations interested in community housing. Any investment decision should be based on independent legal and financial verification.",
    },
    {
      q: "Is Anondo Bhubon suitable for NRBs and returning expatriates?",
      a: "Yes. The brochure identifies NRBs and expatriates among the project's intended residential investors and describes the Luxury Villas Block as suitable for returning expatriates and families seeking secure, eco-conscious living. Buyers can also explore the planned apartment and condominium options according to their needs.",
    },
    {
      q: "What should an NRB verify before investing in Anondo Bhubon?",
      a: "Before investing from abroad, an NRB should verify the latest land title and mutation records, relevant approvals, current availability and pricing, payment and remittance procedures, registration requirements, applicable taxes and fees, and the updated development timeline directly with the project authority and independent legal advisers.",
    },
    {
      q: "What does the brochure say about legal and regulatory compliance?",
      a: "According to the brochure, development approvals involve relevant RAJUK and Department of Environment authorities; zoning, FAR, EIA and utility permissions are either in process or cleared; environmental and flood-resilience studies have been conducted; and land registration and mutation are complete. Buyers should verify the latest documents directly with the project authority and relevant agencies.",
    },
    {
      q: "What is the proposed project implementation timeline?",
      a: "The brochure presents four phases: roads, utilities and canals during 2026; luxury villas, the forest walkway and lake during 2027; condominiums, the IT park and civic facilities during 2028-2029; and schools, hospitals, malls and full smart integration from 2030 onward. These are proposed timeframes and should be reconfirmed with the developer.",
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
          <SectionBadge
            label="FAQ"
            icon={<HiOutlineQuestionMarkCircle className="text-base" />}
          />

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Explore the most important information about Anondo Bhubon,
            including its location, master plan, homes, facilities,
            sustainability, security, investment potential, and timeline.
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
              These answers summarize the Anondo Bhubon brochure. For current
              pricing, availability, approvals, payment, or registration
              details, please contact the authorized project team.
            </p>

            <div className="mt-7 space-y-4 border-t border-primary/10 pt-6">
              <SupportPoint text="Location and connectivity overview" />
              <SupportPoint text="Residential and master-plan details" />
              <SupportPoint text="Facilities and sustainability features" />
              <SupportPoint text="Legal, investment, and timeline guidance" />
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
              This page is a summary of the supplied brochure. Planned
              facilities, approvals, specifications, availability, and
              timelines may change. Please verify the latest official documents
              with the project authority before making any decision.
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
