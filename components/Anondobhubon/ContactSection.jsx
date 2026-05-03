import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-ink py-20 text-white sm:py-24">
      <Image
        src="/assets/relaxation-zone.jpg"
        alt="Relaxation landscape at Anondo Bhubon"
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-ink/90" />

      <div className="site-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-lagoon">A step closer to your future</p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Join Anondo Bhubon and begin the move toward healthier urban living.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Get in touch with an expert advisor for brochure access, available
            residence types, sector planning, investment opportunities, and
            appointment scheduling.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-white/80">
            <p>info@anondobhubon.com</p>
            <p>+880-1XXXXXXXXX</p>
            <p>www.anondobhubon.com</p>
          </div>
        </div>

        <form className="rounded-lg border border-white/10 bg-white p-5 text-ink shadow-lift sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Full name
              <input
                className="mt-2 h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                name="name"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm font-semibold">
              Phone
              <input
                className="mt-2 h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                name="phone"
                placeholder="+880"
              />
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Interest
              <select
                className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                name="interest"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a residence or investment type
                </option>
                <option>Luxury villas</option>
                <option>Mid-rise apartments</option>
                <option>Condominiums</option>
                <option>Institutional or commercial partnership</option>
              </select>
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Message
              <textarea
                className="mt-2 min-h-32 w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-canopy focus:ring-2 focus:ring-canopy/15"
                name="message"
                placeholder="Tell us what you would like to explore"
              />
            </label>
          </div>

          <button className="button-primary mt-5 w-full" type="submit">
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}
