import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden bg-ink pt-16 text-white"
    >
      <Image
        src="/forest-walkway.png"
        alt="Anondo Bhubon hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,34,0.88),rgba(6,24,34,0.62)_30%,rgba(6,24,34,0.18)_60%,rgba(6,24,34,0.08)),linear-gradient(180deg,rgba(6,24,34,0.18),rgba(6,24,34,0.72))]" />

      {/* Top light effect */}
      {/* <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-r from-sky-700/50 via-cyan-500/20 to-white/10" /> */}

      <div className="site-shell relative z-10 flex min-h-[calc(92vh-4rem)] items-center">
        <div className="max-w-4xl py-16">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            🌿 Bangladesh&apos;s eco-conscious township
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Anondo Bhubon
          </h1>

          <p className="mt-4 max-w-3xl text-xl font-medium text-white/90 sm:text-2xl lg:text-3xl">
            A New Horizon in Eco-Friendly Urban Living
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Discover Bangladesh&apos;s first eco-conscious township — where
            nature, wellness, and modern living exist in harmony.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-md bg-[#2E3F95] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              href="#contact"
            >
              Download Brochure
            </a>

            <a
              className="inline-flex items-center justify-center rounded-md bg-[#F59A1B] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              href="#pricing"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
