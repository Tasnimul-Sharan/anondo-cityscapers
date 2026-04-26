import { storySections } from "@/data/rosemontSite";

export function ContentSections( ) {
  return (
    <div className="grid gap-7">
      {storySections.map((section) => (
        <section
          key={section.title}
          className="group border border-[#380a0a]/15 bg-white/75 p-7 shadow-xl shadow-[#380a0a]/10 md:p-10 lg:p-12"
        >
          <span className="mb-8 block h-px w-20 origin-left scale-x-[0.35] bg-[#380a0a] transition-transform duration-700 group-hover:scale-x-100" />

          <h2 className="text-2xl font-semibold leading-tight text-[#380a0a] md:text-4xl">
            {section.title}
          </h2>

          <div className="mt-6 grid gap-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[#6b5d57]">
                {paragraph}
              </p>
            ))}
          </div>

          {section.bullets && (
            <ul className="mt-6 grid gap-3">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 leading-8 text-[#6b5d57]"
                >
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 bg-[#380a0a]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.signature && (
            <p className="mt-6 font-extrabold text-[#380a0a]">
              {section.signature}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}
