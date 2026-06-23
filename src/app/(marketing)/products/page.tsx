"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, ShoppingCart, SlidersHorizontal, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "price-asc" | "price-desc" | "rating">("default");

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
                     (selectedCategory === "immunity" && product.category.includes("Immunity")) ||
                     (selectedCategory === "digestive" && product.category.includes("Digestive")) ||
                     (selectedCategory === "skin-hair" && product.category.includes("Skin")) ||
                     (selectedCategory === "joint-bone" && product.category.includes("Joint")) ||
                     (selectedCategory === "personal-care" && product.category.includes("Personal")) ||
                     (selectedCategory === "nutrition" && product.category.includes("Nutrition"))
      );
    }

    // Filter by Search Query
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center lg:text-left">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-3">
            Wellness Catalog
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            Our Premium <span className="gradient-text">Ayurvedic Formulations</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            100% natural, AYUSH-certified wellness products designed to restore harmony and balance.
          </p>
        </div>

        {/* Toolbar: Search, Filters & Sort */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10 bg-card border border-border p-4 rounded-2xl shadow-sm">
          {/* Search bar */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-border rounded-xl focus-visible:ring-brand-primary"
            />
          </div>

          {/* Sort selection & Mobile filters summary */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-end">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="bg-background border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary text-foreground"
              >
                <option value="default">Default Sorting</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Average Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-heading font-bold text-base mb-4 text-foreground">Categories</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-brand-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span>All Categories</span>
                </button>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === cat.slug
                        ? "bg-brand-primary text-white"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span>
                      {cat.icon} &nbsp; {cat.name}
                    </span>
                    <Badge variant="outline" className="text-[10px] ml-2">
                      {cat.productCount}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-card border border-dashed rounded-3xl"
                >
                  <p className="text-lg text-muted-foreground">No products found matching your search criteria.</p>
                  <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} className="mt-4 bg-brand-primary text-white">
                    Reset Filters
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Product Header / Tag */}
                      <div className="relative aspect-square bg-muted flex items-center justify-center p-8 group">
                        <div className="w-32 h-32 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {product.category.includes("Immunity") ? "🛡️" : product.category.includes("Digestive") ? "🫁" : product.category.includes("Skin") ? "✨" : "🌿"}
                        </div>
                        {product.isBestSeller && (
                          <Badge className="absolute top-4 left-4 bg-amber-500 text-white font-medium">
                            Best Seller
                          </Badge>
                        )}
                        {product.isNew && (
                          <Badge className="absolute top-4 left-4 bg-brand-secondary text-white font-medium">
                            New Arrival
                          </Badge>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                            <span className="text-xs font-bold text-foreground">{product.rating}</span>
                            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                          </div>

                          <Link href={`/product/${product.slug}`} className="hover:text-brand-primary transition-colors">
                            <h3 className="font-heading font-bold text-base text-foreground line-clamp-1 mb-1">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed mb-4">
                            {product.shortDescription}
                          </p>
                        </div>

                        <div>
                          {/* Price */}
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-lg font-bold text-brand-primary flex items-center font-numbers">
                              <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                              {product.price}
                            </span>
                            <span className="text-xs text-muted-foreground line-through flex items-center font-numbers">
                              <IndianRupee className="w-2.5 h-2.5 shrink-0" />
                              {product.mrp}
                            </span>
                            <span className="text-[10px] text-brand-secondary font-bold">
                              {product.discount}% OFF
                            </span>
                          </div>

                          {/* CTA */}
                          <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-medium rounded-xl flex items-center justify-center gap-2">
                            <ShoppingCart className="w-4 h-4" /> Add to Cart
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
