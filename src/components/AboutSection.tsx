import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Software Engineering graduate from Islamia College University with
              focused expertise in blockchain development. Skilled in writing
              secure and efficient smart contracts using Solidity on the
              Ethereum blockchain, alongside building scalable backend APIs with
              Node.js and Express.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Committed to clean, maintainable code and a solid understanding of
              decentralized systems, I am passionate about contributing to
              innovative blockchain projects and eager to grow my skills in a
              dynamic tech environment.
            </p>
          </div>

          {/* Education Card */}
          <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    BS Software Engineering
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
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
