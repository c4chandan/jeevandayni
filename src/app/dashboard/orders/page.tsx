"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Eye, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockOrders = [
  { id: "ORD9021", products: "Immunity Shield Pro x2, DigestiCare x1", amount: 1647, pv: 120, date: "2026-06-20", status: "delivered", payment: "paid" },
  { id: "ORD9022", products: "GlowSkin Kumkumadi Oil x1", amount: 799, pv: 60, date: "2026-06-18", status: "shipped", payment: "paid" },
  { id: "ORD9023", products: "JointFlex Gold x1, HairVita x1", amount: 1098, pv: 85, date: "2026-06-12", status: "delivered", payment: "paid" },
  { id: "ORD9024", products: "VitaBoost Multivitamin x2", amount: 1098, pv: 80, date: "2026-06-05", status: "delivered", payment: "paid" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground">Order History</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Track and review your product purchases and point values (PV) accumulated.
        </p>
      </div>

      {/* Orders List */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Product Orders
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">Order ID</th>
                <th className="p-4">Products Purchased</th>
                <th className="p-4">Date</th>
                <th className="p-4">Accumulated PV</th>
                <th className="p-4">Amount Paid</th>
                <th className="p-4">Payment</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {mockOrders.map((order) => {
                const isDelivered = order.status === "delivered";
                return (
                  <tr key={order.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{order.id}</td>
                    <td className="p-4 font-semibold text-foreground max-w-xs truncate">{order.products}</td>
                    <td className="p-4 text-muted-foreground text-xs">{order.date}</td>
                    <td className="p-4 font-semibold font-numbers text-brand-primary">{order.pv} PV</td>
                    <td className="p-4 font-bold font-numbers text-foreground">₹{order.amount.toLocaleString("en-IN")}</td>
                    <td className="p-4">
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                        {order.payment}
                      </Badge>
                    </td>
                    <td className="p-4 pr-6">
                      <Badge className={isDelivered ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-blue-500/10 text-blue-600 border-blue-500/20"}>
                        {order.status}
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
