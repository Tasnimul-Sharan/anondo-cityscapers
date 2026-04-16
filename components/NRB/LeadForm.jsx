"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
    };

    try {
      await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Submitted successfully!");
      e.target.reset();
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 text-white py-3 rounded-lg"
      >
        {loading ? "Submitting..." : "Book Now"}
      </button>
    </form>
  );
}
