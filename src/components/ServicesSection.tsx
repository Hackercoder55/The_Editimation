import { portfolioConfig } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import { Youtube, Film, Sparkles, Palette } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  youtube: <Youtube className="w-8 h-8" />,
  film: <Film className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
  palette: <Palette className="w-8 h-8" />,
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 md:py-32 overflow-hidden bg-card noise-bg"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`} style={{ animationFillMode: 'forwards' }}>
          <h2 className="section-title text-secondary glow-green mb-2">WHAT I</h2>
          <h2 className="section-title text-foreground -mt-4">OFFER</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioConfig.services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 glass-card rounded-2xl hover-lift opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`}
              style={{ animationFillMode: 'forwards', animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-xl bg-secondary/10 text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
