"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Bot,
  GitBranch,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

const technologies = [
  {
    title: "Next.js",
    icon: Globe,
    color: "bg-blue-100",
  },
  {
    title: "React",
    icon: Code2,
    color: "bg-cyan-100",
  },
  {
    title: "TypeScript",
    icon: Cpu,
    color: "bg-indigo-100",
  },
  {
    title: "Python",
    icon: Bot,
    color: "bg-yellow-100",
  },
  {
    title: "FastAPI",
    icon: Server,
    color: "bg-green-100",
  },
  {
    title: "Firebase",
    icon: Database,
    color: "bg-orange-100",
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "bg-sky-100",
  },
  {
    title: "GitHub",
    icon: GitBranch,
    color: "bg-gray-100",
  },
];

export default function Technologies() {
  return (
    <Reveal>
      <section id="technologies"></section>
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <span className="font-semibold tracking-wide text-blue-600">
              TECHNOLOGIES
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Modern Technology Stack
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We build scalable digital products using modern technologies trusted
              by startups and enterprises worldwide.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:shadow-xl"
                >
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${tech.color} transition group-hover:bg-blue-600`}
                  >
                    <Icon
                      size={32}
                      className="text-blue-600 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold">
                    {tech.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </Reveal>
  );
}