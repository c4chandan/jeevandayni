import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Legal docs
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground font-semibold">Last Updated: June 23, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert text-muted-foreground text-sm leading-relaxed space-y-6">
          <p>
            By using Jeevandayni&apos;s wellness marketplace, distributor dashboard, or franchise system, you agree to comply with our code of conduct, referral policies, and service terms.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">1. Distributor Eligibility</h3>
          <p>
            You must be at least 18 years of age and legally qualified to form agreements in India to sign up as an independent partner or sponsor under our MLM compensation network.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">2. Compliance & Marketing</h3>
          <p>
            Independent partners must represent Ayurvedic products truthfully. Exaggerated medical or health claims are strictly prohibited and may result in immediate suspension.
          </p>
        </div>
      </div>
    </div>
  );
}
