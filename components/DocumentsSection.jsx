import { FaRegFilePdf } from "react-icons/fa6";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import SectionBadge from "./SectionBadge";

const documents = [
  {
    name: "Booking Form",
    size: "2.97 MB",
    url: "/document/booking-form.pdf",
  },
];

export default function DocumentsSection() {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionBadge
            label="Official Documents"
            icon={<FaRegFilePdf className="text-sm" />}
          />

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Project Documents &amp; Forms
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Access official forms from Anondo Cityscapers. Select a document to
            view the PDF securely in a new browser tab.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary px-6 py-6 text-white sm:px-8">
            <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full bg-white/10" />
            <div className="relative flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl backdrop-blur-sm">
                <FiDownload />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Download Center
                </p>
                <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                  Available Documents
                </h3>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 sm:px-8">
            <div className="grid grid-cols-[1fr_auto] gap-6 border-b border-primary/10 px-1 py-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 sm:px-2">
              <span>Attachment</span>
              <span>Size</span>
            </div>

            {documents.map((document) => (
              <a
                key={document.url}
                href={document.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group my-3 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-transparent px-2 py-4 transition duration-300 hover:border-primary/15 hover:bg-primary/5 sm:gap-6 sm:px-4 sm:py-5"
                aria-label={`Open ${document.name} in a new tab`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                    <FaRegFilePdf />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-bold text-gray-900 transition group-hover:text-primary sm:text-lg">
                      {document.name}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-gray-500 sm:text-sm">
                      PDF document · Opens in a new tab
                    </span>
                  </span>
                </span>

                <span className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-gray-600 sm:gap-4 sm:text-base">
                  <span>{document.size}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10">
                    <FiArrowUpRight />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/10 bg-white/80 p-5 text-sm leading-7 text-gray-600 shadow-sm backdrop-blur-sm">
          <FaRegFilePdf className="mt-1 shrink-0 text-lg text-primary" />
          <p>
            If the document does not open automatically, please allow pop-ups
            for this website or select the document again.
          </p>
        </div>
      </div>
    </section>
  );
}
