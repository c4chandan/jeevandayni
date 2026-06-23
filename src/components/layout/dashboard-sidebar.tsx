"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  LayoutDashboard,
  Wallet,
  Users,
  TrendingUp,
  ShoppingBag,
  FileCheck,
  Settings,
  LogOut,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { label: "My Team", href: "/dashboard/team", icon: Users },
  { label: "Income Log", href: "/dashboard/income", icon: TrendingUp },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { label: "KYC Verification", href: "/dashboard/kyc", icon: FileCheck },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col h-screen sticky top-0 hidden lg:flex shrink-0">
      {/* Brand Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-md">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold font-heading tracking-tight leading-none text-foreground">
              Jeevandayni
            </span>
            <span className="text-[9px] text-muted-foreground tracking-wider uppercase leading-none mt-0.5">
              Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                isActive
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-brand-primary" : "text-muted-foreground"}`} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* User Session Footer */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-sm font-bold text-brand-primary border border-brand-primary/20 shrink-0">
            {user?.name ? user.name.split(" ").map(n => n[0]).join("") : "U"}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground truncate">{user?.name || "Partner Name"}</p>
            <p className="text-[10px] text-muted-foreground truncate">{user?.rank.name || "Member"}</p>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={logout}
          className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive py-5 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
        >
          <LogOut className="w-4.5 h-4.5" /> Logout
        </Button>
      </div>
    </aside>
  );
}
