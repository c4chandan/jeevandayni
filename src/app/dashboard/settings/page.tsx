"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { User, Shield, KeyRound, Loader2, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobile || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock save delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your personal profile details and security configurations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Navigation Sidebar */}
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-primary/10 text-brand-primary">
            Profile Settings
          </button>
          <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            Security & 2FA
          </button>
          <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            Notifications
          </button>
        </div>

        {/* Content Panel */}
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 pb-4">
              <CardTitle className="text-lg font-bold font-heading text-foreground">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {success && (
                <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm rounded-xl p-3.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Profile details saved successfully!
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground font-medium"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground font-medium"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold rounded-xl flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 pb-4">
              <CardTitle className="text-lg font-bold font-heading text-foreground">
                MLM Network Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-border/40 pb-3">
                <span className="text-muted-foreground font-medium">Sponsor ID</span>
                <span className="font-semibold text-foreground font-mono">{user?.sponsorId || "SPONSOR123"}</span>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-3">
                <span className="text-muted-foreground font-medium">Sponsor Name</span>
                <span className="font-semibold text-foreground">Sunita Devi (Diamond Partner)</span>
              </div>
              <div className="flex justify-between pb-3">
                <span className="text-muted-foreground font-medium">Date of Joining</span>
                <span className="font-semibold text-foreground">
                  {user?.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : new Date().toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
