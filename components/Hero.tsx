"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 md:pt-28"
    >
      {/* Background */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium"
        >
          AI • Automation • Software • Cloud
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Engineering the Future of Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl"
        >
          Xornettis Solutions helps businesses grow through Artificial
          Intelligence, Business Automation, Software Development,
          Cloud Solutions and Digital Transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#services"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}