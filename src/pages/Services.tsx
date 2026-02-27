import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Urology & Andrology Services | Dr. Milind Bapat Pune"
        description="Comprehensive urology and andrology services in Pune by Dr. Milind Bapat. Treatment for kidney stones, prostate disorders, male infertility, erectile dysfunction, and kidney cancer."
        keywords="urology services pune, andrology treatment pune, kidney stone treatment, prostate treatment pune, male infertility treatment, erectile dysfunction doctor pune, kidney cancer treatment pune"
        canonical="/services"
      />
      <Navbar />
      <div className="pt-20" />
      <ServicesSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;
