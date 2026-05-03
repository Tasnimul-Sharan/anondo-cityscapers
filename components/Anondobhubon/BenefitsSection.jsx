import { benefits } from "@/data/anondoBhubonData";
import SectionHeader from "./SectionHeader";

export default function BenefitsSection() {
  return (
    <section id="pricing" className="bg-ink py-20 text-white sm:py-24">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Core features and benefits"
            title="Designed for sustainability, security, and long-term value"
            copy="The township combines environmental systems, private security, civic services, mobility links, and community amenities into one integrated development model."
            tone="dark"
          />

          <a href="#contact" className="button-primary mt-8">
            Request advisor pricing
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
            >
              <span className="block h-1 w-10 rounded-full bg-ember" />
              <p className="mt-4 text-sm leading-7 text-white/75">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
