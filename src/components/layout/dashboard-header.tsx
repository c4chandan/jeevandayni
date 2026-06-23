"use client";

import { Bell, Search, User, Menu, Leaf, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { sidebarLinks } from "./dashboard-sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardHeader() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40">
      {/* Mobile Drawer Trigger */}
      <div className="flex items-center gap-3 lg:hidden">
        <Sheet>
          <SheetTrigger render={
            <Button variant="ghost" size="icon" className="rounded-xl">
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
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                        isActive
                          ? "bg-brand-primary/10 text-brand-primary"
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
        <span className="font-bold text-sm tracking-tight text-foreground sm:hidden">
          Jeevandayni
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search logs, partners..."
          className="pl-9 h-9 border-border rounded-lg bg-muted/20 focus-visible:ring-brand-primary text-xs"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4 ml-auto">
        <Button variant="ghost" size="icon" className="relative rounded-xl">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-danger animate-pulse" />
        </Button>

        <Button variant="outline" className="gap-2 rounded-xl h-9 text-xs">
          <User className="w-4 h-4 text-muted-foreground" /> Account Setup
        </Button>
      </div>
    </header>
  );
}
