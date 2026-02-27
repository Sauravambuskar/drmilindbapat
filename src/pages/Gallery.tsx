import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Clinic Gallery | Dr. Milind Bapat Urology Clinic Pune"
        description="View photos of Dr. Milind Bapat's urology clinic in Pune. Modern facilities, advanced medical equipment, and a comfortable patient environment."
        keywords="urology clinic pune photos, dr milind bapat clinic, clinic gallery pune, urology hospital pune"
        canonical="/gallery"
      />
      <Navbar />
      <div className="pt-20" />
      <GallerySection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Gallery;
