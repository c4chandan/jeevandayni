"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ArrowUpRight, BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const incomeBreakdown = [
  { name: "Direct", amount: 15400 },
  { name: "Matching", amount: 26800 },
  { name: "Level", amount: 6200 },
  { name: "Leadership", amount: 8000 },
];

const mockLogs = [
  { id: "INC101", type: "Binary Matching", amount: 4200, date: "2026-06-23", note: "1:1 matching left/right legs" },
  { id: "INC102", type: "Direct Referral", amount: 1500, date: "2026-06-22", note: "Referral of Rohan Gupta" },
  { id: "INC103", type: "Binary Matching", amount: 8400, date: "2026-06-19", note: "2:2 matching left/right legs" },
  { id: "INC104", type: "Level Bonus", amount: 450, date: "2026-06-18", note: "Level 3 purchase commission" },
  { id: "INC105", type: "Royalty Pool", amount: 5000, date: "2026-06-15", note: "Monthly Diamond pool turnover share" },
];

export default function IncomeLogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">Income Log</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Detailed ledger of your matching binary commissions, direct referrals, and level rewards.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Stats cards & charts */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-2xl border-border/60 shadow-sm bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
            <CardHeader>
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Total Accumulative Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold font-heading text-brand-primary flex items-center font-numbers">
                <IndianRupee className="w-7 h-7 shrink-0" />
                {(56400).toLocaleString("en-IN")}
              </div>
              <p className="text-xs text-brand-secondary font-semibold flex items-center gap-1 mt-1.5">
                <ArrowUpRight className="w-3.5 h-3.5" /> +18% growth month-over-month
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold font-heading">
                Income Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[200px] p-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incomeBreakdown} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#0F766E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Log Ledger */}
        <div className="lg:col-span-2">
          <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden h-full flex flex-col justify-between">
            <CardHeader className="border-b border-border/40 pb-4">
              <CardTitle className="text-lg font-bold font-heading text-foreground">
                Earnings Ledger
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                    <th className="p-4 pl-6">ID</th>
                    <th className="p-4">Income Type</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Description</th>
                    <th className="p-4 pr-6">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-sm">
                  {mockLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-muted/10 transition-colors">
                      <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{log.id}</td>
                      <td className="p-4 font-semibold text-foreground">{log.type}</td>
                      <td className="p-4 text-muted-foreground text-xs">{log.date}</td>
                      <td className="p-4 text-xs text-muted-foreground">{log.note}</td>
                      <td className="p-4 pr-6 font-bold font-numbers text-emerald-600">
                        +₹{log.amount.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
