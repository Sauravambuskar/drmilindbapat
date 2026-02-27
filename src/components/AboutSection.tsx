import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Users, Stethoscope, ShieldCheck } from "lucide-react";

const highlights = [
  "Consultant Urologist & Andrologist",
  "MS (Surgery), DNB (Urology)",
  "Practicing since 1992",
  "Expert in minimally invasive procedures",
  "Patient-centric approach",
  "Available at TARA Clinic & Jupiter Hospital",
  "10,000+ patients treated successfully",
  "Advanced laser & laparoscopic surgery",
];

const whyChooseUs = [
  {
    icon: Stethoscope,
    title: "30+ Years Experience",
    description: "Over three decades of dedicated practice in urology and andrology with proven expertise.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description: "We believe the patient–physician relationship is unique, confidential, and sacred.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Techniques",
    description: "Latest minimally invasive procedures including laser lithotripsy, TURP, and microsurgery.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Over 10,000 patients trust Dr. Bapat for their urological and andrological care.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About */}
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
                <p className="text-primary-foreground/70 text-sm">MS (Surg), DNB (Urology) · Since 1992</p>
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
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe the patient–physician relationship is unique, confidential, and sacred. Our practice strives to maintain this philosophy while providing world-class urological care. Every patient receives personalized attention, thorough evaluation, and evidence-based treatment recommendations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dr. Bapat is known for his accurate diagnosis, minimally invasive surgical techniques, and compassionate bedside manner. He takes the time to explain every aspect of a patient's condition and discusses all available treatment options before proceeding.
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

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide the highest quality urological and andrological care to every patient with compassion, integrity, and clinical excellence. We are committed to using the latest evidence-based treatments and minimally invasive surgical techniques to ensure optimal outcomes and faster recovery for all our patients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted name in urological care in Pune and beyond, where every patient feels heard, understood, and confident in their treatment journey. We envision a future where advanced medical technology and compassionate care come together to transform outcomes in urology and men's health.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] text-center hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
