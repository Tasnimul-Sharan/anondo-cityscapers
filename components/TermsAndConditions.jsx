"use client";

import React from "react";
import {
  FaExclamationTriangle,
  FaLandmark,
  FaExchangeAlt,
  FaFileContract,
  FaGlobe,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-gray-800">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Legal Information
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Welcome to Anondo City Scapers. These Terms and Conditions outline
            the rules and regulations for using our website and services.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Terms Cards */}
        <div className="space-y-6">
          <Card icon={<FaGlobe />} title="1. Use of Website">
            <List
              items={[
                "You agree to provide accurate and up-to-date information when contacting us or making a purchase.",
                "You must use this website only for lawful purposes.",
                "You must not engage in any activity that is harmful, illegal, or disrupts the website.",
              ]}
            />
          </Card>

          <Card icon={<FaLandmark />} title="2. Products & Services">
            <List
              items={[
                "We strive to provide accurate descriptions, but we do not guarantee that all information is completely error-free.",
                "We reserve the right to modify or discontinue services at any time without prior notice.",
              ]}
            />
          </Card>

          <Card icon={<FaMoneyCheckAlt />} title="3. Payments & Billing">
            <List
              items={[
                "All payments must be made in Bangladeshi Taka (BDT) unless otherwise stated.",
                "We accept common payment methods such as bKash, Nagad, bank transfer, and cards.",
                "If a payment fails, we reserve the right to cancel or suspend the order.",
              ]}
            />
          </Card>

          <Card icon={<FaShieldAlt />} title="4. Intellectual Property">
            <Paragraph text="All content on this website including logos, text, images, and design belongs to Anondo City Scapers. You may not copy, reproduce, or use any content without written permission." />
          </Card>

          <Card
            icon={<FaExclamationTriangle />}
            title="5. Limitation of Liability"
          >
            <Paragraph text="We strive to provide high-quality service, but we are not liable for any direct or indirect damages resulting from the use of our website or services." />
          </Card>

          <Card icon={<FaExchangeAlt />} title="6. Governing Law">
            <Paragraph text="These Terms are governed by the laws of Bangladesh. Any disputes will be handled in the courts of Dhaka, Bangladesh." />
          </Card>

          <Card icon={<FaFileContract />} title="7. Changes to Terms">
            <Paragraph text="We may update these Terms and Conditions at any time. Continued use of the website means you accept the updated terms." />
          </Card>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
              <FaFileContract />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Binding Notice
              </h3>

              <p className="mt-1 text-sm leading-7 text-gray-600">
                These Terms & Conditions are binding for all users of Anondo
                City Scapers.
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
