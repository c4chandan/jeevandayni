"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  BarChart3,
  Building2,
  Brain,
  Globe,
  GraduationCap,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconComponents: Record<string, React.ElementType> = {
  Leaf,
  BarChart3,
  Building2,
  Brain,
  Globe,
  GraduationCap,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive ecosystem designed to transform your health journey
            and build a sustainable business.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feature, i) => {
            const Icon = iconComponents[feature.icon] || Leaf;
            const isLarge = i === 0 || i === 3;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className={`group relative bg-card rounded-2xl border border-border/50 p-8 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 card-premium ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
