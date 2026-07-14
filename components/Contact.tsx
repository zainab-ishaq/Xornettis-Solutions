"use client";

export default function Contact() {
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
        >
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border p-4"
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border p-4"
          />

          <button
            type="submit"
            className="rounded-xl bg-black px-8 py-4 text-white hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}