import { portfolioConfig } from "@/config/portfolio";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo/Name */}
          <div className="text-xl font-display tracking-wider text-foreground">
            {portfolioConfig.name}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
