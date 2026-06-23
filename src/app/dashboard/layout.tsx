"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import DashboardHeader from "@/components/layout/dashboard-header";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthStore();
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

  // Allow rendering if authenticated
  return (
    <div className="flex bg-background min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
