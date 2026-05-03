import { pillars } from "@/data/anondoBhubonData";
import FramedImage from "./FramedImage";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="About us"
            title="Sustainable living, inspired by nature"
            copy="Anondo Bhubon is more than a residential project. It is a vision for a healthy, community-driven lifestyle with urban access and natural calm in the same address."
          />

          <div className="mt-8 space-y-4">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="panel p-5">
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-canopy text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FramedImage
            src="/assets/lake.jpg"
            alt="Lake infrastructure inside Anondo Bhubon"
            className="aspect-[4/5] sm:translate-y-8"
          />

          <FramedImage
            src="/assets/communal-park.jpg"
            alt="Community park and pool landscape"
            className="aspect-[4/5]"
          />

          <div className="panel p-6 sm:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
              Location advantage
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-serif font-semibold text-canopy">
                  5 min
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  from Kanchan Bridge
                </p>
              </div>

              <div>
                <p className="text-3xl font-serif font-semibold text-canopy">
                  Near
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Purbachal New Town
                </p>
              </div>

              <div>
                <p className="text-3xl font-serif font-semibold text-canopy">
                  Direct
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Dhaka Bypass and Purbachal Expressway access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
