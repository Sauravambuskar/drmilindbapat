import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Dr. Milind Bapat | Best Urologist & Andrologist in Pune"
        description="Dr. Milind Bapat is the best urologist and andrologist in Pune with 30+ years of experience. Expert in urology, andrology, kidney cancer treatment, male infertility, and erectile dysfunction."
        keywords="best urologist in pune, urologist pune, andrologist pune, dr milind bapat, urology treatment pune, kidney cancer specialist pune, male infertility doctor pune, erectile dysfunction treatment pune, prostate treatment pune"
        canonical="/"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
