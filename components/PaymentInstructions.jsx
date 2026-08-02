"use client";

import {
  FaExclamationTriangle,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaShieldAlt,
  FaGavel,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function PaymentInstructions() {
  const contactNumbers = [
    "01324412961",
    "01324412954",
    "01750180096",
    "01750180093",
  ];

  const instructions = [
    "All installment payments must be made on time.",
    "Ensure the correct payment amount is deposited.",
    "After making a payment, the receipt must be collected and preserved for future reference.",
  ];

  const rules = [
    "The price may be changed at any time without prior notice. However, once it is fixed by a Deed of Agreement, it will not be changed.",
    "Only the first 100 plots will be sold at this price.",
    "Booking/Application Money of BDT 1,00,000 (One Lakh) per plot must be paid at the time of booking.",
    "After approval of the application, the down payment (20% of the total price) must be paid within 30 days.",
    "A 5% discount will be offered for full payment made at one time.",
    'All payments must be made in favour of "Anondo Cityscapers Ltd."',
    "Failure to pay the down payment within 30 days will result in automatic cancellation of the allotment without notice.",
    "Failure to pay three installments will result in automatic cancellation of the allotment without notice.",
  ];

  return (
    <div className="mt-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Important Information */}
        <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
            <FaExclamationTriangle />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Important Notice
            </p>
            <h3 className="mt-2 text-2xl font-bold text-soft_black">
              Payment Identification Details
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-5">
          <p className="flex items-start gap-3 text-sm leading-7 text-gray-700">
            <FaInfoCircle className="mt-1 shrink-0 text-primary" />
            During remittance, your Full Name, Member Number, and Project Name
            must be clearly mentioned to properly identify the subscriber.
          </p>
        </div>

        <div className="mt-7">
          <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-soft_black">
            <FaEnvelope className="text-primary" />
            Email Address
          </h4>

          <a
            href="mailto:info@anondocityscapers.com"
            className="mt-3 inline-flex rounded-full border border-border_color bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
          >
            info@anondocityscapers.com
          </a>
        </div>
        <div className="mt-7">
          <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-soft_black">
            <FaPhoneAlt className="text-primary" />
            Contact Numbers
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {contactNumbers.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="flex items-center gap-3 rounded-2xl border border-border_color bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-white">
                  <FiPhone />
                </span>
                {num}
              </a>
            ))}
          </div>
        </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border_color bg-gradient-to-br from-white via-white to-primary/5 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-secondary/10" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-tertiary/10" />

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-xl text-secondary">
              <FaShieldAlt />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                New Member Guideline
              </p>
              <h2 className="mt-2 text-2xl font-bold text-soft_black">
                Payment & Installment Process
              </h2>
            </div>
          </div>

          <p className="mt-6 text-sm leading-8 text-gray-700">
            Before accepting a new membership application, a verification
            process is conducted. After successful verification, members are
            required to deposit a security amount along with the initial
            installment. Thereafter, regular and timely installment payments
            must be made to ensure continued membership and completion of the
            allocated property payment.
          </p>

          <div className="mt-7">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-soft_black">
              Important Instructions
            </h3>

            <ul className="mt-5 space-y-4">
              {instructions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border_color bg-white px-4 py-4 text-sm leading-7 text-gray-700 shadow-sm"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-primary/15 bg-white p-6 shadow-soft sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative">
          <div className="flex flex-col gap-5 border-b border-primary/10 pb-7 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-white shadow-lg shadow-primary/20">
              <FaGavel />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Important Information
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-soft_black sm:text-3xl">
                Rules &amp; Regulations
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600">
                Please review the following booking, payment, discount, and
                allotment conditions carefully before proceeding.
              </p>
            </div>
          </div>

          <ol className="mt-7 grid gap-4 lg:grid-cols-2">
            {rules.map((rule, index) => (
              <li
                key={rule}
                className="group flex items-start gap-4 rounded-2xl border border-border_color bg-gray-50/80 p-5 text-sm leading-7 text-gray-700 transition duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <FaExclamationTriangle className="mt-1 shrink-0 text-amber-600" />
            <p>
              Please ensure that all payment deadlines are followed to avoid
              automatic cancellation of the allotment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
