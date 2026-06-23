"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export default function FaqSection() {
  const categories = [...new Set(FAQS.map((f) => f.category))];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Jeevandayni products, income plan,
            and franchise model.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-open:border-brand-primary/30 data-open:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-sm sm:text-base hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
