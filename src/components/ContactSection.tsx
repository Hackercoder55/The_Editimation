import { portfolioConfig } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Mail, ArrowUpRight, MessageCircle, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioConfig.socials.email}?subject=Project Inquiry&body=Hi Santosh, I would like to discuss a video editing project with you.`;
    setShowContactOptions(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Santosh, I would like to discuss a video editing project with you.");
    window.open(`https://wa.me/${portfolioConfig.socials.whatsapp}?text=${message}`, '_blank');
    setShowContactOptions(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 md:py-32 overflow-hidden bg-card noise-bg"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container px-4 md:px-6">
        <div className={`max-w-4xl mx-auto opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`} style={{ animationFillMode: 'forwards' }}>
          {/* Heading */}
          <div className="text-center">
            <h2 className="section-title text-foreground mb-4">
              LET'S <span className="text-primary glow-yellow">CREATE</span>
            </h2>
            <h2 className="section-title text-foreground -mt-6 mb-8">
              TOGETHER
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Ready to elevate your content? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto mb-16 glass-card p-6 md:p-8 rounded-2xl">
            <ContactForm />
          </div>

          {/* CTA Button with Options */}
          <div className="text-center relative mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              Work with Me
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>

            {/* Contact Options Popup */}
            {showContactOptions && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col gap-3 p-4 glass-card rounded-xl animate-fade-in-up z-50 min-w-[200px]">
                <button
                  onClick={() => setShowContactOptions(false)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 text-foreground transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Send Email</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 text-foreground transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span>WhatsApp</span>
                </button>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-6 opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`} style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
            <a
              href={portfolioConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full glass-card text-foreground hover:bg-primary hover:text-primary-foreground hover:box-glow-yellow transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={portfolioConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full glass-card text-foreground hover:bg-destructive hover:text-foreground transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${portfolioConfig.socials.email}`}
              className="w-14 h-14 flex items-center justify-center rounded-full glass-card text-foreground hover:bg-secondary hover:text-secondary-foreground hover:box-glow-green transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
