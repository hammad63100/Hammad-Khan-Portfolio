import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    BS Software Engineering
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Islamia College University, Peshawar, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>09/2020 - 08/2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
