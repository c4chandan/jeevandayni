"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileText, Landmark, UploadCloud, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KycPage() {
  const [aadhaarUploaded, setAadhaarUploaded] = useState(true);
  const [panUploaded, setPanUploaded] = useState(true);
  const [bankUploaded, setBankUploaded] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">KYC Verification</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Submit identification documents to comply with direct selling regulations and activate bank withdrawals.
        </p>
      </div>

      {/* Verification Status Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Aadhaar */}
        <Card className="rounded-2xl border-border/60 shadow-sm flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold font-heading">Aadhaar Card</CardTitle>
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-muted-foreground">National identity verification</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                Verified
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">•••• •••• 5678</span>
            </div>
          </CardContent>
        </Card>

        {/* PAN Card */}
        <Card className="rounded-2xl border-border/60 shadow-sm flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold font-heading">PAN Card</CardTitle>
            <FileText className="w-5 h-5 text-brand-secondary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-muted-foreground">Tax identification verification</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                Verified
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">ABCDE1234F</span>
            </div>
          </CardContent>
        </Card>

        {/* Bank Passbook */}
        <Card className="rounded-2xl border-border/60 shadow-sm flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold font-heading">Bank Details</CardTitle>
            <Landmark className="w-5 h-5 text-brand-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-muted-foreground">Withdrawals destination checking</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                Verified
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">SBI Checking (•••• 4321)</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Portal / Placeholder Info */}
      <Card className="rounded-3xl border-border/50 p-8 lg:p-12 text-center max-w-2xl mx-auto shadow-sm">
        <div className="space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-heading text-foreground">KYC Verification Completed</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Your profile is fully verified. All regulatory requirements for matching binary commissions and franchise payouts are active.
            </p>
          </div>
          <div className="p-4 bg-muted/40 border border-border/60 rounded-2xl flex gap-3 text-left">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              If you ever need to update your payout bank account destination, please submit a service ticket to our admin panel for approval.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
