"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/slider/slider1.jpg",
    title: "Anondo Rosemont Estate",
    desc: "A premium 807-bigha duplex villa township redefining structured luxury living in Bangladesh.",
    slug: "rosemont-estate",
  },
  {
    img: "/slider/slider2.jpg",
    title: "Anondo Park City",
    desc: "Smart and sustainable gated community in Purbachal with modern amenities and eco-friendly design.",
    slug: "park-city",
  },
  {
    img: "/slider/slider3.jpg",
    title: "Anondo Bhubon",
    desc: "Eco-conscious township blending nature, wellness, and modern urban living.",
    slug: "anondo-bhubon",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Projects</h2>
        <div className="w-20 h-[3px] bg-primary mx-auto"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Discover our signature developments designed with vision, elegance,
          and long-term value.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 bg-white"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {project.desc}
              </p>

              <Link href={`/projects/${project.slug}`}>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
