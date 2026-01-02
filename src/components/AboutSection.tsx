import { portfolioConfig } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden noise-bg"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Title */}
          <div className={`opacity-0 ${isInView ? 'animate-slide-in-left' : ''}`} style={{ animationFillMode: 'forwards' }}>
            <h2 className="section-title text-primary glow-yellow">
              ABOUT
            </h2>
            <h2 className="section-title text-foreground -mt-4">
              ME
            </h2>
            
            {/* Experience Badge */}
            <div className="mt-8 inline-flex items-center gap-4 p-4 glass-card rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl border border-primary/30">
                <span className="text-3xl font-display text-primary">{portfolioConfig.about.yearsExperience}</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Years of</p>
                <p className="text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 opacity-0 ${isInView ? 'animate-slide-in-right' : ''}`} style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {portfolioConfig.about.description}
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioConfig.about.skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors cursor-default opacity-0 ${isInView ? 'animate-scale-in' : ''}`}
                    style={{ animationFillMode: 'forwards', animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
