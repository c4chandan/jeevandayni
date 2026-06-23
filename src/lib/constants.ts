/* ========================================
   JEEVANDAYNI — Constants & Configuration
   ======================================== */

import type { NavItem, ProductCategory, FAQ, Testimonial } from "@/types";

// ---- Site Configuration ----
export const SITE_CONFIG = {
  name: "Jeevandayni",
  tagline: "Transform Your Health. Build Your Business.",
  description:
    "India's next-generation wellness and business ecosystem combining Ayurvedic healthcare, franchise growth, and intelligent income management.",
  url: "https://jeevandayni.com",
  email: "support@jeevandayni.com",
  phone: "+91 98765 43210",
  address: "Corporate Office, New Delhi, India",
  social: {
    facebook: "https://facebook.com/jeevandayni",
    instagram: "https://instagram.com/jeevandayni",
    twitter: "https://x.com/jeevandayni",
    youtube: "https://youtube.com/@jeevandayni",
    linkedin: "https://linkedin.com/company/jeevandayni",
  },
};

// ---- Navigation ----
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Immunity & Wellness", href: "/products?category=immunity" },
      { label: "Digestive Health", href: "/products?category=digestive" },
      { label: "Skin & Hair Care", href: "/products?category=skin-hair" },
      { label: "Joint & Bone Health", href: "/products?category=joint-bone" },
      { label: "Personal Care", href: "/products?category=personal-care" },
    ],
  },
  { label: "Income Plan", href: "/income-plan" },
  { label: "Franchise", href: "/franchise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "All Products", href: "/products" },
    { label: "Best Sellers", href: "/products?sort=best-seller" },
    { label: "New Arrivals", href: "/products?sort=new" },
    { label: "Immunity & Wellness", href: "/products?category=immunity" },
    { label: "Skin & Hair Care", href: "/products?category=skin-hair" },
  ],
  opportunity: [
    { label: "Income Plan", href: "/income-plan" },
    { label: "Franchise Model", href: "/franchise" },
    { label: "Join as Partner", href: "/register" },
    { label: "Success Stories", href: "/#testimonials" },
    { label: "FAQs", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
  ],
};

// ---- Product Categories ----
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "1", name: "Immunity & Wellness", slug: "immunity", icon: "🛡️", productCount: 12 },
  { id: "2", name: "Digestive Health", slug: "digestive", icon: "🫁", productCount: 8 },
  { id: "3", name: "Skin & Hair Care", slug: "skin-hair", icon: "✨", productCount: 10 },
  { id: "4", name: "Joint & Bone Health", slug: "joint-bone", icon: "🦴", productCount: 6 },
  { id: "5", name: "Personal Care", slug: "personal-care", icon: "🧴", productCount: 9 },
  { id: "6", name: "Nutrition & Supplements", slug: "nutrition", icon: "💊", productCount: 7 },
];

// ---- Stats for hero/landing ----
export const HERO_STATS = [
  { label: "Active Partners", value: "10,000+", icon: "users" },
  { label: "Revenue Generated", value: "₹50Cr+", icon: "trending-up" },
  { label: "Products", value: "50+", icon: "package" },
  { label: "Cities", value: "200+", icon: "map-pin" },
];

// ---- Trust badges ----
export const TRUST_BADGES = [
  "AYUSH Approved",
  "FSSAI Certified",
  "ISO 9001:2015",
  "GMP Certified",
  "100% Ayurvedic",
  "MSME Registered",
  "Direct Selling Licensed",
  "Ministry of AYUSH",
];

// ---- Income Plan Tiers ----
export const INCOME_TIERS = [
  {
    name: "Direct Income",
    percentage: "10-20%",
    description: "Earn on every direct sale made by you or your first-level referrals",
    icon: "💰",
  },
  {
    name: "Binary Income",
    percentage: "10%",
    description: "Balanced binary tree income with daily matching payouts",
    icon: "🌳",
  },
  {
    name: "Level Income",
    percentage: "1-5%",
    description: "Earn up to 10 levels deep from your downline purchases",
    icon: "📊",
  },
  {
    name: "Leadership Bonus",
    percentage: "2-5%",
    description: "Additional bonuses for achieving leadership ranks",
    icon: "👑",
  },
  {
    name: "Royalty Income",
    percentage: "1-3%",
    description: "Ongoing passive income from company-wide turnover",
    icon: "💎",
  },
  {
    name: "Rewards & Incentives",
    percentage: "Trips, Cars, Homes",
    description: "Luxury rewards at milestone achievements",
    icon: "🏆",
  },
];

