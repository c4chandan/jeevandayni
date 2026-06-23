"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FRANCHISE_TIERS } from "@/lib/constants";
import Link from "next/link";

export default function FranchiseSection() {
  return (
    <section id="franchise" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Franchise Opportunity
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Own a <span className="gradient-text">Wellness Franchise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start your own Ayurvedic wellness franchise with minimal investment
            and maximum support. Choose your tier and territory.
          </p>
        </motion.div>

        {/* Franchise Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRANCHISE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                i === 2
                  ? "border-brand-accent shadow-lg shadow-brand-accent/10 ring-2 ring-brand-accent/20"
                  : "border-border/50 hover:border-brand-primary/30"
              }`}
            >
              {i === 2 && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-dark text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${i === 2 ? "pt-10" : ""}`}>
                {/* Tier Icon */}
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${tier.color}20` }}
                >
                  <Building2 className="w-6 h-6" style={{ color: tier.color }} />
                </div>

                <h3 className="text-lg font-heading font-bold mb-1">
                  {tier.name}
                </h3>

                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {tier.territory}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold font-heading" style={{ color: tier.color }}>
                    {tier.investment}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Investment
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-success shrink-0" />
                    <span>
                      ROI: <strong>{tier.roi}</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-success shrink-0" />
                    <span>{tier.products}+ Products</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-success shrink-0" />
                    <span>Training & Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-success shrink-0" />
                    <span>Marketing Materials</span>
                  </li>
                </ul>

                <Link href="/franchise" className="block">
                  <Button
                    className={`w-full font-semibold rounded-xl ${
                      i === 2
                        ? "bg-brand-accent hover:bg-brand-accent/90 text-brand-dark shadow-lg shadow-brand-accent/25"
                        : "bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white"
                    } transition-all`}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
