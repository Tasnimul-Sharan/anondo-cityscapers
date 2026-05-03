import Image from "next/image";
import { infrastructure } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function InfrastructureSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Green and blue infrastructure"
          title="Water systems, forest routes, and calm streets form the township backbone"
          copy="The plan uses artificial rivers, canals, lakes, shaded walkways, and road architecture as daily amenities and as practical environmental systems."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {infrastructure.map((item) => (
            <article key={item.title} className="panel overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
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
