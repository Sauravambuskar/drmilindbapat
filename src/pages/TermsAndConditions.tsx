import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms & Conditions | Dr. Milind Bapat"
        description="Terms and conditions for Dr. Milind Bapat's urology clinic services in Pune."
        keywords="terms conditions, urology clinic pune, dr milind bapat"
        canonical="/terms"
      />
      <Navbar />
      <div className="pt-20" />
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p>Last updated: February 2026</p>

            <h2 className="font-display text-xl font-semibold text-foreground">1. General Information</h2>
            <p>This website is operated by Dr. Milind Bapat, a practicing Urologist and Andrologist based in Pune, Maharashtra, India. By accessing and using this website, you agree to these terms and conditions.</p>

            <h2 className="font-display text-xl font-semibold text-foreground">2. Medical Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult Dr. Milind Bapat or a qualified healthcare professional for diagnosis and treatment. Do not disregard professional medical advice based on information found on this website.</p>

            <h2 className="font-display text-xl font-semibold text-foreground">3. Appointments</h2>
            <p>Appointment requests made through WhatsApp or phone are subject to availability. Confirmation of an appointment will be provided by the clinic. Please arrive on time for your scheduled appointment.</p>

            <h2 className="font-display text-xl font-semibold text-foreground">4. Privacy Policy</h2>
            <p>We respect your privacy. Any personal information shared through this website, WhatsApp, or phone calls is kept strictly confidential and used only for the purpose of providing medical services. We do not share your information with third parties.</p>

            <h2 className="font-display text-xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and blog articles, is the property of Dr. Milind Bapat and is protected by copyright laws. Unauthorized reproduction or distribution is prohibited.</p>

            <h2 className="font-display text-xl font-semibold text-foreground">6. Contact Information</h2>
            <p>For any queries regarding these terms, please contact:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phone: +91 8042757407</li>
              <li>Clinic: TARA, Dr. Nakhare Clinic, Senapati Bapat Road, Shivajinagar, Pune</li>
              <li>WhatsApp: +91 9822032496</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
