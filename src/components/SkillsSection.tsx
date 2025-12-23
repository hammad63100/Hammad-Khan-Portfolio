import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Wrench, Lightbulb, Settings } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

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

const floatingIcons = [
  { icon: "⟠", label: "Ethereum", position: "top-0 left-1/4", delay: "0s" },
  { icon: "◈", label: "Polygon", position: "top-8 right-4", delay: "0.5s" },
  { icon: "◎", label: "Solana", position: "top-1/3 -left-2", delay: "1s" },
  { icon: "⬡", label: "BSC", position: "bottom-1/3 -right-2", delay: "1.5s" },
  { icon: "₿", label: "Bitcoin", position: "bottom-8 left-4", delay: "2s" },
  { icon: "⬢", label: "Web3", position: "bottom-0 right-1/4", delay: "2.5s" },
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

        {/* Profile Photo with Floating Icons */}
        <div className="flex justify-center mb-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} z-10 animate-float`}
                style={{ animationDelay: item.delay }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30 hover:border-primary hover:bg-primary/30 transition-all duration-300 cursor-default group">
                  <span className="text-lg md:text-xl text-primary">{item.icon}</span>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse" />
            
            {/* Profile Image */}
            <div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src={profilePhoto}
                alt="Hammad Khan - Blockchain Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
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
