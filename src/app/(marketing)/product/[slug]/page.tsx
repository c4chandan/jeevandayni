import { notFound } from "next/navigation";
import { Star, Shield, RefreshCcw, Truck, ShoppingCart, IndianRupee } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/products" className="hover:text-brand-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        {/* Product Details Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Product Image */}
          <div className="bg-card border border-border p-12 rounded-3xl flex items-center justify-center min-h-[400px]">
            <div className="w-48 h-48 bg-brand-primary/10 rounded-full flex items-center justify-center text-6xl">
              {product.category.includes("Immunity") ? "🛡️" : product.category.includes("Digestive") ? "🫁" : product.category.includes("Skin") ? "✨" : "🌿"}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4.5 h-4.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 stroke-amber-400"
                          : "text-muted border-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground mt-0.5">{product.rating}</span>
                <span className="text-sm text-muted-foreground mt-0.5">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.shortDescription}. Our formulas are compiled using the highest-quality raw herbs, processed at low temperatures to retain their natural wellness benefits.
            </p>

            {/* Price section */}
            <div className="bg-muted/40 border border-border/50 rounded-2xl p-5">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-extrabold text-brand-primary flex items-center font-numbers">
                  <IndianRupee className="w-6 h-6 shrink-0" />
                  {product.price}
                </span>
                <span className="text-sm text-muted-foreground line-through flex items-center font-numbers">
                  <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                  {product.mrp}
                </span>
                <Badge className="bg-brand-secondary text-white font-bold text-xs">
                  {product.discount}% OFF
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold text-base py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </Button>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center p-3">
                <Shield className="w-5 h-5 text-brand-primary mb-2" />
                <span className="text-xs font-semibold text-foreground">AYUSH Certified</span>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <RefreshCcw className="w-5 h-5 text-brand-primary mb-2" />
                <span className="text-xs font-semibold text-foreground">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <Truck className="w-5 h-5 text-brand-primary mb-2" />
                <span className="text-xs font-semibold text-foreground">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8">Related Wellness Formulations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-square bg-muted flex items-center justify-center p-8">
                  <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center text-4xl">
                    {p.category.includes("Immunity") ? "🛡️" : p.category.includes("Digestive") ? "🫁" : p.category.includes("Skin") ? "✨" : "🌿"}
                  </div>
                </div>
                <div className="p-5">
                  <Link href={`/product/${p.slug}`}>
                    <h3 className="font-heading font-bold text-base text-foreground hover:text-brand-primary transition-colors line-clamp-1 mb-1">
                      {p.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{p.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-primary flex items-center font-numbers">
                      <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                      {p.price}
                    </span>
                    <Link href={`/product/${p.slug}`}>
                      <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
