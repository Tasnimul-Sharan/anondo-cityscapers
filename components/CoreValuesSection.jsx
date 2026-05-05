"use client";

import { FaGlobeAsia, FaHome, FaCogs } from "react-icons/fa";

export default function CoreValuesSection() {
  const values = [
    {
      icon: <FaGlobeAsia />,
      label: "01",
      title: "Our Vision",
      desc: "Our vision is to become a pioneer in modern and sustainable real estate development, creating thriving communities that balance nature, innovation, and long-term value for generations to come.",
    },
    {
      icon: <FaHome />,
      label: "02",
      title: "Our Mission",
      desc: "Our mission is to design and deliver future-proof residential spaces where people can live in comfort, security, and harmony. We focus on blending modern infrastructure with natural surroundings, ensuring sustainability and a true sense of belonging.",
    },
    {
      icon: <FaCogs />,
      label: "03",
      title: "Our Process",
      desc: "We follow a reliable process that starts with careful planning and sustainable development. By combining modern technology with eco-friendly practices, we ensure timely delivery, lasting quality, and long-term customer trust.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/50 to-blue-50/40 px-6 py-24">
      {/* Decorative Background */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Our Foundation
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Our Core Values
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Our values guide every decision we make — from planning and
            development to delivery and long-term customer satisfaction.
          </p>
          <div className="mx-auto mt-7 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white p-8 shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Top Number */}
              <div className="absolute right-7 top-6 text-6xl font-black text-gray-100 transition-all duration-500 group-hover:text-primary/10">
                {item.label}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">{item.desc}</p>

                <div className="mt-auto pt-8">
                  <div className="h-1.5 w-16 rounded-full bg-primary/20 transition-all duration-500 group-hover:w-28 group-hover:bg-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