// ---- Franchise Tiers ----
export const FRANCHISE_TIERS = [
  {
    name: "Micro Franchise",
    investment: "₹50,000",
    roi: "25-35%",
    territory: "Ward Level",
    products: 20,
    color: "#10B981",
  },
  {
    name: "Mini Franchise",
    investment: "₹1,50,000",
    roi: "30-40%",
    territory: "Block Level",
    products: 35,
    color: "#0F766E",
  },
  {
    name: "Standard Franchise",
    investment: "₹3,00,000",
    roi: "35-45%",
    territory: "District Level",
    products: 50,
    color: "#F59E0B",
  },
  {
    name: "Premium Franchise",
    investment: "₹5,00,000",
    roi: "40-50%",
    territory: "State Level",
    products: 50,
    color: "#3B82F6",
  },
];

// ---- Features for "Why Choose Us" ----
export const FEATURES = [
  {
    title: "100% Ayurvedic Products",
    description: "AYUSH-approved, GMP-certified herbal formulations backed by ancient wisdom and modern science.",
    icon: "Leaf",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Transparent Income System",
    description: "Real-time dashboard tracking 6 types of income streams with daily payouts and instant withdrawals.",
    icon: "BarChart3",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Franchise Opportunity",
    description: "Start your own wellness franchise with investments starting at ₹50,000 and earn 25-50% ROI.",
    icon: "Building2",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "AI Health Assistant",
    description: "Personalized wellness recommendations powered by AI based on your health profile and goals.",
    icon: "Brain",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Pan-India Network",
    description: "Growing network across 200+ cities with doorstep delivery and local franchise support.",
    icon: "Globe",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Leadership Development",
    description: "Free training, mentorship programs, and certification to help you grow as a health entrepreneur.",
    icon: "GraduationCap",
    gradient: "from-rose-500 to-pink-600",
  },
];

// ---- Testimonials ----
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Diamond Partner",
    avatar: "/images/testimonials/avatar1.jpg",
    content: "Jeevandayni transformed my life. Starting from a small town, I now earn ₹2.5 lakhs monthly and have built a team of 500+ partners. The products genuinely help people.",
    rating: 5,
    income: "₹2.5L/month",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Gold Partner & Franchise Owner",
    avatar: "/images/testimonials/avatar2.jpg",
    content: "As a franchise owner, I serve 200+ customers monthly. The AI health assistant helps me recommend the right products. My franchise ROI has been 40% consistently.",
    rating: 5,
    income: "₹1.8L/month",
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    role: "Platinum Partner",
    avatar: "/images/testimonials/avatar3.jpg",
    content: "As an Ayurvedic practitioner, I trust Jeevandayni's product quality. The AYUSH certifications and lab testing reports give me confidence to recommend these to my patients.",
    rating: 5,
    income: "₹3.2L/month",
  },
  {
    id: "4",
    name: "Sunita Devi",
    role: "Silver Partner",
    avatar: "/images/testimonials/avatar4.jpg",
    content: "I joined 6 months ago as a homemaker. Today I earn ₹45,000 monthly working just 2-3 hours daily. The training and support system is exceptional.",
    rating: 5,
    income: "₹45K/month",
  },
];

