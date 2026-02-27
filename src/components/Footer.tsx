import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctor", href: "/doctor" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Kidney Stone Treatment",
  "Prostate (BPH) Treatment",
  "Male Infertility & TESA",
  "Erectile Dysfunction",
  "UTI Treatment",
  "Kidney Cancer",
  "Penile Prosthesis Surgery",
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Dr. Milind Bapat Logo" className="h-14 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 mb-4">
              Trusted Urology & Andrology care in Pune since 1992. Over 30 years of excellence in patient care, advanced surgical techniques, and compassionate medicine.
            </p>
            <a
              href="https://wa.me/919822032496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-glow text-sm font-medium hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-teal-glow">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-primary-foreground/60 hover:text-teal-glow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-teal-glow">Our Services</h4>
            <div className="space-y-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-sm text-primary-foreground/60 hover:text-teal-glow transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-teal-glow">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+918042757407" className="hover:text-teal-glow transition-colors">+91 8042757407</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <a href="https://wa.me/919822032496" target="_blank" rel="noopener noreferrer" className="hover:text-teal-glow transition-colors">+91 9822032496</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>TARA Clinic, 301, Kanchan B-Wing, Senapati Bapat Road, Shivajinagar, Pune</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Mon, Wed, Fri: 1–4 PM</p>
                  <p>Tue, Thu, Sat: 11 AM–12 PM</p>
                  <p className="text-xs text-primary-foreground/40">(Jupiter Hospital)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Dr. Milind Bapat. All rights reserved. | drmilindbapat.in
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-xs text-primary-foreground/40 hover:text-teal-glow transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/about" className="text-xs text-primary-foreground/40 hover:text-teal-glow transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-xs text-primary-foreground/40 hover:text-teal-glow transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
