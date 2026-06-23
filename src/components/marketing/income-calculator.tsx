"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INCOME_TIERS } from "@/lib/constants";
import Link from "next/link";

export default function IncomeCalculator() {
  const [referrals, setReferrals] = useState(10);
  const [avgPurchase, setAvgPurchase] = useState(2000);

  const directIncome = referrals * avgPurchase * 0.15;
  const binaryIncome = Math.floor(referrals / 2) * avgPurchase * 0.1;
  const levelIncome = referrals * 3 * avgPurchase * 0.03;
  const totalMonthly = directIncome + binaryIncome + levelIncome;

  return (
    <section id="income" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
            Income Opportunity
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Calculate Your{" "}
            <span className="gradient-text">Earning Potential</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            6 powerful income streams designed to grow with your efforts. Use the
            calculator to estimate your monthly earnings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border/50 p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-brand-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold">
                Earnings Calculator
              </h3>
            </div>

            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Direct Referrals
                  </label>
                  <span className="text-sm font-bold text-brand-primary font-numbers">
                    {referrals} people
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={referrals}
                  onChange={(e) => setReferrals(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Avg. Monthly Purchase per Person
                  </label>
                  <span className="text-sm font-bold text-brand-primary font-numbers">
                    ₹{avgPurchase.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={avgPurchase}
                  onChange={(e) => setAvgPurchase(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹500</span>
                  <span>₹5,000</span>
                  <span>₹10,000</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">
                  Direct Income (15%)
                </span>
                <span className="text-sm font-bold font-numbers">
                  ₹{directIncome.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">
                  Binary Income (10%)
                </span>
                <span className="text-sm font-bold font-numbers">
                  ₹{binaryIncome.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">
                  Level Income (3%)
                </span>
                <span className="text-sm font-bold font-numbers">
                  ₹{levelIncome.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl text-white">
                <span className="font-semibold">Est. Monthly Income</span>
                <span className="text-2xl font-bold font-numbers font-heading">
                  ₹{totalMonthly.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link href="/register" className="block mt-6">
              <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold h-12 rounded-xl shadow-lg shadow-brand-primary/25">
                Start Earning Today
              </Button>
            </Link>
          </motion.div>

          {/* Income Tiers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {INCOME_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl border border-border/50 p-6 hover:border-brand-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{tier.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-semibold">
                        {tier.name}
                      </h4>
                      <span className="text-sm font-bold text-brand-primary font-numbers">
                        {tier.percentage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
