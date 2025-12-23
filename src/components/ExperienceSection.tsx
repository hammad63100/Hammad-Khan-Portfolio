import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Backend Developer",
    company: "SAT Software House",
    period: "November 2025 - Present",
    location: "",
    highlights: [
      "Developed robust backend services using Node.js and Express.js",
      "Current Project: HIRE Expert - Handling complete backend architecture",
      "Managing distinct modules for Customer, Seller, and Admin panels",
      "Ensuring seamless data flow and security across all user roles",
    ],
  },
  {
    title: "Blockchain Developer Intern",
    company: "OCTALOOP TECHNOLOGIES",
    period: "3 Months Duration",
    location: "Lahore, Pakistan",
    highlights: [
      "Specialized in cutting-edge Blockchain and AI solutions",
      "Focused on Blockchain development and Node Development",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-sm z-10" />

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-accent mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <MapPin className="w-4 h-4 ml-2" />
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
