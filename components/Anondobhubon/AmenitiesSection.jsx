import Image from "next/image";
import { amenities } from "@/data/anondoBhubonData";

const amenityDescriptions = {
  "Residential Clubhouse":
    "A premium social hub designed for residents to connect, relax, host gatherings and enjoy community lifestyle facilities.",
  "Communal Park":
    "Open green space planned for everyday recreation, family time, walking, seating and neighborhood interaction.",
  "Parking Courts":
    "Organized parking courts designed to support smooth mobility, safer access and a cleaner residential environment.",
  "Sports Facilities":
    "Active lifestyle zones with sports and fitness-focused amenities for residents of all age groups.",
  "Courts and Fields":
    "Dedicated outdoor courts and play fields that encourage health, recreation and community engagement.",
  "Kid's Playground":
    "Safe, colorful and family-friendly play areas designed for children’s recreation and social development.",
  "Communal Kitchen":
    "Shared community kitchen facilities planned for gatherings, events and collective neighborhood activities.",
  "Riverside Park":
    "A calm riverside destination with walking edges, seating zones and scenic open-air recreation.",
  "Meditation Area":
    "Quiet wellness pockets designed for mindfulness, relaxation and a balanced daily lifestyle.",
  "Meditation Space":
    "A peaceful green environment for personal wellness, breathing space and mental refreshment.",
  "Relaxation Zone":
    "Comfortable outdoor leisure areas designed for residents to unwind within nature-led surroundings.",
  "IT and Cyber Hub":
    "A future-ready business and technology zone supporting work, innovation, connectivity and digital lifestyle.",
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-[#F8F9FC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Urban Amenities and Facilities
            </p>
            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#2C3A83] sm:text-5xl">
            A township built for everyday rituals, wellness and community life.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            From clubhouses and sports courts to riverside walks, meditation
            decks, gardens, kitchens and play spaces, every sector is designed
            to support shared life.
          </p>
        </div>

        {/* Amenities Grid - 2 Cards Per Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {amenities.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden border border-[#5F6AA2]/20 bg-[#FFFFFF] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2C3A83]/35 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#5F6AA2]/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#2C3A83] text-sm font-bold text-[#FFFFFF]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Text Under Image */}
              <div className="p-6 sm:p-7">

                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-[#2C3A83] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-[#1F2937]/75">
                  {amenityDescriptions[item.title] ||
                    "A planned township facility designed to support comfort, convenience and community lifestyle."}
                </p>

                <div className="mt-6 border-t border-[#5F6AA2]/20 pt-5">
                  <div className="h-[3px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
