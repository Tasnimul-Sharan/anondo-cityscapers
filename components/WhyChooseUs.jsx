"use client";

import { motion } from "framer-motion";
import { FaCity, FaShieldAlt, FaUsers, FaRocket } from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import { HiOutlinePhone } from "react-icons/hi";

const features = [
  {
    icon: <FaRocket />,
    title: "Future-Proof",
    desc: "Modern planning and infrastructure designed for long-term value and sustainability.",
  },
  {
    icon: <FaCity />,
    title: "Residence",
    desc: "Carefully planned residential environment ensuring comfort, elegance, and privacy.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    desc: "A vibrant and secure community where families grow and connect.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trustworthy",
    desc: "Reliable development backed by transparency, quality, and long-term commitment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionBadge
            label="Contact Us"
            icon={<HiOutlinePhone className="text-base" />}
          />

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Built for Better Living
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            We deliver more than just land — we create sustainable, future-ready
            communities built on trust and excellence.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-primary" />
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl p-[1px] shadow-sm"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gray-200 transition duration-700 group-hover:bg-transparent" />

              <div className="absolute -inset-20 rounded-3xl bg-[conic-gradient(from_0deg,transparent_0deg,transparent_80deg,var(--tw-gradient-from)_120deg,transparent_180deg,transparent_360deg)] from-primary opacity-0 transition-opacity duration-700 group-hover:animate-[spin_4s_linear_infinite] group-hover:opacity-100" />

              {/* Card Inner */}
              <div className="relative h-full rounded-[1.45rem] bg-white p-7 text-center transition duration-300 group-hover:shadow-lg">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition duration-500 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.desc}
                </p>

                {/* Small Line */}
                <div className="mx-auto mt-6 h-[2px] w-10 rounded-full bg-primary/30 transition-all duration-700 group-hover:w-16 group-hover:bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
