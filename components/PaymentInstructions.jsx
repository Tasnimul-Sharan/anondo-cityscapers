"use client";

import {
  FaExclamationTriangle,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaShieldAlt,
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

  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
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

        {/* Email */}
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

        {/* Contact */}
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

      {/* Payment Process */}
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
  );
}
