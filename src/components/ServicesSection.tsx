import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, ShieldAlert, MessageCircle, Droplets, Pill, Microscope, Syringe, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_BASE = "https://wa.me/919822032496?text=";

const services = [
  {
    icon: Stethoscope,
    title: "Urology Treatment",
    description:
      "Comprehensive treatment for diseases and conditions affecting the urinary system including bladder, kidney, ureter, urethra, and adrenal glands. Specialist in urinary incontinence, overactive bladder, and urethral stricture treatment.",
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
    title: "Kidney Cancer Treatment",
    description:
      "Specialized diagnosis and treatment of renal cell carcinoma and other kidney cancers. Advanced surgical techniques with focus on early detection, nephron-sparing surgery, and best possible outcomes.",
    image: "/images/hero-6.jpg",
  },
  {
    icon: Droplets,
    title: "Kidney Stone Management (RIRS with Laser)",
    description:
      "Complete kidney stone care including ESWL (shock wave lithotripsy), RIRS with laser & ureteroscopy with laser lithotripsy, PCNL (including Mini and Ultra-Mini PCNL) for large stones, and preventive counseling to reduce recurrence risk.",
    image: "/images/hero-1.jpg",
  },
  {
    icon: Pill,
    title: "Prostate Disorders (BPH)",
    description:
      "Diagnosis and treatment of benign prostatic hyperplasia (BPH) including medical management, TURP, laser prostatectomy, and minimally invasive options like UroLift for improved urinary flow.",
    image: "/images/hero-2.jpg",
  },
  {
    icon: Microscope,
    title: "Male Infertility & PESA/TESA",
    description:
      "Advanced evaluation and treatment of male infertility including hormonal therapy, varicocelectomy, microsurgical sperm retrieval (PESA/TESA/Micro-TESE), and assisted reproductive guidance.",
    image: "/images/gallery-3.jpg",
  },
  {
    icon: Syringe,
    title: "Penile Prosthesis Surgery",
    description:
      "Expert penile implant surgery for men with erectile dysfunction who haven't responded to other treatments. High satisfaction rates (>90%) with both inflatable and semi-rigid prostheses.",
    image: "/images/gallery-4.jpg",
  },
  {
    icon: Activity,
    title: "UTI & Bladder Conditions",
    description:
      "Comprehensive management of urinary tract infections, recurrent UTIs, interstitial cystitis, bladder cancer screening, and neurogenic bladder with evidence-based treatment protocols.",
    image: "/images/gallery-5.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16 px-2"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2 leading-tight break-words">
            Specialized Medical Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Dr. Milind Bapat offers comprehensive urological and andrological services using the latest techniques and equipment, ensuring the best outcomes for every patient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group flex flex-col h-full"
            >
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto mt-auto self-start" asChild>
                  <a href={`${WHATSAPP_BASE}${encodeURIComponent(`Hello Dr. Bapat, I would like to book an appointment for ${service.title}. Please share available slots.`)}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
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
