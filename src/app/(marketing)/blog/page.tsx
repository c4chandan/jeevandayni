import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { title: "Understanding Ayurvedic Doshas for Modern Lifestyles", category: "Health", author: "Dr. Sandeep Patel", date: "June 20, 2026", desc: "How to balance Vata, Pitta, and Kapha types using daily dietary routines and herbal remedies." },
    { title: "Building a Dual-Income MLM Network Successfully", category: "Business", author: "Rahul Varma", date: "June 18, 2026", desc: "A definitive guide to structuring binary leg registrations to maximize weekly matching bonuses." },
    { title: "Franchise Retail Operations: Best Practices for Outlets", category: "Franchise", author: "Sanjay Sen", date: "June 15, 2026", desc: "Optimize inventory turns, local distributor checkouts, and territory logistics mapping." },
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Insights & Guides
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Jeevandayni Wellness Blog
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stay up to date with healthy living protocols, business strategies, and community announcements.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, idx) => (
            <Card key={idx} className="rounded-3xl border-border/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-brand-primary border-brand-primary/30">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground tracking-tight leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground font-semibold">
                    <User className="w-3.5 h-3.5" /> Published by {post.author}
                  </div>
                </div>
                <div className="flex items-end">
                  <Button variant="ghost" className="text-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 rounded-xl gap-1 font-semibold group h-10 pr-3 pl-4">
                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
