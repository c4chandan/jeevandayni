"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Real People,{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our partners who transformed their health and income with
            Jeevandayni.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-primary/10" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-brand-accent fill-brand-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {testimonial.income && (
                  <Badge
                    variant="secondary"
                    className="bg-brand-success/10 text-brand-success font-bold text-xs"
                  >
                    {testimonial.income}
                  </Badge>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
