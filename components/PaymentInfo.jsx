"use client";

import { useState } from "react";
import { FaBuildingColumns, FaRegCopy, FaCheck } from "react-icons/fa6";
import PaymentInstructions from "./PaymentInstructions";
import SectionBadge from "./SectionBadge";

export default function PaymentInfo() {
  const [copied, setCopied] = useState("");

  const cityscapersBanks = [
    {
      sl: "01",
      bank: "Sonali Bank PLC",
      branch: "Nagar Bhaban Branch, Dhaka",
      accountName: "Anondo Cityscapers Ltd.",
      accountNo: "1623803000066",
      swift: "BSONBDDH",
      routing: "200274573",
    },
    {
      sl: "02",
      bank: "Janata Bank PLC",
      branch: "Nagar Bhaban Branch, Dhaka",
      accountName: "Anondo Cityscapers Ltd.",
      accountNo: "0100281648840",
      swift: "JANBBDDHKRN",
      routing: "135274572",
    },
  ];

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);

    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <section className="bg-off_white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge
            label="Payment Guidelines"
            icon={<FaBuildingColumns className="text-sm" />}
          />

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-soft_black sm:text-4xl lg:text-5xl">
            Payment Guidelines &amp;{" "}
            <span className="text-primary">Important Information</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Review the payment process, booking requirements, installment
            instructions, rules and regulations, and contact information before
            proceeding with your application.
          </p>
        </div>

        {/* Bank Cards */}
        {/* <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cityscapersBanks.map((bank) => (
            <div
              key={bank.sl}
              className="group overflow-hidden rounded-3xl border border-border_color bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative bg-gradient-to-br from-primary via-primary to-secondary p-6 text-white">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-white/10" />

                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                      Bank Account {bank.sl}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">{bank.bank}</h2>
                    <p className="mt-2 text-sm text-white/80">{bank.branch}</p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
                    <FaBuildingColumns />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <InfoRow label="Account Name" value={bank.accountName} />

                  <CopyRow
                    label="Account No"
                    value={bank.accountNo}
                    copied={copied}
                    onCopy={handleCopy}
                  />

                  <CopyRow
                    label="Swift Code"
                    value={bank.swift}
                    copied={copied}
                    onCopy={handleCopy}
                  />

                  <CopyRow
                    label="Routing No"
                    value={bank.routing}
                    copied={copied}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <PaymentInstructions />
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl border border-border_color bg-gray-50 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-soft_black">{value}</p>
    </div>
  );
}

function CopyRow({ label, value, copied, onCopy }) {
  const isCopied = copied === value;

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border_color bg-gray-50 px-4 py-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-soft_black">{value}</p>
      </div>

      <button
        type="button"
        onClick={() => onCopy(value)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
        aria-label={`Copy ${label}`}
      >
        {isCopied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </div>
  );
}
