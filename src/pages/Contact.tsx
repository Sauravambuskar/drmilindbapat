import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Dr. Milind Bapat | Book Appointment | Urologist Pune"
        description="Contact Dr. Milind Bapat, the best urologist in Pune. Book an appointment via WhatsApp or call. Clinic at Senapati Bapat Road, Shivajinagar and Jupiter Hospital."
        keywords="contact urologist pune, book appointment dr milind bapat, urologist phone number pune, urology clinic pune contact"
        canonical="/contact"
      />
      <Navbar />
      <div className="pt-20" />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
