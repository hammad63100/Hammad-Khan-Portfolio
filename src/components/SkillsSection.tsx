import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Wrench, Lightbulb, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Networks & Platforms",
    icon: Globe,
    skills: [
      "Ethereum",
      "Polygon",
      "Solana",
      "Binance Smart Chain (BSC)",
      "Bitcoin",
      "Hyperledger",
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: [
      "Solidity",
      "JavaScript",
      "Hardhat",
      "Truffle",
      "Web3.js",
      "Ethers.js",
    ],
  },
  {
    title: "Web3 Tools",
    icon: Wrench,
    skills: [
      "MetaMask",
      "IPFS",
      "Chainlink",
      "Ganache",
      "Remix IDE",
    ],
  },
  {
    title: "Key Concepts",
    icon: Lightbulb,
    skills: [
      "Smart Contract",
      "dApp (Decentralized App)",
      "Crypto Wallet",
      "NFT (Non-Fungible Token)",
      "DAO",
      "DeFi",
      "Token (ERC-20 / ERC-721)",
    ],
  },
  {
    title: "General Dev Tools",
    icon: Settings,
    skills: [
      "GitHub",
      "Docker",
      "GraphQL",
      "Node.js",
    ],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-secondary/50 text-muted-foreground text-sm rounded-md hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
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
