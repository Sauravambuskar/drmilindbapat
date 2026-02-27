import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Dr. Milind Bapat | Senior Urologist in Pune"
        description="Learn about Dr. Milind Bapat, a senior urologist and andrologist in Pune with over 30 years of experience in urology, andrology, and kidney cancer treatment."
        keywords="about dr milind bapat, urologist pune, senior urologist pune, andrology specialist, urology experience pune"
        canonical="/about"
      />
      <Navbar />
      <div className="pt-20" />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
