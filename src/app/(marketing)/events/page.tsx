import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Video } from "lucide-react";

export default function EventsPage() {
  const events = [
    { title: "National Ayurvedic Wellness Summit 2026", date: "July 12, 2026", location: "New Delhi, India", type: "Conference" },
    { title: "MLM Leader Strategy Seminar", date: "August 04, 2026", location: "Goa, India", type: "Seminar" },
    { title: "Digital Franchise Onboarding Bootcamp", date: "Weekly", location: "Online Webinar", type: "Webinar" },
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-3 py-1">
            Events
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Upcoming Gatherings & Seminars
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Connect with healthcare experts, system leaders, and franchise business owners nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <Card key={idx} className="rounded-3xl border-border/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <Badge variant="outline" className="text-brand-primary border-brand-primary/30">
                    {event.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {event.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-foreground leading-snug">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {event.location.includes("Online") ? (
                    <Video className="w-4 h-4 text-brand-secondary" />
                  ) : (
                    <MapPin className="w-4 h-4 text-brand-secondary" />
                  )}
                  {event.location}
                </p>
                <Button className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl h-10 font-semibold mt-2">
                  Register Ticket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
