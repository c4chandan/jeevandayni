/* ========================================
   JEEVANDAYNI — TypeScript Type Definitions
   ======================================== */

// ---- User & Auth ----
export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  sponsorId?: string;
  rank: Rank;
  joinedAt: string;
  kycStatus: KycStatus;
}

export type UserRole = "user" | "franchise" | "admin" | "super_admin";
export type UserStatus = "active" | "inactive" | "suspended" | "blocked";
export type KycStatus = "pending" | "submitted" | "verified" | "rejected";

export interface Rank {
  id: string;
  name: string;
  level: number;
  icon: string;
  color: string;
  requiredPV: number;
  benefits: string[];
}

// ---- Products ----
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  mrp: number;
  discount: number;
  pv: number; // Point Value for MLM
  bv: number; // Business Volume
  category: ProductCategory;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  ingredients?: string[];
  benefits?: string[];
  dosage?: string;
  weight?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

// ---- Orders ----
export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  totalPV: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  pv: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

// ---- Wallet & Income ----
export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  totalEarnings: number;
  totalWithdrawals: number;
  pendingWithdrawals: number;
}

export interface Transaction {
  id: string;
  walletId: string;
  type: TransactionType;
  amount: number;
  description: string;
  status: TransactionStatus;
  createdAt: string;
  reference?: string;
}

export type TransactionType = "credit" | "debit" | "withdrawal" | "payout";
export type TransactionStatus = "pending" | "completed" | "failed" | "cancelled";

export interface Income {
  id: string;
  userId: string;
  type: IncomeType;
  amount: number;
  fromUserId?: string;
  fromUserName?: string;
  level?: number;
  description: string;
  createdAt: string;
}

export type IncomeType =
  | "direct"
  | "binary"
  | "matching"
  | "leadership"
  | "royalty"
  | "reward"
  | "retail_profit";

// ---- Team / MLM ----
export interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  mobile: string;
  rank: Rank;
  status: UserStatus;
  joinedAt: string;
  personalPV: number;
  teamPV: number;
  directReferrals: number;
  position?: "left" | "right";
  children?: TeamMember[];
}

export interface NetworkStats {
  totalTeamSize: number;
  directReferrals: number;
  activeMembers: number;
  inactiveMembers: number;
  leftLegCount: number;
  rightLegCount: number;
  totalTeamPV: number;
  depth: number;
}

// ---- Franchise ----
export interface Franchise {
  id: string;
  name: string;
  ownerId: string;
  type: FranchiseType;
  territory: string;
  status: FranchiseStatus;
  investment: number;
  monthlyRevenue: number;
  totalCustomers: number;
  createdAt: string;
}

export type FranchiseType = "micro" | "mini" | "standard" | "premium" | "mega";
export type FranchiseStatus = "active" | "inactive" | "pending" | "suspended";

// ---- KYC ----
export interface KycDocument {
  type: KycDocumentType;
  number: string;
  frontImage?: string;
  backImage?: string;
  status: KycStatus;
  verifiedAt?: string;
  rejectionReason?: string;
}

export type KycDocumentType = "aadhaar" | "pan" | "bank" | "gst";

// ---- Blog & CMS ----
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: { name: string; avatar: string };
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  type: "webinar" | "seminar" | "conference" | "training";
  isUpcoming: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  income?: string;
  videoUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// ---- Navigation ----
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  badge?: string;
}

// ---- Stats & Charts ----
export interface Stat {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}
