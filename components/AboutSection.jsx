"use client";
import Image from "next/image";

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
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                🏢 Anondo ParkCity
              </h3>
              <p className="text-sm text-gray-600">
                A premium project by Anondo Police Family Welfare Multipurpose
                Co-operative Society.
              </p>
            </div>

            {/* Bhuban */}
            <div className="p-5 rounded-xl border hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                🌿 Anondo Bhuban
              </h3>
              <p className="text-sm text-gray-600">
                Eco-friendly urban living near Purbachal with modern homes,
                green spaces & community amenities.
              </p>
            </div>

            {/* Vision */}
            <div className="p-5 rounded-xl border hover:shadow-md transition sm:col-span-2">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                🎯 Our Vision
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