// ---- FAQ ----
export const FAQS: FAQ[] = [
  {
    question: "What is Jeevandayni?",
    answer: "Jeevandayni is India's next-generation wellness and business ecosystem that combines premium Ayurvedic healthcare products with a transparent direct-selling business model and franchise opportunities.",
    category: "General",
  },
  {
    question: "Are the products genuine and certified?",
    answer: "Yes, all products are AYUSH-approved, FSSAI-certified, manufactured in GMP-certified facilities, and undergo rigorous quality testing. We use 100% natural Ayurvedic ingredients.",
    category: "Products",
  },
  {
    question: "How much can I earn as a partner?",
    answer: "Earnings depend on your effort and team building. Partners earn through 6 income streams: Direct Income (10-20%), Binary Income (10%), Level Income (1-5%), Leadership Bonus, Royalty, and Rewards. Top partners earn ₹3-5 lakhs monthly.",
    category: "Income",
  },
  {
    question: "What is the minimum investment to start?",
    answer: "You can start as a partner with a product purchase of just ₹1,000. For franchise opportunities, investments start at ₹50,000 for a Micro Franchise with 25-35% ROI potential.",
    category: "Income",
  },
  {
    question: "How does the franchise model work?",
    answer: "Franchise owners get exclusive territory rights, inventory at wholesale prices, a POS system, training, and marketing support. You earn through retail margins (25-50%), team bonuses, and territory commissions.",
    category: "Franchise",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee on all products. If you're not satisfied, return the unused product for a full refund, no questions asked.",
    category: "General",
  },
  {
    question: "How do I withdraw my earnings?",
    answer: "Earnings are credited to your digital wallet daily. You can withdraw to your bank account anytime with a minimum withdrawal of ₹500. Payouts are processed within 24-48 hours.",
    category: "Income",
  },
  {
    question: "Do I need to maintain monthly purchases?",
    answer: "To remain active and eligible for team income, a minimal monthly purchase of ₹500 worth of products is required. This ensures you stay connected with the products you represent.",
    category: "Income",
  },
];

// ---- Mock Products ----
export const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Immunity Shield Pro",
    slug: "immunity-shield-pro",
    shortDescription: "Advanced Ayurvedic immunity booster with Ashwagandha, Giloy & Tulsi",
    price: 599,
    mrp: 899,
    discount: 33,
    rating: 4.8,
    reviewCount: 1247,
    images: ["/images/products/immunity-shield.jpg"],
    category: "Immunity & Wellness",
    isBestSeller: true,
    tags: ["immunity", "ashwagandha", "giloy"],
  },
  {
    id: "2",
    name: "DigestiCare Plus",
    slug: "digesticare-plus",
    shortDescription: "Complete digestive health formula with Triphala & Ajwain",
    price: 449,
    mrp: 699,
    discount: 36,
    rating: 4.7,
    reviewCount: 893,
    images: ["/images/products/digesticare.jpg"],
    category: "Digestive Health",
    isBestSeller: false,
    tags: ["digestion", "triphala", "gut-health"],
  },
  {
    id: "3",
    name: "GlowSkin Kumkumadi Oil",
    slug: "glowskin-kumkumadi",
    shortDescription: "Premium Kumkumadi Tailam for radiant, youthful skin",
    price: 799,
    mrp: 1299,
    discount: 38,
    rating: 4.9,
    reviewCount: 2156,
    images: ["/images/products/kumkumadi.jpg"],
    category: "Skin & Hair Care",
    isNew: true,
    tags: ["skincare", "kumkumadi", "anti-aging"],
  },
  {
    id: "4",
    name: "JointFlex Gold",
    slug: "jointflex-gold",
    shortDescription: "Ayurvedic joint & bone support with Shallaki & Guggulu",
    price: 699,
    mrp: 999,
    discount: 30,
    rating: 4.6,
    reviewCount: 678,
    images: ["/images/products/jointflex.jpg"],
    category: "Joint & Bone Health",
    isBestSeller: true,
    tags: ["joints", "bone-health", "shallaki"],
  },
  {
    id: "5",
    name: "HairVita Bhringraj Oil",
    slug: "hairvita-bhringraj",
    shortDescription: "Traditional Bhringraj hair oil for thick, lustrous hair growth",
    price: 399,
    mrp: 599,
    discount: 33,
    rating: 4.8,
    reviewCount: 1834,
    images: ["/images/products/bhringraj.jpg"],
    category: "Skin & Hair Care",
    isNew: true,
    tags: ["haircare", "bhringraj", "hair-growth"],
  },
  {
    id: "6",
    name: "VitaBoost Multivitamin",
    slug: "vitaboost-multivitamin",
    shortDescription: "Plant-based multivitamin with 40+ natural nutrients",
    price: 549,
    mrp: 849,
    discount: 35,
    rating: 4.7,
    reviewCount: 956,
    images: ["/images/products/vitaboost.jpg"],
    category: "Nutrition & Supplements",
    isBestSeller: false,
    tags: ["multivitamin", "nutrition", "supplements"],
  },
];
