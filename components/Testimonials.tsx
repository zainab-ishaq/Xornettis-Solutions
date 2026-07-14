"use client";

const testimonials = [
  {
    name: "Sarah Ahmed",
    company: "TechNova",
    review:
      "Xornettis Solutions transformed our business with intelligent automation and excellent support.",
  },
  {
    name: "Ali Khan",
    company: "Next Commerce",
    review:
      "Professional team, modern technology and outstanding communication throughout the project.",
  },
  {
    name: "John Williams",
    company: "Digital Hub",
    review:
      "Highly recommended for AI and software solutions. The quality exceeded our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <p className="text-gray-600">&ldquo;{item.review}&rdquo;</p>

              <div className="mt-6">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}