"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Check, Search, Calendar, Landmark } from "lucide-react";

interface WithdrawalRequest {
  id: string;
  distributorId: string;
  distributorName: string;
  bankName: string;
  accountNumber: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
}

const initialWithdrawals: WithdrawalRequest[] = [
  { id: "WDR8001", distributorId: "JV0452", distributorName: "Deepak Sharma", bankName: "State Bank of India", accountNumber: "******4829", amount: 15000, status: "pending", date: "2026-06-23" },
  { id: "WDR8002", distributorId: "JV0854", distributorName: "Meera Nair", bankName: "HDFC Bank", accountNumber: "******7812", amount: 8400, status: "approved", date: "2026-06-22" },
  { id: "WDR8003", distributorId: "JV0921", distributorName: "Harish Varma", bankName: "ICICI Bank", accountNumber: "******9210", amount: 22000, status: "pending", date: "2026-06-21" },
  { id: "WDR8004", distributorId: "JV0112", distributorName: "Anil Kapoor", bankName: "Axis Bank", accountNumber: "******3321", amount: 4800, status: "rejected", date: "2026-06-20" },
];

export default function AdminWalletWithdrawals() {
  const [requests, setRequests] = useState<WithdrawalRequest[]>(initialWithdrawals);

  const handleApprove = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "approved" as const } : req))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-heading text-foreground">Withdrawal Claims Queue</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Review withdrawal request tickets, verify bank accounts, and approve payouts.
        </p>
      </div>

      {/* Withdrawal Queue list */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Pending & Past Withdrawals
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">Distributor Info</th>
                <th className="p-4">Bank Details</th>
                <th className="p-4">Requested Payout</th>
                <th className="p-4">Claim Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="font-semibold text-foreground">{req.distributorName}</div>
                    <div className="text-[10px] text-brand-primary font-bold">{req.distributorId}</div>
                  </td>
                  <td className="p-4 text-foreground">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                      <Landmark className="w-3.5 h-3.5" /> {req.bankName}
                    </div>
                    <div className="text-[10px] font-mono mt-0.5">AC: {req.accountNumber}</div>
                  </td>
                  <td className="p-4 font-bold font-numbers text-foreground flex items-center h-full pt-6">
                    <IndianRupee className="w-4 h-4 shrink-0" />
                    {req.amount.toLocaleString("en-IN")}
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <div className="flex items-center gap-1 text-xs">
                      <Calendar className="w-3.5 h-3.5" /> {req.date}
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                        req.status === "approved"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : req.status === "rejected"
                          ? "bg-red-500/10 text-red-600 border-red-500/20"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }`}
                    >
                      {req.status}
                    </Badge>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    {req.status === "pending" ? (
                      <Button
                        size="sm"
                        onClick={() => handleApprove(req.id)}
                        className="bg-brand-primary hover:bg-brand-primary/95 text-white rounded-lg px-3 flex items-center gap-1 h-8 ml-auto"
                      >
                        <Check className="w-3.5 h-3.5" /> Approve Payout
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground font-semibold uppercase">
                        Processed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
