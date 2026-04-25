"use client";
import Image from "next/image";
import { FaBuilding, FaLeaf, FaBullseye, FaHome } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <Image
            src="/about3.jpg"
            alt="about"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Transforming land into thriving communities —{" "}
            <span className="font-semibold text-gray-900">
              Anondo Cityscapers
            </span>{" "}
            creates sustainable spaces where people live, work, and grow
            together.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {/* ParkCity */}
            <div className="p-5 rounded-xl border hover:shadow-md transition">
              <FaBuilding className="text-2xl text-gray-800 mb-2" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Anondo ParkCity
              </h3>
              <p className="text-sm text-gray-600">
                A premium project by Anondo Police Family Welfare Multipurpose
                Co-operative Society.
              </p>
            </div>

            {/* Bhuban */}
            <div className="p-5 rounded-xl border hover:shadow-md transition">
              <FaLeaf className="text-2xl text-gray-800 mb-2" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Anondo Bhuban
              </h3>
              <p className="text-sm text-gray-600">
                Eco-friendly urban living near Purbachal with modern homes,
                green spaces & community amenities.
              </p>
            </div>

            {/* Rosemont Estate - FULL WIDTH */}
            <div className="p-5 rounded-xl border hover:shadow-md transition sm:col-span-2">
              <FaHome className="text-2xl text-gray-800 mb-2" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Anondo Rosemont Estate
              </h3>
              <p className="text-sm text-gray-600">
                Luxury villa community in Ulukhola near Purbachal, offering
                elegant living with nature, open spaces, and modern amenities.
              </p>
            </div>

            {/* Vision - FULL WIDTH */}
            <div className="p-5 rounded-xl border hover:shadow-md transition sm:col-span-2">
              <FaBullseye className="text-2xl text-gray-800 mb-2" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600">
                Building sustainable communities and shaping a better future —
                where modern living meets nature in harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
