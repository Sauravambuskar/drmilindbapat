import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, ShieldAlert, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Urology Treatment",
    description:
      "Comprehensive treatment for diseases and conditions affecting the urinary system including bladder, kidney, ureter, urethra, and adrenal glands. Specialist in urinary incontinence treatment.",
    image: "/images/hero-3.png",
  },
  {
    icon: HeartPulse,
    title: "Andrology Treatment",
    description:
      "Expert treatment for male infertility, erectile dysfunction, ejaculation disorders, hormonal imbalance, penile prosthesis surgery, and microsurgical sperm retrieval (PESA/TESA).",
    image: "/images/hero-4.jpg",
  },
  {
    icon: ShieldAlert,
    title: "Kidney Cancer",
    description:
      "Specialized diagnosis and treatment of renal cell carcinoma and other kidney cancers. Advanced surgical techniques with focus on early detection and best possible outcomes.",
    image: "/images/hero-6.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Specialized Medical Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  {service.description}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto" asChild>
                  <a href="tel:+918042757407" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Book Appointment
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
