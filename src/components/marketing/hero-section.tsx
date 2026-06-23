"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Package,
  MapPin,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { HERO_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(target.replace(/[^0-9]/g, ""));
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";
  const postfix = target.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="font-numbers tabular-nums">
      {prefix}
      {count.toLocaleString("en-IN")}
      {postfix}
      {suffix}
    </span>
  );
}

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "trending-up": TrendingUp,
  package: Package,
  "map-pin": MapPin,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 lg:py-40 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white/90 border-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-accent" />
                India&apos;s #1 Ayurvedic Wellness Ecosystem
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.08] tracking-tight">
                Transform Your{" "}
                <span className="gradient-text-light">Health.</span>
                <br />
                Build Your{" "}
                <span className="gradient-text-light">Business.</span>
                <br />
                Create{" "}
                <span className="relative">
                  <span className="gradient-text-light">Generational Wealth.</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 8.5C50 2.5 100 2 150 5.5C200 9 250 4 298 7"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="underline-gradient"
                        x1="0"
                        y1="0"
                        x2="300"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="50%" stopColor="#34D399" />
                        <stop offset="100%" stopColor="#FBBF24" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              India&apos;s next-generation wellness and business ecosystem
              combining Ayurvedic healthcare, franchise growth, and intelligent
              income management.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold text-base px-8 h-13 rounded-xl shadow-2xl shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all group flex items-center justify-center"
                )}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "bg-transparent border border-white/30 text-white hover:bg-white hover:text-brand-dark font-semibold text-base px-8 h-13 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                )}
              >
                Explore Products
              </Link>
              <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                <span className="text-sm font-medium">Watch Video</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-secondary" />
                <span className="text-sm text-white/50">AYUSH Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                <span className="text-sm text-white/50">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-primary-light" />
                <span className="text-sm text-white/50">10K+ Partners</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Cards & Stats */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {HERO_STATS.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Users;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                    className={`glass-card rounded-2xl p-6 hover-lift cursor-default ${
                      i === 0
                        ? "animate-float"
                        : i === 1
                        ? "animate-float-delayed"
                        : i === 2
                        ? "animate-float-slow"
                        : "animate-float"
                    }`}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                        i === 0
                          ? "bg-brand-primary/20"
                          : i === 1
                          ? "bg-brand-secondary/20"
                          : i === 2
                          ? "bg-brand-accent/20"
                          : "bg-brand-info/20"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          i === 0
                            ? "text-brand-primary"
                            : i === 1
                            ? "text-brand-secondary"
                            : i === 2
                            ? "text-brand-accent"
                            : "text-brand-info"
                        }`}
                      />
                    </div>
                    <div className="text-2xl font-bold font-heading text-foreground">
                      <AnimatedCounter target={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-4 shadow-2xl animate-float-delayed w-48"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
                <span className="text-xs font-medium text-brand-success">
                  Live Payout
                </span>
              </div>
              <div className="text-lg font-bold font-heading text-foreground">
                ₹2,45,000
              </div>
              <div className="text-xs text-muted-foreground">
                Paid to partners today
              </div>
            </motion.div>

            {/* Growth chart mini card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -left-8 bottom-8 glass-card rounded-2xl p-4 shadow-2xl animate-float w-52"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-foreground">
                  Monthly Growth
                </span>
                <span className="text-xs font-bold text-brand-success">
                  +28%
                </span>
              </div>
              {/* Mini sparkline */}
              <svg viewBox="0 0 200 40" className="w-full h-8">
                <path
                  d="M0 35 L20 30 L40 32 L60 25 L80 28 L100 18 L120 22 L140 15 L160 12 L180 8 L200 5"
                  fill="none"
                  stroke="#0F766E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 35 L20 30 L40 32 L60 25 L80 28 L100 18 L120 22 L140 15 L160 12 L180 8 L200 5 L200 40 L0 40Z"
                  fill="url(#sparkline-gradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="sparkline-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#0F766E" />
                    <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
