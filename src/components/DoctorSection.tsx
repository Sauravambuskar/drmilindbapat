import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorSection = () => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-glow font-semibold text-sm uppercase tracking-wider">Meet The Doctor</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-6">
              Dr. Milind Bapat
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-2 font-display">
              Urology & Andrology Specialist
            </p>
            <p className="text-primary-foreground/60 leading-relaxed mb-8">
              Dr. Milind Bapat is a practicing consulting Urosurgeon since 1992, having experience of more than three decades. He specializes in all kinds of consultations related to Urology & Andrology and is known for his compassionate patient care and surgical expertise.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-glow mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/70">
                  TARA, Dr. Nakhare Clinic, 3rd Floor, 301, Kanchan B-Wing, Above Maruti Showroom, Senapati Bapat Road, Shivajinagar, Pune
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-glow mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Mon, Wed, Fri — 1 PM to 4 PM (TARA Clinic)</p>
                  <p>Tue, Thu, Sat — 11 AM to 12 PM (Jupiter Hospital)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-glow mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/70">+91 8042757407</p>
              </div>
            </div>

            <Button size="lg" className="gap-2" asChild>
              <a href="tel:+918042757407">
                <Phone className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/images/doctor.jpg"
                alt="Dr. Milind Bapat"
                className="rounded-2xl w-full max-w-md shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-glow/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
