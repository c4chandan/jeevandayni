"use client";

import { motion } from "framer-motion";
import { INCOME_TIERS } from "@/lib/constants";
import { IndianRupee, ArrowRight, CheckCircle2, Award, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, string> = {
  "💰": "bg-emerald-500/10 text-emerald-600",
  "🌳": "bg-teal-500/10 text-teal-600",
  "📊": "bg-amber-500/10 text-amber-600",
  "👑": "bg-blue-500/10 text-blue-600",
  "💎": "bg-indigo-500/10 text-indigo-600",
  "🏆": "bg-rose-500/10 text-rose-600",
};

export default function IncomePlanPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4 px-3 py-1">
            Compensation Plan
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6">
            A Plan Built for <span className="gradient-text">Generational Wealth</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our dual-active hybrid binary compensation model gives you 6 different pathways to financial independence, from direct product sales margins to matching binary leg commissions.
          </p>
        </div>

        {/* 6 Income Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
          {INCOME_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 ${iconMap[tier.icon] || "bg-muted"}`}>
                  {tier.icon}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{tier.name}</h3>
                <Badge className="bg-brand-primary/10 text-brand-primary mb-4 border-brand-primary/20">
                  Payout: {tier.percentage}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {tier.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Plan Detail Box */}
        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Why our Compensation Model is superior
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike traditional, complex multi-level plans that are hard to navigate, our matching binary model is transparent and built to favor teamwork. We pay matching bonuses daily.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Daily automated wallet payout distributions
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  No heavy inventory purchases required
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Comprehensive dashboard analytics
                </li>
              </ul>
            </div>

            <div className="bg-muted/40 border border-border p-8 rounded-2xl flex flex-col justify-center text-center">
              <Sparkles className="w-10 h-10 text-brand-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Ready to start?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                It takes under 2 minutes to create a partner account and claim your position in the binary tree.
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold rounded-xl">
                Register as Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
