import Image from "next/image";
import { amenities } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-mist py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Urban amenities and facilities"
          title="A township built for everyday rituals, not just addresses"
          copy="From clubhouses and sports courts to riverside walks, meditation decks, gardens, kitchens, and play spaces, every sector is designed to support shared life."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-lg bg-white shadow-soft ${
                index === 0 || index === 11 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={
                  index === 0 || index === 11
                    ? "relative aspect-[16/9]"
                    : "relative aspect-[4/3]"
                }
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
