"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ArrowUpRight, TrendingUp } from "lucide-react";

const mockSalesDetails = [
  { id: "SAL5091", clientName: "Amit Kumar", items: "Immunity Shield Pro x5", amount: 2995, date: "2026-06-23", commission: 898, position: "Left" },
  { id: "SAL5092", clientName: "Rani Patel", items: "DigestiCare x2, GlowSkin x1", amount: 1697, date: "2026-06-22", commission: 509, position: "Left" },
  { id: "SAL5093", clientName: "Vikram Sen", items: "JointFlex Gold x3", amount: 2097, date: "2026-06-21", commission: 629, position: "Right" },
  { id: "SAL5094", clientName: "Sanjay Dutt", items: "VitaBoost x4", amount: 2196, date: "2026-06-19", commission: 658, position: "Left" },
  { id: "SAL5095", clientName: "Gopal Rao", items: "HairVita x5, DigestiCare x2", amount: 2893, date: "2026-06-15", commission: 867, position: "Right" },
];

export default function FranchiseSalesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">Outlet Sales Log</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Detailed ledger of retail orders processed at your outlet and your associated franchise commissions.
        </p>
      </div>

      {/* Sales List Table */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Processed Retail Sales
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">Sale ID</th>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Items Sold</th>
                <th className="p-4">Date</th>
                <th className="p-4">Binary Placement</th>
                <th className="p-4">Total Price</th>
                <th className="p-4 pr-6">Franchise Profit (30%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {mockSalesDetails.map((sale) => (
                <tr key={sale.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{sale.id}</td>
                  <td className="p-4 font-semibold text-foreground">{sale.clientName}</td>
                  <td className="p-4 text-muted-foreground text-xs">{sale.items}</td>
                  <td className="p-4 text-muted-foreground text-xs">{sale.date}</td>
                  <td className="p-4">
                    <Badge className={sale.position === "Left" ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-teal-500/10 text-teal-600 border-teal-500/20"}>
                      {sale.position} Leg
                    </Badge>
                  </td>
                  <td className="p-4 font-bold font-numbers text-foreground">₹{sale.amount.toLocaleString("en-IN")}</td>
                  <td className="p-4 pr-6 font-bold font-numbers text-emerald-600">
                    +₹{sale.commission.toLocaleString("en-IN")}
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
