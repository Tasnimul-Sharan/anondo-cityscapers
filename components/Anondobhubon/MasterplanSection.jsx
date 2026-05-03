import Image from "next/image";
import { planItems } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function MasterplanSection() {
  return (
    <section id="masterplan" className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Master plan framework"
          title="A sector-based smart community organized around water, shade, and civic life"
          copy="Every 100 bighas form a block. Four blocks form a sector, allowing the township to grow in distinct lifestyle zones while staying connected by a unified green and blue network."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {planItems.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? "panel overflow-hidden lg:col-span-2 lg:row-span-2"
                  : "panel overflow-hidden"
              }
            >
              <div
                className={
                  index === 0
                    ? "relative aspect-[16/10]"
                    : "relative aspect-[4/3]"
                }
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
