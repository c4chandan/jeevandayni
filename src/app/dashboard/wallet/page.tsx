"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ArrowUpRight, ArrowDownLeft, Landmark, Send, Loader2 } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";

const mockTransactions = [
  { id: "TXN1001", type: "credit", category: "Binary Matching Bonus", amount: 4200, date: "2026-06-23", status: "completed" },
  { id: "TXN1002", type: "credit", category: "Direct Referral Bonus", amount: 1500, date: "2026-06-22", status: "completed" },
  { id: "TXN1003", type: "debit", category: "Wallet Withdrawal Request", amount: 10000, date: "2026-06-20", status: "completed" },
  { id: "TXN1004", type: "credit", category: "Binary Matching Bonus", amount: 8400, date: "2026-06-19", status: "completed" },
  { id: "TXN1005", type: "debit", category: "Wallet Withdrawal Request", amount: 5000, date: "2026-06-15", status: "completed" },
];

export default function WalletPage() {
  const { user } = useAuthStore();
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(false);

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) return;

    setIsSubmitting(true);
    // Mock request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setPayoutSuccess(true);
    setWithdrawAmount("");
    setTimeout(() => setPayoutSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">Wallet & Payouts</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor your direct selling earnings and manage bank withdrawal requests.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Balance & Quick Withdraw Form */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-2xl border-border/60 shadow-sm bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
            <CardHeader>
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Available E-Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-extrabold font-heading text-brand-primary flex items-center font-numbers">
                <IndianRupee className="w-8 h-8 shrink-0" />
                {(42500).toLocaleString("en-IN")}
              </div>
              
              <div className="pt-4 border-t border-border flex justify-between text-xs text-muted-foreground">
                <div>
                  <p>Total Earned</p>
                  <p className="font-bold text-foreground mt-0.5 font-numbers">₹56,600</p>
                </div>
                <div className="text-right">
                  <p>Total Withdrawn</p>
                  <p className="font-bold text-foreground mt-0.5 font-numbers">₹14,100</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold font-heading">
                Request Bank Payout
              </CardTitle>
            </CardHeader>
            <CardContent>
              {payoutSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs rounded-xl p-4 text-center">
                  Withdrawal request submitted successfully! Funds will credit within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleWithdraw} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Amount (INR)
                    </label>
                    <input
                      type="number"
                      placeholder="Min ₹500"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                    />
                  </div>

                  <div className="p-3 bg-muted/40 border border-border/60 rounded-xl space-y-1.5">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Destination Bank Account
                    </p>
                    <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                      <Landmark className="w-4 h-4 text-muted-foreground" />
                      <span>SBI Bank Checking (•••• 4321)</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !withdrawAmount}
                    className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        Request Payout <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Transaction Log */}
        <div className="lg:col-span-2">
          <Card className="rounded-3xl border-border/60 shadow-sm h-full flex flex-col justify-between">
            <CardHeader className="border-b border-border/40 pb-4">
              <CardTitle className="text-lg font-bold font-heading text-foreground">
                Transaction History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                    <th className="p-4 pl-6">ID</th>
                    <th className="p-4">Description</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4 pr-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-sm">
                  {mockTransactions.map((txn) => {
                    const isCredit = txn.type === "credit";
                    return (
                      <tr key={txn.id} className="hover:bg-muted/10 transition-colors">
                        <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{txn.id}</td>
                        <td className="p-4 font-medium text-foreground">{txn.category}</td>
                        <td className="p-4 text-muted-foreground text-xs">{txn.date}</td>
                        <td className={`p-4 font-bold font-numbers ${isCredit ? "text-emerald-600" : "text-brand-danger"}`}>
                          {isCredit ? "+" : "-"}₹{txn.amount.toLocaleString("en-IN")}
                        </td>
                        <td className="p-4 pr-6">
                          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            {txn.status}
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
      </div>
    </div>
  );
}
