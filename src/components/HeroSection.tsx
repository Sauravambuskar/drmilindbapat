import { motion } from "framer-motion";
import { Phone, MessageCircle, Award, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/919822032496?text=Hello%20Dr.%20Bapat%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-medical.jpg"
          alt="Modern urology clinic - Dr. Milind Bapat, Best Urologist in Pune"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              30+ Years of Excellence in Urology
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Dr. Milind Bapat
              <span className="block text-teal-glow text-2xl sm:text-3xl lg:text-4xl mt-2 font-medium">
                Best Urologist & Andrologist in Pune
              </span>
            </h1>

            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-4 max-w-lg">
              Practicing consulting Urosurgeon since 1992, specializing in Urology, Andrology, Kidney Cancer Treatment, Male Infertility & Erectile Dysfunction with compassionate, patient-centric care.
            </p>

            <p className="text-sm text-primary-foreground/60 mb-8 max-w-lg">
              MS (Surgery) · DNB (Urology) · Consultant at Jupiter Hospital & TARA Clinic, Shivajinagar, Pune
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="tel:+918042757407">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book Appointment
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/15"
          >
            {[
              { value: "30+", label: "Years Experience", icon: Clock },
              { value: "10,000+", label: "Patients Treated", icon: Users },
              { value: "MS, DNB", label: "Qualifications", icon: Award },
              { value: "2", label: "Clinic Locations", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-teal-glow" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-teal-glow">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {[
            "Urological Society of India Member",
            "Indian Medical Association",
            "Minimally Invasive Surgery Expert",
            "Advanced Laser Lithotripsy",
          ].map((badge) => (
            <span key={badge} className="px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/70 text-xs font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
