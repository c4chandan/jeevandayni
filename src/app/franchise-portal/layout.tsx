"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  LayoutDashboard,
  Boxes,
  ShoppingBag,
  TrendingUp,
  LogOut,
  Leaf,
  Loader2,
  Bell,
  User,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const franchiseLinks = [
  { label: "Overview", href: "/franchise-portal", icon: LayoutDashboard },
  { label: "Inventory", href: "/franchise-portal/inventory", icon: Boxes },
  { label: "Sales Log", href: "/franchise-portal/sales", icon: TrendingUp },
];

export default function FranchiseLayout({
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
    if (mounted && !isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [mounted, isAuthenticated, isLoading, router]);

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
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-md">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-heading tracking-tight leading-none text-foreground">
                Jeevandayni
              </span>
              <span className="text-[9px] text-brand-accent font-semibold tracking-wider uppercase leading-none mt-0.5">
                Franchise
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {franchiseLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? "bg-brand-accent/10 text-brand-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-brand-accent" : "text-muted-foreground"}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-sm font-bold text-brand-accent border border-brand-accent/20 shrink-0">
              FO
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground truncate">{user?.name || "Franchise Owner"}</p>
              <p className="text-[10px] text-muted-foreground truncate">District Franchise</p>
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
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-md">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-base font-bold font-heading text-foreground">
                        Jeevandayni
                      </span>
                    </Link>
                  </div>

                  <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                    {franchiseLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                            isActive
                              ? "bg-brand-accent/10 text-brand-accent"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          <Icon className={cn("w-5 h-5", isActive ? "text-brand-accent" : "text-muted-foreground")} />
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
            <div className="text-sm font-semibold text-foreground truncate max-w-[150px] sm:max-w-none">
              Franchise Outlet Portal
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative rounded-xl">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            </Button>
            <Button variant="outline" className="gap-2 rounded-xl h-9 text-xs border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10">
              <User className="w-4 h-4" /> POS Terminal
            </Button>
          </div>
        </header>


        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
