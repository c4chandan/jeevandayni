"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  IndianRupee,
  Boxes,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const performanceData = [
  { name: "Jan", revenue: 1200000, registrations: 450 },
  { name: "Feb", revenue: 1800000, registrations: 620 },
  { name: "Mar", revenue: 2400000, registrations: 890 },
  { name: "Apr", revenue: 3100000, registrations: 1100 },
  { name: "May", revenue: 4500000, registrations: 1450 },
  { name: "Jun", revenue: 5800000, registrations: 1890 },
];

export default function AdminDashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg border border-slate-700/50">
        <div className="absolute inset-0 gradient-mesh opacity-10" />
        <div className="relative z-10 space-y-2">
          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
            System Live & Secure
          </Badge>
          <h1 className="text-3xl font-bold font-heading text-slate-100">Welcome to Admin Control</h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            Manage system-wide metrics, oversee distributor networks, verify franchise actions, and approve payout batches.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              System Revenue
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(5800000).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +28% vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total Distributors
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground font-numbers">
              {(12450).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              1,890 joined this month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Franchise Outlets
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Boxes className="w-4 h-4 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground font-numbers">
              42
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              8 applications pending approval
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Pending KYC
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <FileCheck2 className="w-4 h-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-red-600 font-numbers">
              14
            </div>
            <p className="text-xs text-red-600 font-semibold mt-1.5">
              Needs verification review
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Panel */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              Sales Revenue & Growth Velocity
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorAdminRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F766E" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0F766E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0F766E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorAdminRev)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Real-time system log alerts */}
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              System Audit Stream
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { text: "KYC verified for distributor Rajesh Patel", time: "Just now" },
              { text: "Franchise 'Wellness India' approved in Pune", time: "25 mins ago" },
              { text: "Batch payout processing completed: ₹12.4 Lakhs", time: "2 hours ago" },
              { text: "Security policy update: 2FA forced on all admin accounts", time: "1 day ago" },
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
