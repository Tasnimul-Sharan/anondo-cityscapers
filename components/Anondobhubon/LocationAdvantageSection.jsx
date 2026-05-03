import FramedImage from "./FramedImage";
import SectionHeader from "./SectionHeader";

export default function LocationAdvantageSection() {
  const locationItems = [
    "30 minutes from Hazrat Shahjalal International Airport",
    "10 minutes from MRT-1 Depot Station",
    "Direct access via Dhaka Bypass Expressway and Purbachal Expressway",
    "Close to Bangladesh Hi-Tech Park, Purbachal CBD, and Bashundhara Residential Zone",
  ];

  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <FramedImage
          src="/assets/sectional-perspective.jpg"
          alt="Sectional perspective of the planned township"
          className="aspect-[16/9]"
        />

        <div>
          <SectionHeader
            eyebrow="Location advantage"
            title="Connected to Dhaka, buffered by water and green land"
            copy="Strategically placed east of the River Sitalakhya, Anondo Bhubon is close enough for daily access and far enough to restore air, views, and peace."
          />

          <div className="mt-7 grid gap-3">
            {locationItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-ember" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
