"use client";

import Reveal from "./Reveal";
import { Brain, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Innovation",
    description:
      "We build intelligent AI-powered solutions that automate processes and improve business efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "Our products are secure, scalable, and designed for long-term business growth.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description:
      "We help organizations embrace digital transformation with modern technologies.",
  },
];

export default function About() {
  return (
    <Reveal>
      <section id="about" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="font-semibold text-blue-600">ABOUT US</span>

            <h2 className="mt-4 text-4xl font-bold">
              Building Intelligent Digital Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Xornettis Solutions is an AI & Digital Solutions company focused
              on solving real business problems through Artificial Intelligence,
              Automation, Software Development, Cloud Technologies and Digital
              Transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <Icon size={42} className="mb-6 text-blue-600" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}