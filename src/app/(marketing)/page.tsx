import type { Metadata } from "next";
import HeroSection from "@/components/marketing/hero-section";
import TrustedBySection from "@/components/marketing/trusted-by";
import WhyChooseUsSection from "@/components/marketing/why-choose-us";
import ProductShowcase from "@/components/marketing/product-showcase";
import IncomeCalculator from "@/components/marketing/income-calculator";
import FranchiseSection from "@/components/marketing/franchise-section";
import NetworkVisualization from "@/components/marketing/network-visualization";
import TestimonialsSection from "@/components/marketing/testimonials";
import StatsSection from "@/components/marketing/stats-section";
import FaqSection from "@/components/marketing/faq-section";
import CtaSection from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Jeevandayni — Transform Your Health. Build Your Business. Create Generational Wealth.",
  description:
    "India's next-generation wellness and business ecosystem combining Ayurvedic healthcare, franchise growth, and intelligent income management. Join 10,000+ partners building generational wealth.",
  openGraph: {
    title: "Jeevandayni — Transform Your Health. Build Your Business.",
    description:
      "India's next-generation wellness and business ecosystem. Premium Ayurvedic products, 6 income streams, franchise opportunities.",
    url: "https://jeevandayni.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <WhyChooseUsSection />
      <ProductShowcase />
      <IncomeCalculator />
      <FranchiseSection />
      <NetworkVisualization />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
