import profilePhoto from "@/assets/profile-photo.jpeg";

const orbitingIcons = [
  { icon: "⟠", label: "Ethereum", color: "hsl(var(--primary))" },
  { icon: "◈", label: "Polygon", color: "#8247E5" },
  { icon: "◎", label: "Solana", color: "#14F195" },
  { icon: "⬡", label: "BSC", color: "#F3BA2F" },
  { icon: "₿", label: "Bitcoin", color: "#F7931A" },
  { icon: "⬢", label: "Web3", color: "hsl(var(--accent))" },
  { icon: "◆", label: "Chainlink", color: "#375BD2" },
  { icon: "⬣", label: "IPFS", color: "#65C2CB" },
  { icon: "⏣", label: "Hardhat", color: "#FFF100" },
  { icon: "◇", label: "MetaMask", color: "#E2761B" },
  { icon: "⎔", label: "Truffle", color: "#5E464D" },
  { icon: "⌬", label: "DeFi", color: "#00D395" },
];

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

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo with Orbiting Icons */}
          <div className="relative flex-shrink-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Orbiting Icons Container */}
              <div className="absolute inset-0 animate-spin-slow">
                {orbitingIcons.slice(0, 6).map((item, index) => {
                  const angle = (index * 360) / 6;
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50 hover:scale-110 transition-transform cursor-default shadow-lg"
                        title={item.label}
                      >
                        <span className="text-lg md:text-xl" style={{ color: item.color }}>{item.icon}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Second Orbit - Slower, Different Direction */}
              <div className="absolute inset-0 animate-spin-slower">
                {orbitingIcons.slice(6, 12).map((item, index) => {
                  const angle = (index * 360) / 6 + 30;
                  const radius = 170;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse-slow"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div 
                        className="w-8 h-8 md:w-10 md:h-10 bg-card/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/30 hover:scale-110 transition-transform cursor-default shadow-md"
                        title={item.label}
                      >
                        <span className="text-base md:text-lg" style={{ color: item.color }}>{item.icon}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Glowing Ring */}
              <div className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 animate-pulse" />
              
              {/* Profile Image */}
              <div className="absolute inset-8 md:inset-10 rounded-full overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/20">
                <img
                  src={profilePhoto}
                  alt="Hammad Khan - Blockchain Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="text-center lg:text-left space-y-6 max-w-xl">
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
        </div>
      </div>
    </section>
  );
};
