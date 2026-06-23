import { Badge } from "@/components/ui/badge";

export default function RefundPolicyPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Legal docs
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Refund & Return Policy
          </h1>
          <p className="text-xs text-muted-foreground font-semibold">Last Updated: June 23, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert text-muted-foreground text-sm leading-relaxed space-y-6">
          <p>
            We take pride in the premium quality of our Ayurvedic products. If you or your customers are not completely satisfied, you may claim a refund according to our return policy.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">1. Return Window</h3>
          <p>
            Unopened bottles and packages in their original seals can be returned to any local franchise store or returned directly to our Haridwar hub within 30 days of the invoice date.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">2. Payout Reversals</h3>
          <p>
            In the event of a successful return, PV, BV, and binary matching commissions generated from the returned items will be adjusted from the upline&apos;s pending balance cycle.
          </p>
        </div>
      </div>
    </div>
  );
}
