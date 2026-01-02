import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float stagger-3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <div 
            className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase bg-muted/50 rounded-full border border-border/50 text-muted-foreground">
              {portfolioConfig.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className={`hero-title text-primary glow-yellow opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {portfolioConfig.title}
          </h1>

          {/* Name */}
          <h2 
            className={`text-5xl md:text-7xl lg:text-8xl font-display tracking-tight text-foreground/90 -mt-2 md:-mt-4 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            {portfolioConfig.name}
          </h2>

          {/* Software Badges */}
          <div 
            className={`flex flex-wrap gap-4 mt-8 justify-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#00005B] rounded-lg">
              <span className="text-xl font-bold text-[#9999FF]">Pr</span>
              <span className="text-sm text-foreground/70">Premiere Pro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#00005B] rounded-lg">
              <span className="text-xl font-bold text-[#9999FF]">Ae</span>
              <span className="text-sm text-foreground/70">After Effects</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mt-12 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open(portfolioConfig.socials.instagram, '_blank')}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Work with Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToWork}
              className="border-border/50 hover:bg-muted/50"
            >
              View Portfolio
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div 
          className={`flex flex-col items-center gap-2 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''} cursor-pointer`}
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          onClick={scrollToWork}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
