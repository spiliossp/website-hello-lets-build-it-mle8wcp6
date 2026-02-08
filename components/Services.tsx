"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. Fast, accessible, and scalable.",
    features: ["Next.js & React", "TypeScript", "API Integration", "Performance Optimization"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-brand-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design that looks stunning and converts. From wireframes to polished interfaces.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    gradient: "from-purple-500 to-brand-500",
  },
  {
    title: "Mobile Development",
    description:
      "Native-quality mobile apps for iOS and Android. One codebase, two platforms, zero compromises.",
    features: ["React Native", "Cross-Platform", "App Store Launch", "Push Notifications"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    gradient: "from-brand-500 to-emerald-500",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Technical strategy that aligns with your business goals. Architecture decisions that scale.",
    features: ["Tech Audits", "Architecture Design", "Team Building", "Growth Strategy"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    gradient: "from-orange-500 to-brand-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gray-50/50" ref={ref}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
              launch & grow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            We offer end-to-end digital services to take your product from idea
            to market. No hand-offs, no gaps — just seamless execution.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 lg:p-10 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-6`}>
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-brand-500 flex-shrink-0"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            Have something else in mind? Let's talk
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}