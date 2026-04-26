
// import { ListSection } from "@/components/ListSection";

import { residentialComponents } from "@/data/rosemontSite";
import { ListSection } from "./ListSection";

export default function ResidentialComponentsPage() {
  return (
    <section className="bg-[#f8f3ec] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-7 px-5 lg:grid-cols-2">
        {residentialComponents.map((section) => (
          <ListSection
            key={section.title}
            title={section.title}
            copy={section.text}
            items={section.items}
          />
        ))}
      </div>
    </section>
  );
}
