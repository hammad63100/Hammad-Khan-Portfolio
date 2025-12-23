import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { BackgroundIcons } from "@/components/BackgroundIcons";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hammad Khan",
    "jobTitle": "Blockchain Developer",
    "description": "Blockchain Developer specializing in Solidity smart contracts, Ethereum development, and Node.js backend APIs. Building secure, decentralized applications.",
    "url": "https://hammadkhan.dev",
    "email": "me.hammadkhan.dev@gmail.com",
    "telephone": "+923390017132",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    },
    "sameAs": [
      "https://github.com/hammad63100",
      "https://www.linkedin.com/in/hammadkhan63100"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Islamia College University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peshawar",
        "addressCountry": "Pakistan"
      }
    },
    "knowsAbout": [
      "Blockchain Development",
      "Smart Contracts",
      "Solidity",
      "Ethereum",
      "Web3.js",
      "ethers.js",
      "Node.js",
      "Express.js",
      "NFT Development",
      "DeFi",
      "Hardhat",
      "Truffle"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Bachelor's Degree",
      "name": "BS Software Engineering",
      "educationalLevel": "Bachelor"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Hammad Khan | Blockchain Developer & Smart Contract Engineer | Pakistan</title>
        <meta
          name="title"
          content="Hammad Khan | Blockchain Developer & Smart Contract Engineer | Pakistan"
        />
        <meta
          name="description"
          content="Hire Hammad Khan - Expert Blockchain Developer specializing in Solidity smart contracts, Ethereum dApps, NFT marketplaces, and Node.js backend development. Based in Pakistan with experience at Octaloop Technologies."
        />
        <meta
          name="keywords"
          content="Hammad Khan, Blockchain Developer Pakistan, Solidity Developer, Smart Contract Developer, Ethereum Developer, Web3 Developer, NFT Developer, DeFi Developer, Node.js Developer, Backend Developer Pakistan, Blockchain Engineer, dApp Developer, ERC-20, ERC-721, Hardhat, Truffle, Web3.js, ethers.js, Crypto Developer"
        />
        <meta name="author" content="Hammad Khan" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hammadkhan.dev" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hammadkhan.dev" />
        <meta property="og:title" content="Hammad Khan | Blockchain Developer & Smart Contract Engineer" />
        <meta
          property="og:description"
          content="Expert Blockchain Developer specializing in Solidity smart contracts, Ethereum dApps, NFT marketplaces, and scalable backend solutions with Node.js."
        />
        <meta property="og:site_name" content="Hammad Khan Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://hammadkhan.dev" />
        <meta name="twitter:title" content="Hammad Khan | Blockchain Developer & Smart Contract Engineer" />
        <meta
          name="twitter:description"
          content="Expert Blockchain Developer specializing in Solidity smart contracts, Ethereum dApps, NFT marketplaces, and scalable backend solutions."
        />
        <meta name="twitter:creator" content="@hammadkhan63100" />

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#0d1117" />
        <meta name="msapplication-TileColor" content="#0d1117" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Peshawar, Pakistan" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <BackgroundIcons />
        <Navbar />
        <main>
          <HeroSection />
          <ScrollReveal animation="slide-right">
            <AboutSection />
          </ScrollReveal>
          <ScrollReveal delay={100} animation="zoom-in">
            <EducationSection />
          </ScrollReveal>
          <ScrollReveal delay={100} animation="slide-left">
            <ExperienceSection />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ProjectsSection />
          </ScrollReveal>
          <ScrollReveal delay={100} animation="rotate-in">
            <SkillsSection />
          </ScrollReveal>
          <ScrollReveal delay={100} animation="bounce-in">
            <ContactSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
