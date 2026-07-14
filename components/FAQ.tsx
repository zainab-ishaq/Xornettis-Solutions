"use client";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We provide AI solutions, web development, software development, automation, cloud solutions and digital transformation.",
  },
  {
    q: "Do you build custom software?",
    a: "Yes. Every project is designed according to business requirements.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. We provide maintenance and long-term technical support.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border p-6"
            >
              <h3 className="font-semibold">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}