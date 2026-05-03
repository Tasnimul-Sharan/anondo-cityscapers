import Image from "next/image";
import { residences } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function ResidencesSection() {
  return (
    <section id="residences" className="bg-ink py-20 text-white sm:py-24">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Residential components"
          title="Homes for privacy, family growth, and efficient city living"
          copy="Luxury villas, mid-rise apartments, and condominiums are placed as distinct neighborhoods with shared access to parks, canals, civic amenities, and transit."
          align="center"
          tone="dark"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {residences.map((home) => (
            <article
              key={home.title}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={home.image}
                  alt={home.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">
                  {home.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {home.audience}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  {home.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
