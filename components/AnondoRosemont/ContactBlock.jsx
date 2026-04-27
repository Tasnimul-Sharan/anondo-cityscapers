export function ContactBlock() {
  return (
    <section className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid overflow-hidden border border-[#380a0a]/15 bg-white shadow-2xl shadow-[#380a0a]/15 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[#380a0a] p-7 text-white md:p-12">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em]">
              <span className="h-px w-10 bg-current" />
              Enquiries
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Become Part of Rosemont
            </h2>
            <p className="mt-6 leading-8 text-white/72">
              Contact Anondo Rosemont Estate for plot availability, villa
              specifications, booking procedures, brochure requests, and site
              visit scheduling.
            </p>
            <p className="mt-6 leading-8 text-white/72">
              Office Address: Anondo Rosemont Estate
              <br />
              Phone: +880 0000 000000
              <br />
              Email: info@anondorosemont.com
            </p>
          </div>

          <form className="grid gap-4 p-7 md:p-12">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                placeholder="Name"
                className="border border-[#380a0a]/15 bg-[#f8f3ec] px-4 py-4 outline-none focus:border-[#380a0a]"
              />
              <input
                placeholder="Phone"
                className="border border-[#380a0a]/15 bg-[#f8f3ec] px-4 py-4 outline-none focus:border-[#380a0a]"
              />
            </div>
            <input
              placeholder="Email"
              className="border border-[#380a0a]/15 bg-[#f8f3ec] px-4 py-4 outline-none focus:border-[#380a0a]"
            />
            <textarea
              placeholder="Message"
              className="min-h-[150px] resize-y border border-[#380a0a]/15 bg-[#f8f3ec] px-4 py-4 outline-none focus:border-[#380a0a]"
            />

            <button
              type="button"
              className="group inline-flex w-fit items-center gap-4 bg-[#380a0a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#241818]"
            >
              Request Brochure
              <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
