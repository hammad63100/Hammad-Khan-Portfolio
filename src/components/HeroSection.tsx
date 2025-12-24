import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div>
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-slide-down">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="text-foreground">Hammad</span>{" "}
            <span className="text-gradient">Khan</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-right" style={{ animationDelay: '400ms' }}>
            Blockchain Developer & Backend Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed animate-slide-left" style={{ animationDelay: '600ms' }}>
            Building secure and efficient smart contracts on Ethereum, alongside
            scalable backend APIs with Node.js. Passionate about decentralized
            systems and innovative blockchain solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary animate-zoom-in"
              style={{ animationDelay: '800ms' }}
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 animate-zoom-in"
              style={{ animationDelay: '900ms' }}
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 gap-2 animate-zoom-in"
              style={{ animationDelay: '1000ms' }}
              asChild
            >
              <a href="/resume.pdf" download="Hammad_Khan_Resume.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/hammad63100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-bounce-in"
              style={{ animationDelay: '1100ms' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hammadkhan63100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-bounce-in"
              style={{ animationDelay: '1200ms' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:me.hammadkhan.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-bounce-in"
              style={{ animationDelay: '1300ms' }}
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+923390017132"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-bounce-in"
              style={{ animationDelay: '1400ms' }}
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
