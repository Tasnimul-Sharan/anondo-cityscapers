"use client";

import React from "react";
import {
  FaUserShield,
  FaDatabase,
  FaCogs,
  FaShareAlt,
  FaLock,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function PrivacyPolicyPageSection() {
  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-gray-800">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionBadge
            label="Privacy & Data Protection"
            icon={<FaUserShield className="text-sm" />}
          />

          <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            At Anondo City Scapers, we respect your privacy and are committed to
            protecting your personal information. This page explains how we
            collect, use, and safeguard your data.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          <Card icon={<FaDatabase />} title="1. Information We Collect">
            <List
              items={[
                "Personal Details: Name, email address, phone number, and address when you contact us or request services.",
                "Payment Information: Billing details processed securely through trusted partners like bKash, Nagad, bank transfer, or card services.",
                "Website Data: Anonymous usage data such as browser type, device information, and visited pages to improve our services.",
              ]}
            />
          </Card>

          <Card icon={<FaCogs />} title="2. How We Use Your Information">
            <List
              items={[
                "To process service requests, inquiries, orders, and customer communication.",
                "To respond to inquiries and provide customer support.",
                "To send important updates, offers, or service-related notifications when applicable.",
              ]}
            />
          </Card>

          <Card icon={<FaShareAlt />} title="3. Information Sharing">
            <List
              items={[
                "We do not sell your personal data to third parties.",
                "We may share necessary information with trusted partners such as payment gateways or service providers.",
                "We may disclose information if required by law, regulatory authorities, or legal process in Bangladesh.",
              ]}
            />
          </Card>

          <Card icon={<FaLock />} title="4. Data Security">
            <Paragraph text="We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, misuse, or disclosure. However, no online system can be guaranteed 100% secure." />
          </Card>

          <Card icon={<FaCheckCircle />} title="5. Your Rights">
            <List
              items={[
                "You may request access to the personal data we hold about you.",
                "You may request correction or deletion of your personal information.",
                "You may unsubscribe from marketing communications at any time.",
              ]}
            />
          </Card>

          <Card icon={<FaUserShield />} title="6. Contact Us">
            <div className="space-y-5">
              <p className="text-sm leading-8 text-gray-600 sm:text-base">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <ContactItem
                  icon={<FaPhoneAlt />}
                  label="Phone"
                  value="+880 1318-252050"
                  href="tel:+8801318252050"
                />

                <ContactItem
                  icon={<FaEnvelope />}
                  label="Email"
                  value="info@anondocityscapers.com"
                  href="mailto:info@anondocityscapers.com"
                />

                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  label="Address"
                  value="Motijheel, Dhaka 1000, Bangladesh"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
              <FaUserShield />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Privacy Commitment
              </h3>

              <p className="mt-1 text-sm leading-7 text-gray-600">
                Your privacy is important to us. We are committed to protecting
                your data with transparency, responsibility, and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Components */

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-8">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
          {icon}
        </div>

        <h2 className="pt-2 text-xl font-bold tracking-[-0.02em] text-gray-900 md:text-2xl">
          {title}
        </h2>
      </div>

      <div>{children}</div>
    </div>
  );
}

function Paragraph({ text }) {
  return <p className="text-sm leading-8 text-gray-600 sm:text-base">{text}</p>;
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm leading-7 text-gray-600 sm:text-base"
        >
          <FaCheckCircle className="mt-1 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="h-full rounded-2xl border border-primary/10 bg-primary/5 p-5 transition hover:border-primary/30 hover:bg-white">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
        {icon}
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium leading-6 text-gray-700">
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}
