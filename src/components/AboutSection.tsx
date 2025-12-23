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

        <div className="max-w-3xl mx-auto text-center space-y-6">
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
    </section>
  );
};
