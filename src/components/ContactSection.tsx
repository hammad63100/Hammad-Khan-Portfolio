import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "me.hammadkhan.dev@gmail.com",
    href: "mailto:me.hammadkhan.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 339 0017132",
    href: "tel:+923390017132",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/hammad63100",
    href: "https://github.com/hammad63100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hammadkhan63100",
    href: "https://www.linkedin.com/in/hammadkhan63100",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm group cursor-pointer h-full">
                  <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {item.label}
                      </p>
                      <p className="text-foreground text-sm sm:text-base font-medium group-hover:text-primary transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
              asChild
            >
              <a href="mailto:me.hammadkhan.dev@gmail.com">
                <Send className="w-5 h-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
