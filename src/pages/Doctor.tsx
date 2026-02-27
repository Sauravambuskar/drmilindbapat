import Navbar from "@/components/Navbar";
import DoctorSection from "@/components/DoctorSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const Doctor = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Dr. Milind Bapat | Urologist & Andrologist Profile | Pune"
        description="Dr. Milind Bapat - MS Surgery, DNB Urology. 30+ years of experience as a urologist and andrologist in Pune. Consultant at Jupiter Hospital and TARA Clinic."
        keywords="dr milind bapat profile, urologist pune, andrologist pune, dnb urology, jupiter hospital urologist, urology specialist pune"
        canonical="/doctor"
      />
      <Navbar />
      <div className="pt-20" />
      <DoctorSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Doctor;
