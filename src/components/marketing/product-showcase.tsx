"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Badge as BadgeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS } from "@/lib/constants";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Premium <span className="gradient-text">Ayurvedic</span> Products
          </h2>
          <p className="text-lg text-muted-foreground">
            AYUSH-approved, GMP-certified formulations crafted from ancient
            wisdom and backed by modern science.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MOCK_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/20 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                {/* Placeholder gradient for product image */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🌿</div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  {product.isBestSeller && (
                    <Badge className="bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5">
                      BEST SELLER
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5">
                      NEW
                    </Badge>
                  )}
                </div>

                {/* Discount badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-brand-danger text-white text-xs font-bold px-2 py-1 rounded-lg">
                    -{product.discount}%
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                  <Link href={`/product/${product.slug}`}>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full w-11 h-11 bg-white/90 hover:bg-white text-foreground shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Button
                    size="icon"
                    className="rounded-full w-11 h-11 bg-brand-primary hover:bg-brand-primary-dark text-white shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1.5">
                  {product.category}
                </p>
                <h3 className="font-heading font-semibold text-base mb-1.5 group-hover:text-brand-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "text-brand-accent fill-brand-accent"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviewCount.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold font-heading text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.mrp}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white text-xs font-semibold rounded-lg transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="bg-transparent border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-xl px-8 transition-all duration-300"
            >
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
