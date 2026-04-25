"use client";

export default function HeroLuxury() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Luxury Villa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay (IMPORTANT: not dark) */}
      <div className="absolute inset-0 bg-white/40 backdrop-brightness-90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Small Top Text */}
          <p className="text-sm text-gray-700 mb-4">Anondo Rosemont Estate</p>

          {/* Main Heading (blue stroke effect) */}
          <h1 className="text-4xl md:text-6xl font-bold text-transparent stroke-text mb-4">
            Where Elegance Becomes Heritage
          </h1>

          {/* Sub Heading */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
            Where the Hills Whisper and Roses Welcome You Home
          </h2>

          {/* Tagline */}
          <p className="text-gray-700 mb-2 italic">
            Elegantia in Aeternum — Elegance Forever
          </p>

          <p className="text-gray-700 mb-6">
            A Signature Duplex Township by Anondo Rosemont Estate under Anondo
            CityScappers Ltd.
          </p>

          {/* Description */}
          <p className="text-gray-800 mb-6 leading-relaxed">
            Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
            township redefining structured luxury living in Bangladesh. A
            disciplined, architect-controlled community where villas meet
            vision.
          </p>

          {/* Location */}
          <p className="text-gray-700 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Ulukhola | South of Turag River | Near Purbachal New Town
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1f4f78] text-white px-6 py-3 rounded-md font-medium">
              Explore Rosemont Estate
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-md backdrop-blur-sm bg-white/20">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for stroke */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #1f4f78;
        }
      `}</style>
    </section>
  );
}
