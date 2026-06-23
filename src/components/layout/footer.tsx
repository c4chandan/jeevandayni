import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Inline SVG social icons (lucide-react doesn't export brand icons)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG, FOOTER_NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />

      {/* Newsletter CTA Strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading font-bold mb-1">
                Stay Updated with Jeevandayni
              </h3>
              <p className="text-white/60 text-sm">
                Get the latest product launches, health tips, and business
                opportunities.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
              />
              <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white shrink-0 shadow-lg shadow-brand-primary/25">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading tracking-tight leading-none">
                  Jeevandayni
                </span>
                <span className="text-[10px] text-white/40 tracking-widest uppercase leading-none mt-0.5">
                  Wellness Ecosystem
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              India&apos;s next-generation wellness and business ecosystem combining
              Ayurvedic healthcare, franchise growth, and intelligent income
              management.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-primary" />
                {SITE_CONFIG.email}
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                {SITE_CONFIG.address}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FacebookIcon, href: SITE_CONFIG.social.facebook },
                { icon: InstagramIcon, href: SITE_CONFIG.social.instagram },
                { icon: TwitterIcon, href: SITE_CONFIG.social.twitter },
                { icon: YoutubeIcon, href: SITE_CONFIG.social.youtube },
                { icon: LinkedinIcon, href: SITE_CONFIG.social.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-primary/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {[
            { title: "Company", links: FOOTER_NAV.company },
            { title: "Products", links: FOOTER_NAV.products },
            { title: "Opportunity", links: FOOTER_NAV.opportunity },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="font-heading font-semibold text-sm mb-5 uppercase tracking-wider text-white/80">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Jeevandayni. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {FOOTER_NAV.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
