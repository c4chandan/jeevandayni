"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-3 px-3 py-1">
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground mb-4">
            We&apos;re Here to <span className="gradient-text">Help You</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our Ayurvedic products, your matching binary commission payouts, or franchise options? Contact our support team.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Left panel: Info cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border/60 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Call Us</h3>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-muted-foreground hover:text-brand-primary transition-colors">
                  {SITE_CONFIG.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9AM to 6PM</p>
              </div>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-brand-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email Us</h3>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-muted-foreground hover:text-brand-secondary transition-colors">
                  {SITE_CONFIG.email}
                </a>
                <p className="text-xs text-muted-foreground mt-1">We reply within 24 hours</p>
              </div>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Corporate Office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Send Us a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                    placeholder="Inquiry about matching binary payouts..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                    placeholder="Type your message details here..."
                  />
                </div>

                <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-base shadow-lg shadow-brand-primary/15 flex items-center justify-center gap-2">
                  <Send className="w-4.5 h-4.5" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
