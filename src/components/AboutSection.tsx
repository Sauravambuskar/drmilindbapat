import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Consultant Urologist & Andrologist",
  "MS (Surgery), DNB (Urology)",
  "Practicing since 1992",
  "Expert in minimally invasive procedures",
  "Patient-centric approach",
  "Available at TARA Clinic & Jupiter Hospital",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src="/images/hero-5.jpg"
                alt="Dr. Milind Bapat at clinic"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                <p className="text-primary-foreground font-display text-xl font-semibold">Dr. Milind Bapat</p>
                <p className="text-primary-foreground/70 text-sm">MS (Surg), DNB (Urology)</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              Trusted Urology & Andrology Care in Pune
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Milind Bapat is one of the most reliable and respected Urologists in Shivajinagar, Pune. A practicing consulting Urosurgeon since 1992, he brings over three decades of experience specializing in all kinds of consultations related to Urology & Andrology.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe the patient–physician relationship is unique, confidential, and sacred. Our practice strives to maintain this philosophy while providing world-class urological care.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
