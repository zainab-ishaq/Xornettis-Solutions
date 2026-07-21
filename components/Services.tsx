"use client";

import {
  Bot,
  Code2,
  Globe,
  Cloud,
  Smartphone,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Custom AI applications, automation and intelligent business solutions.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Scalable web applications and enterprise software tailored to your business.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, responsive and SEO-optimized websites using modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with premium user experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment and infrastructure optimization.",
  },
  {
    icon: Database,
    title: "Business Automation",
    description:
      "Automate repetitive tasks and improve operational efficiency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="font-semibold text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Digital Solutions That Drive Growth
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            We provide AI-powered digital solutions that help businesses
            innovate, automate and scale with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <Icon
                  size={44}
                  className="mb-6 text-blue-600"
                />

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}