"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center">
            <Leaf className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-lg font-bold font-heading">Jeevandayni</span>
        </Link>
        <Link href="/login" className="text-sm font-semibold text-brand-primary hover:underline flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Login
        </Link>
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm max-w-md w-full">
          {!submitted ? (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold font-heading text-foreground">Forgot Password?</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Enter your email address, and we will send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    required
                  />
                </div>

                <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Reset Link
                </Button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <div>
                <h2 className="text-xl font-bold font-heading text-foreground">Check Your Email</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  We have sent reset instructions to <span className="font-semibold text-foreground">{email}</span>. Please check your inbox.
                </p>
              </div>
              <Link href="/login">
                <Button className="w-full mt-2 bg-brand-primary text-white py-6 rounded-xl font-semibold">
                  Back to Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jeevandayni. All rights reserved.
      </div>
    </div>
  );
}
