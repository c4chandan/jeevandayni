"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, IndianRupee } from "lucide-react";

interface MockProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  pv: number;
  bv: number;
  stock: number;
}

const initialProducts: MockProduct[] = [
  { id: "P001", name: "Immunity Shield Pro", category: "Wellness", price: 599, pv: 18, bv: 36, stock: 120 },
  { id: "P002", name: "DigestiCare Plus", category: "Digestive Health", price: 449, pv: 14, bv: 28, stock: 85 },
  { id: "P003", name: "GlowSkin Kumkumadi Oil", category: "Skincare", price: 799, pv: 24, bv: 48, stock: 4 },
  { id: "P004", name: "JointFlex Gold", category: "Pain Relief", price: 699, pv: 20, bv: 40, stock: 200 },
  { id: "P005", name: "VitaBoost Daily Capsule", category: "Multivitamins", price: 549, pv: 16, bv: 32, stock: 0 },
];

export default function AdminProductsCRUD() {
  const [products, setProducts] = useState<MockProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdjustStock = (id: string, amount: number) => {
    setProducts((prev) =>
      prev.map((prod) => (prod.id === id ? { ...prod, stock: Math.max(0, prod.stock + amount) } : prod))
    );
  };

  const filteredProducts = products.filter(
    (prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading text-foreground">Product Catalog</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Maintain product catalog values, assign PV/BV tokens, and trigger restock thresholds.
          </p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl flex items-center gap-2 h-10 px-4">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-10 rounded-xl"
          />
        </div>
      </div>

      {/* Product List */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Inventory & Price Sheet
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">Product Details</th>
                <th className="p-4">Category</th>
                <th className="p-4">Distributor Price</th>
                <th className="p-4">PV / BV</th>
                <th className="p-4">Stock Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 pl-6 font-semibold text-foreground">
                      <div>{product.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">SKU: {product.id}</div>
                    </td>
                    <td className="p-4 text-foreground">{product.category}</td>
                    <td className="p-4 font-semibold text-foreground font-numbers">
                      ₹{product.price}
                    </td>
                    <td className="p-4 text-foreground font-semibold">
                      <span className="text-brand-primary">{product.pv} PV</span>
                      <span className="text-muted-foreground font-normal mx-1">/</span>
                      <span className="text-brand-secondary">{product.bv} BV</span>
                    </td>
                    <td className="p-4">
                      {product.stock === 0 ? (
                        <Badge className="bg-red-500/10 text-red-600 border-red-500/20 rounded-full px-2.5 py-0.5">
                          Out of Stock
                        </Badge>
                      ) : product.stock < 10 ? (
                        <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 rounded-full px-2.5 py-0.5">
                          Low: {product.stock}
                        </Badge>
                      ) : (
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 rounded-full px-2.5 py-0.5">
                          In Stock: {product.stock}
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex justify-end gap-1.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleAdjustStock(product.id, 50)}
                          className="h-8 w-8 text-brand-primary hover:bg-brand-primary/10 rounded-lg"
                          title="Restock +50"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
