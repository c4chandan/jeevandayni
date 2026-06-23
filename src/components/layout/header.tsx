"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Leaf,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { MAIN_NAV } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (scrolled || !isHome)
          ? "glass-nav shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:shadow-brand-primary/40 transition-shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-heading tracking-tight leading-none transition-colors ${
                (scrolled || !isHome) ? "text-foreground" : "text-white"
              }`}>
                Jeevandayni
              </span>
              <span className={`text-[10px] tracking-widest uppercase leading-none mt-0.5 transition-colors ${
                (scrolled || !isHome) ? "text-muted-foreground" : "text-white/60"
              }`}>
                Wellness Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    (scrolled || !isHome)
                      ? "text-foreground/80 hover:text-brand-primary hover:bg-brand-primary/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 py-2 bg-card rounded-xl shadow-xl shadow-black/10 border border-border/50 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "font-medium transition-colors flex items-center justify-center",
                (scrolled || !isHome)
                  ? "text-foreground/85 hover:text-brand-primary hover:bg-brand-primary/10"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              )}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-brand-primary hover:bg-brand-primary-dark text-white font-medium shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all flex items-center justify-center"
              )}
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger render={
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden transition-colors ${
                  (scrolled || !isHome)
                    ? "text-foreground hover:text-brand-primary hover:bg-brand-primary/10"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              />
            }>
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2.5 p-6 border-b border-border">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <Leaf className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-lg font-bold font-heading">
                    Jeevandayni
                  </span>
                </div>

                {/* Mobile Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {MAIN_NAV.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {item.label}
                        {item.children && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Link>
                      {item.children && (
                        <div className="pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-6 border-t border-border space-y-3">
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full font-medium flex items-center justify-center"
                    )}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-medium flex items-center justify-center"
                    )}
                  >
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
