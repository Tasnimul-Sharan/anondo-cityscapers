import { timeline } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-mist py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Implementation timeline"
          title="A phased path from infrastructure to full smart integration"
          copy="Development is organized to establish the ground systems first, then bring homes, water landscapes, business zones, civic facilities, and full township services online."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {timeline.map((item) => (
            <article key={item.phase} className="panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">
                {item.phase}
              </p>

              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                {item.dates}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.scope}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
