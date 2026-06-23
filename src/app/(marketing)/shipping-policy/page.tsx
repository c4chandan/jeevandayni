import { Badge } from "@/components/ui/badge";

export default function ShippingPolicyPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Legal docs
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs text-muted-foreground font-semibold">Last Updated: June 23, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert text-muted-foreground text-sm leading-relaxed space-y-6">
          <p>
            We deliver our products across India using certified courier partners. Products are dispatched from central warehouses or nearest regional franchise depots.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">1. Processing Times</h3>
          <p>
            Orders confirmed before 2:00 PM are dispatched same-day. Franchise stock requests are packed and sent out within 48 hours.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">2. Delivery Estimates</h3>
          <p>
            D2C delivery takes between 3 to 7 working days depending on location. Franchise bulk deliveries are dispatched using priority logistics and typically arrive within 3 days.
          </p>
        </div>
      </div>
    </div>
  );
}
