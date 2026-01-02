import { portfolioConfig } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-24 md:py-32 overflow-hidden noise-bg"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`} style={{ animationFillMode: 'forwards' }}>
          <h2 className="section-title text-primary glow-yellow mb-2">CLIENT</h2>
          <h2 className="section-title text-foreground -mt-4">REVIEWS</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 glass-card rounded-2xl hover-lift opacity-0 ${isInView ? 'animate-scale-in' : ''}`}
              style={{ animationFillMode: 'forwards', animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Quote className="w-5 h-5" />
              </div>

              {/* Content */}
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <a 
                href={(testimonial as any).link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden ring-2 ring-transparent group-hover:ring-primary transition-all">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
