import { motion } from "framer-motion";
import { Phone, MessageCircle, Award, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/919822032496?text=Hello%20Dr.%20Bapat%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden py-20 sm:py-24 lg:py-0">
      <div className="absolute inset-0">
        <img
          src="/images/hero-medical.jpg"
          alt="Modern urology clinic - Dr. Milind Bapat, Best Urologist in Pune"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-navy/95 via-navy/80 sm:via-navy/70 to-navy/60 sm:to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              35+ Years of Excellence in Urology
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3 sm:mb-4">
              Dr. Milind Bapat
              <span className="block text-teal-glow text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1.5 sm:mt-2 font-medium">
                Best Urologist & Andrologist in Pune
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-3 sm:mb-4 max-w-lg">
              Practicing consulting Urosurgeon since 1992, specializing in Urology, Andrology, Kidney Cancer Treatment, Male Infertility & Erectile Dysfunction with compassionate, patient-centric care.
            </p>

            <p className="text-xs sm:text-sm text-primary-foreground/60 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              MS (Surgery) · DNB (Urology) · OPD at TARA Clinic · Consultant at MJM Hospital (Ghole Road), Ratna Memorial Hospital & Jupiter Hospital, Pune
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="gap-2 text-base w-full sm:w-auto" asChild>
                <a href="tel:+919822032496">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" className="gap-2 text-base w-full sm:w-auto" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book Appointment
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/15"
          >
            {[
              { value: "35+", label: "Years Experience", icon: Clock },
              { value: "20,000+", label: "Patients Treated", icon: Users },
              { value: "MS, DNB", label: "Qualifications", icon: Award },
              { value: "2", label: "Clinic Locations", icon: Shield },
            ].map((stat) => {
              const content = (
                <>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-glow" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-teal-glow whitespace-nowrap">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs text-primary-foreground/60 leading-tight">{stat.label}</p>
                  </div>
                </>
              );
              if (stat.label === "Clinic Locations") {
                return (
                  <Link
                    key={stat.label}
                    to="/contact"
                    className="flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                    data-testid="link-clinic-locations"
                  >
                    {content}
                  </Link>
                );
              }
              return (
                <div key={stat.label} className="flex items-center gap-2.5 sm:gap-3">
                  {content}
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3"
        >
          {[
            "Urological Society of India Member",
            "Indian Medical Association",
            "Minimally Invasive Surgery Expert",
            "Advanced Laser Lithotripsy",
          ].map((badge) => (
            <span key={badge} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/70 text-[11px] sm:text-xs font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
