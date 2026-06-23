"use client";

import { useAuthStore } from "@/store/auth-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Wallet,
  IndianRupee,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const performanceData = [
  { name: "Jan", earnings: 4500 },
  { name: "Feb", earnings: 7800 },
  { name: "Mar", earnings: 12000 },
  { name: "Apr", earnings: 18500 },
  { name: "May", earnings: 24000 },
  { name: "Jun", earnings: 32500 },
];

export default function DashboardOverview() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-brand-primary/10">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="relative z-10 space-y-2">
          <Badge className="bg-white/15 text-white border-white/20">
            {user?.rank.name} Status Active
          </Badge>
          <h1 className="text-3xl font-bold font-heading">Welcome back, {user?.name}!</h1>
          <p className="text-white/80 max-w-xl text-sm leading-relaxed">
            Your binary legs are generating matching sales. Support your downline to qualify for matching leadership rewards.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Wallet Balance
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(42500).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-brand-secondary font-semibold flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> Direct payout verified
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Active Referrals
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground font-numbers">
              18
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              12 Left Leg &bull; 6 Right Leg
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Matching Volume
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-brand-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(184000).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-brand-secondary font-semibold flex items-center gap-1 mt-1.5">
              +14% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              KYC Status
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground">
              Verified
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              Bank details attached
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart & Activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Earnings chart */}
        <Card className="lg:col-span-2 rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              Earnings Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F766E" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0F766E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#0F766E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorEarnings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity feed */}
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              Network Logs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { text: "Amit Sharma registered on Left Leg", time: "2 hours ago" },
              { text: "Binary matching bonus credited: ₹4,200", time: "4 hours ago" },
              { text: "KYC document review completed", time: "1 day ago" },
              { text: "Product Order #JV1084 shipped", time: "2 days ago" },
            ].map((log, i) => (
              <div key={i} className="flex flex-col gap-0.5 border-b border-border/40 pb-3 last:border-0 last:pb-0">
                <span className="text-sm font-medium text-foreground">{log.text}</span>
                <span className="text-xs text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
