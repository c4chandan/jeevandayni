"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boxes, ShieldAlert, ArrowUpRight, CheckCircle2, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockInventory = [
  { id: "PRD101", name: "Immunity Shield Pro", category: "Immunity & Wellness", stock: 12, minStock: 20, price: 599, status: "low" },
  { id: "PRD102", name: "DigestiCare Plus", category: "Digestive Health", stock: 45, minStock: 15, price: 449, status: "healthy" },
  { id: "PRD103", name: "GlowSkin Kumkumadi Oil", category: "Skin & Hair Care", stock: 8, minStock: 10, price: 799, status: "low" },
  { id: "PRD104", name: "JointFlex Gold", category: "Joint & Bone Health", stock: 3, minStock: 10, price: 699, status: "low" },
  { id: "PRD105", name: "HairVita Bhringraj Oil", category: "Skin & Hair Care", stock: 24, minStock: 12, price: 399, status: "healthy" },
  { id: "PRD106", name: "VitaBoost Multivitamin", category: "Nutrition", stock: 2, minStock: 10, price: 549, status: "low" },
];

export default function FranchiseInventoryPage() {
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  const handleRestockRequest = async () => {
    setIsRequesting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsRequesting(false);
    setRequestSuccess(true);
    setTimeout(() => setRequestSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground">Inventory Control</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your franchise shelf stocks, identify low inventory counts, and order direct warehouse refills.
          </p>
        </div>

        <Button
          onClick={handleRestockRequest}
          disabled={isRequesting}
          className="bg-brand-accent hover:bg-brand-accent-light text-brand-dark font-semibold rounded-xl flex items-center gap-1.5 h-11 px-6 shadow-md"
        >
          {isRequesting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              <RotateCcw className="w-4 h-4" /> Bulk Restock Low Items
            </>
          )}
        </Button>
      </div>

      {requestSuccess && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm rounded-xl p-4 flex items-center gap-2 max-w-xl mx-auto text-center justify-center">
          <CheckCircle2 className="w-5 h-5 shrink-0" /> Restock request sent to central warehouse! Orders verified.
        </div>
      )}

      {/* Grid: Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total Shelfed Items
            </CardTitle>
            <Boxes className="w-4 h-4 text-brand-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground font-numbers">
              94 Units
            </div>
            <p className="text-xs text-muted-foreground mt-1">Current active store count</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Low Stock Warnings
            </CardTitle>
            <ShieldAlert className="w-4 h-4 text-brand-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-brand-danger font-numbers">
              4 Categories
            </div>
            <p className="text-xs text-brand-danger font-semibold mt-1">Refills highly recommended</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm bg-gradient-to-br from-brand-accent/5 to-brand-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Central Shipment Status
            </CardTitle>
            <ArrowUpRight className="w-4 h-4 text-brand-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading text-foreground">
              In Transit
            </div>
            <p className="text-xs text-muted-foreground mt-1">Expected delivery in 2 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Shelfed Product Stock Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">SKU Code</th>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">In Stock</th>
                <th className="p-4">Min stock limit</th>
                <th className="p-4">Wholesale Price</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {mockInventory.map((item) => {
                const isLow = item.status === "low";
                return (
                  <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 pl-6 font-mono text-xs text-muted-foreground">{item.id}</td>
                    <td className="p-4 font-semibold text-foreground">{item.name}</td>
                    <td className="p-4 text-xs text-muted-foreground">{item.category}</td>
                    <td className="p-4 font-bold font-numbers text-foreground">{item.stock} Units</td>
                    <td className="p-4 font-semibold font-numbers text-muted-foreground">{item.minStock} Units</td>
                    <td className="p-4 font-bold font-numbers text-foreground">₹{item.price.toLocaleString("en-IN")}</td>
                    <td className="p-4 pr-6">
                      <Badge className={isLow ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse" : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"}>
                        {isLow ? "Low Stock" : "Healthy"}
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
