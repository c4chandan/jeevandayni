"use client";

import { motion } from "framer-motion";
import { FRANCHISE_TIERS } from "@/lib/constants";
import { Check, Shield, MapPin, IndianRupee, Landmark, Coins, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "Territory Exclusivity",
    description: "Secure dedicated territory rights at Ward, Block, District, or State level, blocking competitors.",
    icon: MapPin,
  },
  {
    title: "High Retail Margins",
    description: "Purchase inventory at wholesale cost and earn 25-50% retail profit margins.",
    icon: Coins,
  },
  {
    title: "Complete POS & Inventory Software",
    description: "Receive full access to billing, inventory alerts, commission tracking, and customer logs.",
    icon: Landmark,
  },
  {
    title: "Marketing & Training Support",
    description: "Free local newspaper ads, banner prints, and expert training on Ayurvedic consulting.",
    icon: TrendingUp,
  },
];

export default function FranchiseOpportunityPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4 px-3 py-1">
            Partnership Model
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6">
            Become a Certified <span className="gradient-text">Jeevandayni Franchise</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partner with India&apos;s leading Ayurvedic wellness brand. Setup a wellness center or retail franchise in your territory with our full software, marketing, and inventory support.
          </p>
        </div>

        {/* Franchise Tiers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10">
          {FRANCHISE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{tier.name}</h3>
                <Badge className="mb-6" style={{ backgroundColor: `${tier.color}15`, color: tier.color, border: `1px solid ${tier.color}30` }}>
                  {tier.territory}
                </Badge>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-0.5">Required Investment</span>
                    <p className="text-2xl font-extrabold text-brand-primary font-heading flex items-center font-numbers">
                      <IndianRupee className="w-5 h-5 shrink-0" />
                      {tier.investment.replace("₹", "")}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-0.5">Projected ROI</span>
                    <p className="text-lg font-bold text-foreground font-numbers">{tier.roi}</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-medium rounded-xl">
                Apply for Tier
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Franchise Benefits */}
        <div className="mb-24 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Franchise <span className="gradient-text">Benefits & Support</span>
            </h2>
            <p className="text-muted-foreground">
              We empower our franchise owners with state-of-the-art tools and resources to guarantee success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-card border border-border/50 rounded-2xl p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form Banner */}
        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5" />
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground text-center mb-2">
              Apply for Territory Rights
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill out the form below, and our business development manager will contact you within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                />
                <select
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-muted-foreground"
                >
                  <option value="">Select Territory</option>
                  <option value="ward">Ward Level (Micro)</option>
                  <option value="block">Block Level (Mini)</option>
                  <option value="district">District Level (Standard)</option>
                  <option value="state">State Level (Premium)</option>
                </select>
              </div>
              <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-base shadow-lg shadow-brand-primary/10">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
