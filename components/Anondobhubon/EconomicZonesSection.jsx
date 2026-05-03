import { investmentPaths } from "@/data/anondoBhubonData";
import FramedImage from "./FramedImage";
import SectionHeader from "./SectionHeader";

export default function EconomicZonesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Commercial and economic zones"
            title="A self-sufficient lifestyle ecosystem with its own knowledge economy"
            copy="Anondo Bhubon integrates IT parks, green-certified offices, daily markets, civic services, logistics, and transit support into the same township framework."
          />

          <div className="mt-8 grid gap-4">
            {investmentPaths.map((item) => (
              <article key={item.name} className="panel p-5">
                <h3 className="text-lg font-semibold text-canopy">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <FramedImage
          src="/assets/it-hub.jpg"
          alt="IT and cyber business hub"
          className="aspect-[4/3]"
        />
      </div>
    </section>
  );
}
