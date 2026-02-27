import { motion } from "framer-motion";
import { Phone, MapPin, Clock, GraduationCap, Award, Stethoscope, Heart, ShieldCheck, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/919822032496?text=Hello%20Dr.%20Bapat%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

const qualifications = [
  { title: "MS (Surgery)", institution: "B.J. Medical College, Pune" },
  { title: "DNB (Urology)", institution: "National Board of Examinations, New Delhi" },
  { title: "Fellowship Training", institution: "Advanced Uro-Oncology & Andrology" },
];

const expertise = [
  "Urinary Tract Infections (UTI)",
  "Kidney Stones & Lithotripsy",
  "Prostate Disorders (BPH)",
  "Urinary Incontinence",
  "Male Infertility",
  "Erectile Dysfunction",
  "Penile Prosthesis Surgery",
  "PESA / TESA Procedures",
  "Kidney Cancer Treatment",
  "Bladder & Ureter Conditions",
  "Hormonal Imbalance in Men",
  "Minimally Invasive Urology",
];

const memberships = [
  "Urological Society of India (USI)",
  "Indian Medical Association (IMA)",
  "Maharashtra Medical Council",
  "Association of Surgeons of India",
  "International Society of Urology",
  "Pune Urological Society",
];

const achievements = [
  "Successfully performed 5,000+ urological surgeries",
  "Pioneer in laser lithotripsy techniques in Pune",
  "Regular speaker at national urology conferences",
  "Published research in peer-reviewed journals",
  "Trained multiple urology residents and fellows",
  "Recognized for excellence in patient care by USI",
];

const DoctorSection = () => {
  return (
    <section id="doctor" className="bg-background">
      {/* Hero Banner */}
      <div className="bg-navy text-primary-foreground py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-glow font-semibold text-sm uppercase tracking-wider">Meet The Doctor</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
                Dr. Milind Bapat
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-2 font-display">
                Consultant Urologist & Andrologist
              </p>
              <p className="text-sm text-teal-glow font-medium mb-6">
                MS (Surg) · DNB (Urology) · 30+ Years Experience
              </p>
              <p className="text-primary-foreground/60 leading-relaxed mb-8 text-base">
                Dr. Milind Bapat is one of the most reliable and respected Urologists in Shivajinagar, Pune. A practicing consulting Urosurgeon since 1992, he brings over three decades of experience specializing in all kinds of consultations related to Urology & Andrology. His patient-first philosophy, combined with surgical precision, has earned him the trust of over 10,000 patients.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Book Appointment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:+918042757407">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
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
                  alt="Dr. Milind Bapat - Urologist in Pune"
                  className="rounded-2xl w-full max-w-md shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-glow/30 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Qualifications & Education */}
      <div className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Education & Qualifications</h3>
              </div>
              <div className="space-y-4">
                {qualifications.map((q) => (
                  <div key={q.title} className="bg-card rounded-xl p-5 shadow-[var(--shadow-soft)]">
                    <p className="font-display font-semibold text-foreground text-lg">{q.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{q.institution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Professional Memberships</h3>
              </div>
              <div className="space-y-3">
                {memberships.map((m) => (
                  <div key={m} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-[var(--shadow-soft)]">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground text-sm font-medium">{m}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Achievements & Recognition</h3>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {achievements.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)] flex items-center gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Stethoscope className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Areas of Expertise</h3>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized in a wide range of urological and andrological conditions with advanced surgical techniques.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)] flex items-center gap-3 hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <Heart className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinic Locations */}
      <div className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Clinic Locations & Timings</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "TARA, Dr. Nakhare Clinic",
                address: "3rd Floor, 301, Kanchan B-Wing, Above Maruti Showroom, Senapati Bapat Road, Shivajinagar, Pune",
                timing: "Mon, Wed, Fri — 1 PM to 4 PM",
                mapLink: "https://maps.google.com/?q=18.521917874160355,73.8292696326971",
              },
              {
                name: "Jupiter Hospital",
                address: "Eastern Express Highway, Baner Road, Pune",
                timing: "Tue, Thu, Sat — 11 AM to 12 PM",
                mapLink: "https://maps.google.com/?q=Jupiter+Hospital+Pune",
              },
            ].map((clinic, i) => (
              <motion.div
                key={clinic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-lg">{clinic.name}</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{clinic.address}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{clinic.timing}</p>
                  </div>
                </div>
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-navy text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Ready to Book Your Appointment?
            </h3>
            <p className="text-primary-foreground/60 mb-8">
              Send us a message on WhatsApp with your details and we'll confirm your appointment slot.
            </p>
            <Button size="lg" className="gap-2 text-base" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
