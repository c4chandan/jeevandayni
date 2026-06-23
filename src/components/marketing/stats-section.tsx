"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, IndianRupee, Package, Award } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: IndianRupee, value: 50, suffix: "Cr+", prefix: "₹", label: "Total Revenue", color: "text-brand-primary" },
  { icon: Users, value: 10000, suffix: "+", label: "Active Partners", color: "text-brand-secondary" },
  { icon: Package, value: 50, suffix: "+", label: "Premium Products", color: "text-brand-accent" },
  { icon: Award, value: 500, suffix: "+", label: "Success Stories", color: "text-brand-info" },
  { icon: TrendingUp, value: 200, suffix: "+", label: "Cities Covered", color: "text-violet-500" },
];

function AnimatedStat({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const increment = stat.value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center group">
      <div className={`w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
        <Icon className={`w-6 h-6 ${stat.color}`} />
      </div>
      <div className="text-3xl lg:text-4xl font-bold font-heading font-numbers mb-1">
        {stat.prefix || ""}
        {count.toLocaleString("en-IN")}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Growing <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers that reflect our commitment to transforming lives and
            building sustainable businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedStat stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
