"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Percent, HelpCircle, ArrowUpRight } from "lucide-react";

export default function AdminMLMEngine() {
  const [binaryRatio, setBinaryRatio] = useState("1:1");
  const [matchingBonus, setMatchingBonus] = useState("10");
  const [dailyCapping, setDailyCapping] = useState("50000");
  const [directReferral, setDirectReferral] = useState("15");

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-heading text-foreground">MLM Compensation Engine</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Fine-tune compensation rules, binary matching formulas, referral incentives, and payout capping variables.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Core settings */}
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 pb-4">
              <CardTitle className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
                <Percent className="w-5 h-5 text-brand-primary" /> Active Plan Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="binaryRatio" className="text-sm font-semibold">Binary Matching Ratio</Label>
                  <Input
                    id="binaryRatio"
                    value={binaryRatio}
                    onChange={(e) => setBinaryRatio(e.target.value)}
                    className="rounded-xl h-10"
                  />
                  <p className="text-[10px] text-muted-foreground">Standard active ratio (default: 1:1 or 2:1 first pair)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="matchingBonus" className="text-sm font-semibold">Binary Matching Bonus (%)</Label>
                  <Input
                    id="matchingBonus"
                    type="number"
                    value={matchingBonus}
                    onChange={(e) => setMatchingBonus(e.target.value)}
                    className="rounded-xl h-10"
                  />
                  <p className="text-[10px] text-muted-foreground">Payout calculated based on business volume match</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="directReferral" className="text-sm font-semibold">Direct Referral Commission (%)</Label>
                  <Input
                    id="directReferral"
                    type="number"
                    value={directReferral}
                    onChange={(e) => setDirectReferral(e.target.value)}
                    className="rounded-xl h-10"
                  />
                  <p className="text-[10px] text-muted-foreground">Instant payout for sponsor&apos;s direct recruits</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dailyCapping" className="text-sm font-semibold">Daily Matching Capping (₹)</Label>
                  <Input
                    id="dailyCapping"
                    type="number"
                    value={dailyCapping}
                    onChange={(e) => setDailyCapping(e.target.value)}
                    className="rounded-xl h-10"
                  />
                  <p className="text-[10px] text-muted-foreground">Max matching payout per user per capping cycle</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-border/40 pt-4 mt-6">
                <Button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl h-10 px-6 font-semibold"
                >
                  {saving ? "Saving..." : saved ? "Parameters Updated!" : "Update Engine Parameters"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info card panel */}
        <div className="space-y-6">
          <Card className="rounded-3xl border-border/60 bg-muted/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold font-heading text-foreground flex items-center gap-1.5">
                <HelpCircle className="w-5 h-5 text-brand-secondary" /> Plan Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong>Binary Matching</strong>: The system counts Left Leg and Right Leg total Sales Volume (BV) and rewards matching bundles according to the chosen ratio.
              </p>
              <p>
                <strong>Capping Thresholds</strong> protect platform margins. Matching volume exceeding capping values is carried forward or flushed based on rank settings.
              </p>
              <div className="bg-brand-secondary/5 border border-brand-secondary/15 rounded-2xl p-4 mt-4 text-xs space-y-1 text-brand-secondary">
                <p className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Safety Valve Active
                </p>
                <p>System automatically halts matching payouts if payout-to-sales ratio exceeds 48% total.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
