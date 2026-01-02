import { portfolioConfig } from "@/config/portfolio";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-display tracking-wider text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {portfolioConfig.name.split(" ")[0]}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <Button
                variant="hero"
                size="sm"
                onClick={() => window.open(portfolioConfig.socials.instagram, "_blank")}
              >
                Work with Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-3xl font-display tracking-wide text-foreground hover:text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="lg"
            className={`mt-4 ${isMobileMenuOpen ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open(portfolioConfig.socials.instagram, "_blank");
            }}
          >
            Work with Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
