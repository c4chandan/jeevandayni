"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, ArrowRight, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuthStore();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    clearError();

    if (!emailOrMobile || !password) {
      setLoginError("Please enter your credentials.");
      return;
    }

    const success = await login(emailOrMobile, password);
    if (success) {
      const freshUser = useAuthStore.getState().user;
      if (freshUser?.role === "admin" || freshUser?.role === "super_admin") {
        router.push("/admin");
      } else if (freshUser?.role === "franchise") {
        router.push("/franchise-portal");
      } else {
        router.push("/dashboard");
      }
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Column: Branding / Info */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white relative overflow-hidden">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">Jeevandayni</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl xl:text-5xl font-heading font-extrabold leading-tight">
            Build Your Health.<br />
            Secure Your Wealth.
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Manage your network, track matching binary commissions, purchase Ayurvedic products, and monitor your franchise outlets.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md">
            <p className="text-sm italic text-white/90">
              &quot;Jeevandayni has enabled me to transition from a corporate role to a full-time health advocate. The automated payouts and network metrics are incredibly seamless.&quot;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold font-heading">
                RK
              </div>
              <div>
                <p className="text-xs font-semibold">Rajesh Kumar</p>
                <p className="text-[10px] text-white/60">Diamond Partner, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-white/50 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-secondary" />
          <span>Secured with enterprise grade encryption.</span>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative">
        <div className="absolute top-8 right-8 text-sm">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Link href="/register" className="font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors">
            Register
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-heading font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to manage your Jeevandayni account</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            {(loginError || error) && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl p-3.5">
                {loginError || error}
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="emailOrMobile">Email or Mobile Number</Label>
              <Input
                id="emailOrMobile"
                type="text"
                placeholder="you@example.com or 9876543210"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
                className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs font-semibold text-brand-primary hover:underline">
                  Forgot?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-base shadow-lg shadow-brand-primary/10 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Signing In...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
