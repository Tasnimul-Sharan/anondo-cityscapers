import FramedImage from "./FramedImage";
import SectionHeader from "./SectionHeader";

export default function LifestyleSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <FramedImage
          src="/assets/riverside-park.jpg"
          alt="Riverside park along the water"
          className="aspect-[16/10]"
        />

        <div>
          <SectionHeader
            eyebrow="A new way of life"
            title="A place where the future feels calmer, healthier, and more connected"
            copy="Anondo Bhubon is a vision for green living that remains accessible to modern Dhaka. It brings family homes, wellness, mobility, civic life, and investment potential into one carefully planned address."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-canopy p-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Developer
              </p>
              <p className="mt-3 text-lg font-semibold">
                Ulukhola Sustainable Township Consortium
              </p>
            </div>

            <div className="rounded-lg bg-[#f3eadb] p-5 text-ink">
              <p className="text-sm uppercase tracking-[0.2em] text-clay">
                Head office
              </p>
              <p className="mt-3 text-lg font-semibold">
                Ulukhola, near Purbachal New Town
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
