"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function OfficeMapSection() {
  const address =
    "Printers Building, 5 Rajuk Avenue, Motijheel, Dhaka, Bangladesh";

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=16&output=embed`;

  const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address,
  )}`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="custom-container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Our Location
            </p>

            <span className="h-[2px] w-10 bg-[#F48220]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Visit Our Corporate Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#1F2937]/70">
            We are located at the heart of Motijheel, Dhaka — easily accessible
            from major commercial and business points of the city.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          {/* Info Card */}
          <div className="border border-[#E5E7EB] bg-[#F8F9FC] p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-gray-900 text-white">
              <FaMapMarkerAlt />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Printers Building
            </h3>

            <p className="mt-3 text-base leading-7 text-[#1F2937]/70">
              12–13th Floor, 5 Rajuk Avenue, Motijheel, Dhaka, Bangladesh.
            </p>

            <div className="mt-8 space-y-5 border-t border-[#E5E7EB] pt-6">
              <div className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-white text-gray-900">
                  <FaClock />
                </span>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Office Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#1F2937]/65">
                    Saturday – Thursday, 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-white text-gray-900">
                  <FaPhoneAlt />
                </span>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Contact Support
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#1F2937]/65">
                    Reach us for project information, appointment, and customer
                    assistance.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center bg-gray-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#F48220]"
            >
              Get Direction
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden border border-[#E5E7EB] bg-white p-3">
            <iframe
              title="Printers Building Location Map"
              src={mapSrc}
              className="h-[480px] w-full border-0 md:h-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
