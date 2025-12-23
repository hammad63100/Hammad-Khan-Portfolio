import { Card, CardContent } from "@/components/ui/card";
import { Blocks, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Blockchain",
    icon: Blocks,
    skills: [
      "Smart Contracts",
      "Ethereum",
      "Solidity",
      "OpenZeppelin",
      "ERC-20",
      "ERC-721",
      "Hardhat",
      "Truffle",
      "Ganache",
      "Web3.js",
      "ethers.js",
      "MetaMask",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Postman", "GitHub", "Git", "Microsoft Office"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary/50 text-muted-foreground text-sm rounded-md hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
