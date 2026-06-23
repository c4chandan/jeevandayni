"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, GitFork, ClipboardCopy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockTeam = [
  { id: "M001", name: "Amit Sharma", role: "Emerald Star", joined: "2026-05-12", sales: 1240000, leg: "Left", status: "active" },
  { id: "M002", name: "Priya Patel", role: "Ruby Star", joined: "2026-05-18", sales: 1010000, leg: "Right", status: "active" },
  { id: "M003", name: "Rohan Gupta", role: "Gold Member", joined: "2026-06-01", sales: 520000, leg: "Left", status: "active" },
  { id: "M004", name: "Sanjana Verma", role: "Silver Member", joined: "2026-06-05", sales: 380000, leg: "Left", status: "active" },
  { id: "M005", name: "Vikram Malhotra", role: "Active Member", joined: "2026-06-12", sales: 190000, leg: "Right", status: "active" },
  { id: "M006", name: "Neha Joshi", role: "Inactive Member", joined: "2026-06-20", sales: 0, leg: "Right", status: "pending KYC" },
];

export default function TeamPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://jeevandayni.com/register?sponsor=SPONSOR123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">My Referral Team</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor your binary network legs, active downline members, and total team sales volume.
        </p>
      </div>

      {/* Grid: Network Stats & Link */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Binary Leg Distribution
            </CardTitle>
            <GitFork className="w-4 h-4 text-brand-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground">
              12 Left / 6 Right
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total downline network count</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Team Sales Volume
            </CardTitle>
            <Users className="w-4 h-4 text-brand-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground font-numbers">
              ₹33,40,000
            </div>
            <p className="text-xs text-muted-foreground mt-1">Combined Left & Right leg turnover</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Your Referral Link
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="w-full bg-background/50 border border-border/60 rounded-xl px-3 py-2 text-xs font-mono text-muted-foreground outline-none select-all"
            />
            <Button
              onClick={handleCopy}
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl text-xs py-5 font-semibold flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <ClipboardCopy className="w-4 h-4" /> Copy Referral Link
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Downline Members List */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Downline Partners
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">Partner ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Role/Rank</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4">Leg</th>
                <th className="p-4">Sales Volume</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {mockTeam.map((member) => {
                const isActive = member.status === "active";
                return (
                  <tr key={member.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{member.id}</td>
                    <td className="p-4 font-semibold text-foreground">{member.name}</td>
                    <td className="p-4 text-xs font-medium text-muted-foreground">{member.role}</td>
                    <td className="p-4 text-muted-foreground text-xs">{member.joined}</td>
                    <td className="p-4">
                      <Badge className={member.leg === "Left" ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-teal-500/10 text-teal-600 border-teal-500/20"}>
                        {member.leg}
                      </Badge>
                    </td>
                    <td className="p-4 font-bold font-numbers text-foreground">₹{member.sales.toLocaleString("en-IN")}</td>
                    <td className="p-4 pr-6">
                      <Badge className={isActive ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"}>
                        {member.status}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
