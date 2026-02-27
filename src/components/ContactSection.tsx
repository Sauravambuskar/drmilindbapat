import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: "+91 8042757407",
              sub: "Available during clinic hours",
              href: "tel:+918042757407",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              detail: "TARA, Dr. Nakhare Clinic",
              sub: "3rd Floor, 301, Kanchan B-Wing, Senapati Bapat Road, Shivajinagar, Pune",
              href: "https://maps.google.com/?q=18.521917874160355,73.8292696326971",
            },
            {
              icon: Clock,
              title: "Timings",
              detail: "Mon, Wed, Fri: 1–4 PM",
              sub: "Tue, Thu, Sat: 11 AM–12 PM (Jupiter Hospital)",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-primary font-medium hover:underline text-sm">
                  {item.detail}
                </a>
              ) : (
                <p className="text-foreground font-medium text-sm">{item.detail}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button size="lg" className="gap-2" asChild>
            <a href="https://wa.me/919822032496" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
