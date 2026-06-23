import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Legal docs
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground font-semibold">Last Updated: June 23, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert text-muted-foreground text-sm leading-relaxed space-y-6">
          <p>
            Welcome to Jeevandayni. We are committed to protecting your personal data and respecting your privacy. This policy describes how we collect, store, share, and process information gathered during registrations, product purchases, and franchise setups.
          </p>
          
          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">1. Information Collection</h3>
          <p>
            We collect personal identification details (name, email, phone number) when you register as a distributor, submit KYC certificates (Aadhaar, PAN, and Bank details for commissions), or make order checkouts.
          </p>

          <h3 className="text-base font-bold text-foreground mt-6 uppercase tracking-wider font-heading">2. Use of Information</h3>
          <p>
            Collected details are used to process product orders, verify compliance, calculate binary network matching payouts, issue tax reports, and update franchise inventory levels.
          </p>
        </div>
      </div>
    </div>
  );
}
