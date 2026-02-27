import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book an appointment with Dr. Milind Bapat?",
    a: "You can book an appointment by calling +91 8042757407, sending a WhatsApp message to +91 9822032496, or visiting the clinic directly during OPD hours.",
  },
  {
    q: "What are the consultation fees?",
    a: "Consultation fees vary depending on the type of visit (new patient / follow-up). Please contact the clinic directly for the latest fee structure.",
  },
  {
    q: "Does Dr. Bapat perform surgeries?",
    a: "Yes. Dr. Bapat performs a wide range of urological surgeries including laser lithotripsy, TURP, PCNL, penile prosthesis implantation, varicocelectomy, PESA/TESA, and more.",
  },
  {
    q: "Is parking available at the clinic?",
    a: "Yes, parking is available near TARA Clinic (Kanchan Building, Senapati Bapat Road). Jupiter Hospital also has dedicated parking facilities.",
  },
  {
    q: "Does Dr. Bapat treat female patients?",
    a: "Yes. Dr. Bapat treats urological conditions in both male and female patients, including UTIs, kidney stones, urinary incontinence, and bladder conditions.",
  },
];

const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Reach out to us for appointments, queries, or second opinions. We're here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: "+91 8042757407",
              sub: "Available during clinic hours",
              href: "tel:+918042757407",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "+91 9822032496",
              sub: "Quick response, book appointments",
              href: "https://wa.me/919822032496",
            },
            {
              icon: MapPin,
              title: "TARA Clinic",
              detail: "Senapati Bapat Road",
              sub: "3rd Floor, 301, Kanchan B-Wing, Shivajinagar, Pune",
              href: "https://maps.google.com/?q=18.521917874160355,73.8292696326971",
            },
            {
              icon: Clock,
              title: "OPD Timings",
              detail: "Mon, Wed, Fri: 1–4 PM",
              sub: "Tue, Thu, Sat: 11 AM–12 PM (Jupiter Hospital)",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mb-2">{item.title}</h3>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm">
                  {item.detail}
                </a>
              ) : (
                <p className="text-foreground font-medium text-sm">{item.detail}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8292696!3d18.5219178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzE5LjAiTiA3M8KwNDknNDUuNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Milind Bapat Clinic Location - TARA Clinic, Senapati Bapat Road, Pune"
            />
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
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

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl shadow-[var(--shadow-soft)] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-foreground text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
