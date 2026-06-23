"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Boxes, ShieldAlert, ArrowUpRight, TrendingUp, Users } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const salesPerformance = [
  { name: "Week 1", sales: 125000 },
  { name: "Week 2", sales: 180000 },
  { name: "Week 3", sales: 145000 },
  { name: "Week 4", sales: 210000 },
];

const mockRecentSales = [
  { id: "SAL5091", clientName: "Amit Kumar", items: "Immunity Shield Pro x5", amount: 2995, date: "2026-06-23", commission: 898 },
  { id: "SAL5092", clientName: "Rani Patel", items: "DigestiCare x2, GlowSkin x1", amount: 1697, date: "2026-06-22", commission: 509 },
  { id: "SAL5093", clientName: "Vikram Sen", items: "JointFlex Gold x3", amount: 2097, date: "2026-06-21", commission: 629 },
  { id: "SAL5094", clientName: "Sanjay Dutt", items: "VitaBoost x4", amount: 2196, date: "2026-06-19", commission: 658 },
];

export default function FranchiseOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-brand-accent to-brand-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-brand-accent/10">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="relative z-10 space-y-2">
          <Badge className="bg-white/15 text-white border-white/20">
            District Territory Exclusivity Active
          </Badge>
          <h1 className="text-3xl font-bold font-heading">Franchise Terminal Overview</h1>
          <p className="text-white/80 max-w-xl text-sm leading-relaxed">
            Monitor stock health, record retail sales to local downline members, and claim your 30% direct retail profit margin.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Monthly Revenue
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
              <IndianRupee className="w-4 h-4 text-brand-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(660000).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-brand-secondary font-semibold flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +24% growth this month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Inventory Value
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <Boxes className="w-4 h-4 text-brand-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(185000).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              50 product categories stocked
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Retail Commissions
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground flex items-center font-numbers">
              <IndianRupee className="w-5 h-5 shrink-0" />
              {(198000).toLocaleString("en-IN")}
            </div>
            <p className="text-xs text-brand-secondary font-semibold mt-1.5">
              30% average profit margin
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Low Stock Alerts
            </CardTitle>
            <div className="w-8 h-8 rounded-lg bg-brand-danger/10 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-brand-danger" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-brand-danger">
              4 Products
            </div>
            <p className="text-xs text-brand-danger font-semibold mt-1.5">
              Restock action required
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Sales Log */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              Sales Volume Trend
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesPerformance}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#F59E0B"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorSales)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Sales list */}
        <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden flex flex-col justify-between">
          <CardHeader className="border-b border-border/40 pb-4">
            <CardTitle className="text-lg font-bold font-heading text-foreground">
              Recent Sales
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                  <th className="p-3 pl-5">Client</th>
                  <th className="p-3">Total</th>
                  <th className="p-3 pr-5">Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-sm">
                {mockRecentSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-3 pl-5">
                      <p className="font-semibold text-foreground">{sale.clientName}</p>
                      <p className="text-[10px] text-muted-foreground truncate max-w-[120px]">{sale.items}</p>
                    </td>
                    <td className="p-3 font-semibold font-numbers text-foreground">₹{sale.amount}</td>
                    <td className="p-3 pr-5 font-bold font-numbers text-emerald-600">+₹{sale.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
