"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "❌ Failed to send message.");
      }
    } catch {
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="font-semibold text-blue-600">
          CONTACT
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Let&apos;s Build Something Amazing
        </h2>

        <p className="mt-5 text-gray-600">
          Have an idea or business challenge? We&apos;d love to hear from you.
        </p>

        <form
          id="contact-form"
          className="mt-10 space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border p-4"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-4"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border p-4"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-black px-8 py-4 text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="pt-2 text-center text-sm font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}