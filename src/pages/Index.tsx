import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hammad Khan | Blockchain Developer & Backend Engineer</title>
        <meta
          name="description"
          content="Hammad Khan - Blockchain Developer specializing in Solidity smart contracts, Ethereum development, and Node.js backend APIs. Building secure, decentralized applications."
        />
        <meta
          name="keywords"
          content="Blockchain Developer, Solidity, Smart Contracts, Ethereum, Web3, Node.js, Backend Developer"
        />
        <meta name="author" content="Hammad Khan" />
        <link rel="canonical" href="https://hammadkhan.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hammad Khan | Blockchain Developer" />
        <meta
          property="og:description"
          content="Blockchain Developer specializing in Solidity smart contracts and decentralized applications."
        />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hammad Khan | Blockchain Developer" />
        <meta
          name="twitter:description"
          content="Blockchain Developer specializing in Solidity smart contracts and decentralized applications."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
