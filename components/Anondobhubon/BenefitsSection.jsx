import { benefits } from "@/data/anondoBhubonData";

export default function BenefitsSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#2C3A83] py-20 text-[#FFFFFF] sm:py-24 lg:py-28"
    >
      <div className="site-shell relative">
        {/* Section Header */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFFFFF]/75">
                Core Features and Benefits
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#FFFFFF] sm:text-5xl">
              Designed for sustainability, security and long-term value.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-medium leading-8 text-[#FFFFFF]/70 lg:justify-self-end">
            The township combines environmental systems, private security, civic
            services, mobility links and community amenities into one integrated
            development model.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          {/* Left CTA Card */}
          <div className="flex flex-col justify-between border border-[#FFFFFF]/15 bg-[#FFFFFF]/8 p-7 backdrop-blur-sm sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                Advisory Support
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#FFFFFF]">
                Explore pricing, availability and investment opportunities.
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-[#FFFFFF]/70">
                Connect with an advisor to understand residence options,
                development phases, sector planning and long-term value
                potential.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#F48220] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#2C3A83]"
              >
                Request Advisor Pricing
              </a>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit}
                className="group border border-[#FFFFFF]/15 bg-[#FFFFFF] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F48220]/60 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#2C3A83] text-sm font-bold text-[#FFFFFF] transition duration-300 group-hover:bg-[#F48220]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[#1F2937]/80">
                      {benefit}
                    </p>

                    <span className="mt-5 block h-[3px] w-10 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
