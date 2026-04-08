"use client";
import { FaGlobeAsia, FaHome, FaCogs } from "react-icons/fa";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full md:h-auto h-96 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/about.png"
            alt="About Us"
            width={1603}
            height={1069}
            className="object-cover w-full h-full"
          />
        </div>

        {/* English Section */}
        <div className="mt-14 text-gray-800">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary inline-block pb-2">
            About Us
          </h2>

          <h3 className="text-2xl font-semibold mb-3">
            Building Sustainable Communities, Shaping a Better Future
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Anondo Cityscapers, we believe in transforming land into
            thriving, future-ready communities where families flourish,
            businesses grow, and nature coexists in harmony.
          </p>


{/* Vision Mission Process Cards */}
<div className="mt-14">
  <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mb-10 border-b-2 border-primary inline-block pb-2">
    Our Core Values
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Vision Card */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
        <FaGlobeAsia />
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
      <p className="text-gray-600 leading-relaxed">
        Our vision is to become a pioneer in modern and sustainable real estate
        development, creating thriving communities that balance nature,
        innovation, and long-term value for generations to come.
      </p>
    </div>

    {/* Mission Card */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
        <FaHome />
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-600 leading-relaxed">
        Our mission is to design and deliver future-proof residential spaces
        where people can live in comfort, security, and harmony. We focus on
        blending modern infrastructure with natural surroundings, ensuring
        affordability, sustainability, and a true sense of belonging.
      </p>
    </div>

    {/* Process Card */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
        <FaCogs />
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Process</h3>
      <p className="text-gray-600 leading-relaxed">
        We follow a reliable process that starts with careful planning and
        sustainable development. By combining modern technology with
        eco-friendly practices, we ensure timely delivery and lasting quality.
        Our aftercare support builds long-term trust and satisfaction.
      </p>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}
