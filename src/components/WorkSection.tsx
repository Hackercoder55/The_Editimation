import { portfolioConfig } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="relative py-24 md:py-32 overflow-hidden noise-bg"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
      
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`} style={{ animationFillMode: 'forwards' }}>
          <h2 className="section-title text-primary glow-yellow mb-2">PREVIOUS</h2>
          <h2 className="section-title text-foreground -mt-4">WORK</h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-card group aspect-video opacity-0 ${isInView ? 'animate-scale-in' : ''}`}
              style={{ animationFillMode: 'forwards', animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Thumbnail */}
              <img
                src={getYouTubeThumbnail(video.id)}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Play Button Overlay */}
              <div className="video-overlay">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground box-glow-yellow transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 ml-1" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium uppercase tracking-wider bg-secondary/80 text-secondary-foreground rounded">
                  {video.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-border overflow-hidden">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkSection;
