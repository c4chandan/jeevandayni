"use client";

import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Search Bar */}
      <div className="relative w-full max-w-xs hidden sm:block">
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
