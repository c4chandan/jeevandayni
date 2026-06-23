import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-numbers",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jeevandayni — Transform Your Health. Build Your Business.",
    template: "%s | Jeevandayni",
  },
  description:
    "India's next-generation wellness and business ecosystem combining Ayurvedic healthcare, franchise growth, and intelligent income management. Join 10,000+ partners building generational wealth.",
  keywords: [
    "Jeevandayni",
    "Ayurvedic products",
    "health wellness",
    "direct selling",
    "MLM",
    "franchise",
    "business opportunity",
    "network marketing",
    "herbal healthcare",
    "Ayurveda",
  ],
  authors: [{ name: "Jeevandayni" }],
  creator: "Jeevandayni",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevandayni.com",
    siteName: "Jeevandayni",
    title: "Jeevandayni — Transform Your Health. Build Your Business.",
    description:
      "India's next-generation wellness and business ecosystem combining Ayurvedic healthcare, franchise growth, and intelligent income management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevandayni — Transform Your Health. Build Your Business.",
    description:
      "India's next-generation wellness and business ecosystem combining Ayurvedic healthcare, franchise growth, and intelligent income management.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider delay={300}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
