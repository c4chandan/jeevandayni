"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10">
            <Users className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-white/80">
              Join 10,000+ Partners Building Generational Wealth
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
            Ready to Transform
            <br />
            Your Future?
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Start your journey today with India&apos;s fastest-growing Ayurvedic
            wellness ecosystem. No experience needed.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-brand-dark hover:bg-white/90 font-bold text-base px-8 h-14 rounded-xl shadow-2xl group"
              >
                <Sparkles className="w-5 h-5 mr-2 text-brand-accent" />
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/franchise">
              <Button
                size="lg"
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-brand-dark font-bold text-base px-8 h-14 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Explore Franchise
              </Button>
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-xs text-white/40">
            ✓ Free to join &nbsp;·&nbsp; ✓ No minimum commitment &nbsp;·&nbsp;
            ✓ 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
