"use client";

import { motion } from "framer-motion";
import { TRUST_BADGES } from "@/lib/constants";
import { Shield } from "lucide-react";

export default function TrustedBySection() {
  const duplicated = [...TRUST_BADGES, ...TRUST_BADGES];

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
        >
          Trusted & Certified By
        </motion.p>
      </div>

      {/* Scrolling badges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {duplicated.map((badge, i) => (
            <div
              key={`${badge}-${i}`}
              className="flex items-center gap-2.5 px-8 py-3 mx-3 bg-card rounded-full border border-border/50 shadow-sm whitespace-nowrap hover:border-brand-primary/30 hover:shadow-md transition-all shrink-0"
            >
              <Shield className="w-4 h-4 text-brand-primary shrink-0" />
              <span className="text-sm font-medium text-foreground/80">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
