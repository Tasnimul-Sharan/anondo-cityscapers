"use client";

import Image from "next/image";
import { FaGlobeAsia, FaHome, FaCogs, FaCity } from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function AboutUsSection() {
  const highlights = [
    {
      icon: <FaGlobeAsia />,
      title: "Sustainable Vision",
      desc: "Eco-friendly planning with long-term community value.",
    },
    {
      icon: <FaHome />,
      title: "Modern Living",
      desc: "Thoughtfully designed spaces for families and businesses.",
    },
    {
      icon: <FaCogs />,
      title: "Smart Infrastructure",
      desc: "Future-ready facilities, roads, security, and utilities.",
    },
  ];

  const stats = [
    { number: "2007", label: "Established" },
    { number: "100%", label: "Client Focused" },
    { number: "Future", label: "Ready Projects" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 py-20 px-6">
      {/* Background Decorative Shape */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionBadge
            label="About Anondo Cityscapers"
            icon={<FaCity className="text-sm" />}
          />

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Building Sustainable Communities, Shaping a Better Future
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We transform land into thoughtfully planned, future-ready
            communities where families thrive, businesses grow, and nature
            blends beautifully with modern development.
          </p>
          <div className="mx-auto mt-7 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-3xl border-2 border-primary/20 md:block" />

            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-200">
              <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] md:h-[520px]">
                <Image
                  src="/about-page.jpg"
                  alt="About Anondo Cityscapers"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-lg backdrop-blur-md">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Our Commitment
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    Transparency, reliability, and long-term value.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-bold leading-snug text-gray-900 md:text-4xl">
              Creating places where lifestyle, investment, and nature come
              together.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>
                At{" "}
                <span className="font-semibold text-gray-900">
                  Anondo Cityscapers
                </span>
                , we are committed to transforming land into thoughtfully
                planned communities that offer more than just living spaces. Our
                goal is to create environments where families can thrive,
                businesses can grow, and nature can exist in harmony with modern
                development.
              </p>

              <p>
                With a strong focus on innovation, sustainability, and long-term
                value, we carefully design each project to meet the evolving
                needs of modern lifestyles. From well-planned road networks and
                green landscapes to smart infrastructure and essential
                facilities, every element is crafted to ensure comfort,
                security, and convenience.
              </p>

              <p>
                We believe real estate is not just about buying land — it is
                about building a secure future. That is why transparency,
                reliability, and customer satisfaction remain at the center of
                everything we do.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
                >
                  <h4 className="text-xl font-bold text-primary md:text-2xl">
                    {item.number}
                  </h4>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>

              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
