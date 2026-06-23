"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, ArrowRight, ArrowLeft, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    sponsorId: "",
    binaryPosition: "LEFT",
    password: "",
  });
  const [validationError, setValidationError] = useState("");

  const handleNext = () => {
    setValidationError("");
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.mobile) {
        setValidationError("Please fill out all contact fields.");
        return;
      }
    } else if (step === 2) {
      if (!formData.sponsorId) {
        setValidationError("A Sponsor / Referral Code is required to join the MLM network.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setValidationError("");
    setStep((prev) => prev - 1);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");
    clearError();

    if (!formData.password) {
      setValidationError("Please choose a password.");
      return;
    }

    const success = await register(formData);
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Column: Info Branding */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-brand-secondary to-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />

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
            Claim Your Position.<br />
            Ignite Your Business.
          </h2>
          <p className="text-lg text-white/85 max-w-md">
            Join 10,000+ wellness partners. Claim your placement in our active binary legs and start accumulating downline volume today.
          </p>
        </div>

        <div className="relative z-10 text-xs text-white/50 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-white/70" />
          <span>ISO 9001:2015 & AYUSH Compliant registration portal.</span>
        </div>
      </div>

      {/* Right Column: Multi-Step Wizard Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative">
        <div className="absolute top-8 right-8 text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link href="/login" className="font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors">
            Login
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-brand-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-heading font-bold text-foreground">
              {step === 1 && "Create Account"}
              {step === 2 && "Sponsor Details"}
              {step === 3 && "Secure Account"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {step === 1 && "Start by filling in your basic contact details"}
              {step === 2 && "Provide the referral sponsor code from your referrer"}
              {step === 3 && "Setup a secure password to activate your account"}
            </p>
          </div>

          {validationError && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl p-3.5">
              {validationError}
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl p-3.5">
              {error}
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Devendra Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="devendra@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    />
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-base mt-4 flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="sponsorId">Sponsor / Referral Code</Label>
                    <Input
                      id="sponsorId"
                      type="text"
                      placeholder="SPONSOR123"
                      value={formData.sponsorId}
                      onChange={(e) => setFormData({ ...formData, sponsorId: e.target.value })}
                      className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Placement Position</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={formData.binaryPosition === "LEFT" ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, binaryPosition: "LEFT" })}
                        className={`py-6 rounded-xl border ${formData.binaryPosition === "LEFT" ? "bg-brand-primary border-brand-primary text-white" : ""}`}
                      >
                        Left Leg
                      </Button>
                      <Button
                        type="button"
                        variant={formData.binaryPosition === "RIGHT" ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, binaryPosition: "RIGHT" })}
                        className={`py-6 rounded-xl border ${formData.binaryPosition === "RIGHT" ? "bg-brand-primary border-brand-primary text-white" : ""}`}
                      >
                        Right Leg
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 py-6 rounded-xl flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="password">Set Secure Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-11 border-border rounded-xl focus-visible:ring-brand-primary"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      disabled={isLoading}
                      onClick={handleBack}
                      className="flex-1 py-6 rounded-xl flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Joining...
                        </>
                      ) : (
                        <>
                          Join Now <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
