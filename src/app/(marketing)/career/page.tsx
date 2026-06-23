import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function CareerPage() {
  const jobs = [
    { title: "Ayurvedic Product Researcher", dept: "R&D", location: "Haridwar, India", type: "Full-Time" },
    { title: "Senior Frontend Engineer (Next.js)", dept: "Engineering", location: "Remote, India", type: "Full-Time" },
    { title: "Franchise Development Manager", dept: "Sales", location: "Mumbai, India", type: "Full-Time" },
    { title: "Wellness Consultant Liaison", dept: "Support", location: "New Delhi, India", type: "Part-Time" },
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Careers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Join Our Wellness Mission
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Help us build the future of natural healthcare technology and direct-to-consumer Ayurvedic distribution.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <Card key={idx} className="rounded-3xl border-border/60 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                    <Badge variant="outline" className="text-brand-primary border-brand-primary/30">
                      {job.dept}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button className="bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl h-10 px-5 font-semibold">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
