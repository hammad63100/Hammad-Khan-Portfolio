import { ExternalLink, Github, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "Qryptum Blockchain (Proof of Data)",
    description:
      "Next-generation blockchain utilizing Proof of Data (PoD) consensus with quantum-resistant security through lattice-based cryptography. Features AI-driven validation and Data Contracts (DRC-20).",
    tech: ["Blockchain", "Cryptography", "AI", "Smart Contracts"],
    featured: true,
  },
  {
    title: "NFT Marketplace",
    description:
      "Full-featured NFT marketplace with auction and direct sales functionalities. Secure blockchain integration with low fees and automated smart contract processes.",
    tech: ["Solidity", "Web3.js", "React", "Smart Contracts"],
    featured: true,
  },
  {
    title: "Decentralized Voting System",
    description:
      "Final year project: Secure, transparent, and tamper-proof voting system using smart contracts for registration, voting, and result calculation.",
    tech: ["Solidity", "Web3.js", "React", "Truffle", "Node.js"],
    featured: true,
  },
  {
    title: "Escrow Marketplace",
    description:
      "Decentralized escrow smart contracts enabling secure peer-to-peer transactions with on-chain escrow and dispute-safe flows.",
    tech: ["Solidity", "Hardhat", "JavaScript", "Node.js"],
  },
  {
    title: "Crowdfunding Factory",
    description:
      "Factory pattern for spawning campaign contracts with contribution, withdrawal, and campaign state management.",
    tech: ["Solidity", "Hardhat", "JavaScript", "Mocha/Chai"],
  },
  {
    title: "Blockchain & API Integration",
    description:
      "Custom API to fetch and display smart contract deployment data on BSC using ethers.js and BscScan API.",
    tech: ["Node.js", "Express.js", "ethers.js", "BscScan API"],
  },
];

const otherProjects = [
  "ERC-20 Token Contract (Dogecoin Clone)",
  "Book Store Application (MERN Stack)",
  "Land Registry Management Smart Contract",
  "Election Smart Contract",
  "ATM Smart Contract",
  "Deposit & Withdrawal DApp",
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm group ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Layers className="w-10 h-10 text-primary" />
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-primary font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Other Notable Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherProjects.map((project, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                {project}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
