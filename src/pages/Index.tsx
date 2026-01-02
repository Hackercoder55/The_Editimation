import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { portfolioConfig } from "@/config/portfolio";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{portfolioConfig.name} | {portfolioConfig.title}</title>
        <meta name="description" content={`${portfolioConfig.name} - Professional ${portfolioConfig.title}. ${portfolioConfig.about.description.slice(0, 150)}...`} />
        <meta name="keywords" content="video editor, youtube editor, video editing, motion graphics, after effects, premiere pro" />
        <meta property="og:title" content={`${portfolioConfig.name} | ${portfolioConfig.title}`} />
        <meta property="og:description" content={portfolioConfig.about.description.slice(0, 150)} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <main className="relative overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
