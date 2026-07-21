"use client";


import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "Understanding your business, goals and challenges.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    desc: "Creating a clear roadmap with timelines and milestones.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Designing intuitive and engaging user experiences.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Building scalable, secure and high-performance solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    desc: "Ensuring quality through rigorous testing and optimization.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Deploying, monitoring and providing continuous support.",
  },
];

export default function Process() {
  return (
    
      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <span className="font-semibold tracking-wide text-blue-600">
              OUR PROCESS
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              How We Work
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Every successful project follows a structured process that keeps
              quality, transparency and business value at the center.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative rounded-2xl border bg-slate-50 p-8 shadow-sm transition hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon
                      size={32}
                      className="text-blue-600 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    
  );
}