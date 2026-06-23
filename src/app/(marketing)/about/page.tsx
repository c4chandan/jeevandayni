"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, GraduationCap, Award, Compass, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    title: "Pure Ayurvedic Wisdom",
    description: "We preserve ancient Ayurvedic recipes in their purest form, free from harmful synthetics and chemicals.",
    icon: Compass,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Scientific Validation",
    description: "Every herb is standardized and clinically tested for potency and purity in modern laboratories.",
    icon: ShieldCheck,
    color: "text-teal-500 bg-teal-500/10",
  },
  {
    title: "Empowering Partners",
    description: "We are committed to helping thousands of health advocates build sustainable wealth.",
    icon: GraduationCap,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "Uncompromising Quality",
    description: "Our state-of-the-art facilities are GMP, ISO, and AYUSH-certified for high safety standards.",
    icon: Award,
    color: "text-blue-500 bg-blue-500/10",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />

        {/* Hero Section */}
        <div className="relative text-center max-w-3xl mx-auto mb-20">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4 px-3 py-1">
            Our Story
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6">
            Empowering Health & <span className="gradient-text">Wealth In India</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Founded with a vision to make premium Ayurvedic wellness accessible to everyone, while creating sustainable entrepreneurial opportunities across India.
          </p>
        </div>

        {/* Vision & Mission Bento */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/60 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the global leader in wellness ecosystems by merging authentic Ayurvedic health solutions with smart direct-selling wealth management systems. We strive for a healthier, wealthier, self-reliant India.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/60 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-brand-secondary" />
              </div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To build a strong community of wellness entrepreneurs through high-quality AYUSH-approved products, a transparent compensation structure, and training models that enable long-term micro-franchise success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do—from formulating products to processing matching binary commissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Growth Stats */}
        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-brand-primary font-heading font-numbers">10K+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Active Partners</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-brand-secondary font-heading font-numbers">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Ayurvedic Products</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-brand-primary font-heading font-numbers">200+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Cities Covered</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-brand-accent font-heading font-numbers">₹50Cr+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Earnings Paid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
