"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Speed & Quality",
    description: "We move fast without compromising on quality. Rapid iteration meets pixel-perfect execution.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "True Partnership",
    description: "We embed with your team. Your goals become our goals. We succeed when you succeed.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation-Driven",
    description: "We leverage cutting-edge technology to build solutions that stand the test of time.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              We turn ambitious ideas into{" "}
              <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
                shipped products
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              We're a team of designers, engineers, and strategists who believe
              the best digital products come from close collaboration. We don't
              just build software — we build relationships and craft experiences
              that drive real results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-lg text-gray-600 leading-relaxed"
            >
              From early-stage startups to established enterprises, we've helped
              teams across industries bring their boldest ideas to life.
            </motion.p>
          </div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500 via-brand-400 to-brand-600 p-1">
              <div className="h-full w-full rounded-[calc(1.5rem-4px)] bg-white p-8 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-16 rounded-full bg-brand-100" />
                      <div className="h-3 w-24 rounded-full bg-gray-100" />
                    </div>
                    <div className="h-12 w-full rounded-xl bg-gradient-to-r from-brand-50 to-brand-100" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-lg bg-brand-50" />
                      <div className="h-20 rounded-lg bg-gray-50" />
                      <div className="h-20 rounded-lg bg-brand-50" />
                    </div>
                    <div className="h-8 w-32 rounded-full bg-brand-500" />
                    <div className="space-y-2 mt-4">
                      <div className="h-2 w-full rounded-full bg-gray-100" />
                      <div className="h-2 w-3/4 rounded-full bg-gray-100" />
                      <div className="h-2 w-5/6 rounded-full bg-gray-100" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="h-8 w-8 rounded-full bg-brand-500 flex items-center justify-center">
                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-2 w-24 rounded-full bg-gray-200" />
                    <div className="h-2 w-16 rounded-full bg-gray-100 mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Deployed!</div>
                <div className="text-xs text-gray-500">Build successful</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-brand-200 bg-white hover:bg-brand-50/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-500 mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}