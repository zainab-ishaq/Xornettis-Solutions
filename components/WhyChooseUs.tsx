"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "AI-Powered Innovation",
    desc: "We leverage Artificial Intelligence to automate processes and unlock smarter business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security, scalable architecture, and dependable performance.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Every solution is tailored to your business goals and long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Technology that increases productivity, efficiency, and sustainable growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <Reveal>
      <section
        id="why-choose-us"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <span className="font-semibold tracking-wide text-blue-600">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Why Businesses Choose Xornettis
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We combine business strategy with modern technologies to build
              intelligent, scalable, and future-ready digital solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group rounded-2xl border bg-white p-8 shadow-sm transition"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon
                      size={32}
                      className="text-blue-600 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {item.desc}
                  </p>

                  <button className="mt-6 font-semibold text-blue-600 transition group-hover:translate-x-2">
                    Learn More →
                  </button>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </Reveal>
  );
}