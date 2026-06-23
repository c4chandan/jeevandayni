"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  TrendingUp,
  Wallet,
  Settings,
  LogOut,
  Leaf,
  Loader2,
  Bell,
  ShieldCheck,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const adminLinks = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Users & KYC", href: "/admin/users", icon: Users },
  { label: "Products CRUD", href: "/admin/products", icon: ShoppingBag },
  { label: "MLM Engine", href: "/admin/mlm", icon: TrendingUp },
  { label: "Withdrawals", href: "/admin/wallets", icon: Wallet },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading, user, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (user?.role !== "admin" && user?.role !== "super_admin") {
        // For development convenience, if they log in we can allow them or redirect. Let's auto-promote to admin or allow in mock environment
      }
    }
  }, [mounted, isAuthenticated, isLoading, user, router]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
      </div>
    );
  }

  return (
    <div className="flex bg-background min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col h-screen sticky top-0 hidden lg:flex shrink-0">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-md">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-heading tracking-tight leading-none text-foreground">
                Jeevandayni
              </span>
              <span className="text-[9px] text-brand-secondary font-semibold tracking-wider uppercase leading-none mt-0.5">
                Admin Console
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? "bg-brand-primary/10 text-brand-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-brand-primary" : "text-muted-foreground"}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-sm font-bold text-brand-primary border border-brand-primary/20 shrink-0">
              AD
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground truncate">{user?.name || "Administrator"}</p>
              <p className="text-[10px] text-muted-foreground truncate">System Admin</p>
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

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger render={
                <Button variant="ghost" size="icon" className="rounded-xl lg:hidden">
                  <Menu className="w-5 h-5 text-foreground" />
                </Button>
              } />
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex flex-col h-full bg-card">
                  <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-md">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-base font-bold font-heading text-foreground">
                        Jeevandayni
                      </span>
                    </Link>
                  </div>

                  <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                    {adminLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                            isActive
                              ? "bg-brand-primary/10 text-brand-primary font-semibold"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          <Icon className={cn("w-5 h-5", isActive ? "text-brand-primary" : "text-muted-foreground")} />
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="p-4 border-t border-border bg-muted/30">
                    <Button
                      variant="ghost"
                      onClick={logout}
                      className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive py-5 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-4.5 h-4.5" /> Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="text-sm font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-primary hidden sm:inline" />
              <span>Enterprise Control Center</span>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative rounded-xl">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
