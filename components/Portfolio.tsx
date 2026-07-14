"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Customer Support",
    category: "Artificial Intelligence",
    description:
      "An intelligent chatbot that automates customer queries and improves response times.",
    technologies: ["Next.js", "OpenAI", "FastAPI"],
  },
  {
    title: "Healthcare Platform",
    category: "Healthcare",
    description:
      "Secure cloud-based healthcare management system for hospitals and clinics.",
    technologies: ["React", "Firebase", "TypeScript"],
  },
  {
    title: "Business Analytics Dashboard",
    category: "Business Intelligence",
    description:
      "Real-time analytics dashboard with KPIs, reports and business insights.",
    technologies: ["Next.js", "Python", "Chart.js"],
  },
];

export default function Portfolio() {
  return (
    
      <section id="portfolio" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold tracking-wide text-blue-600">
              PORTFOLIO
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Explore some of our innovative digital solutions built for modern
              businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex h-60 items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6">
                  <h3 className="text-center text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="p-8">
                  <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {project.category}
                  </span>

                  <p className="mt-6 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:translate-x-2">
                    View Case Study
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
  );
}