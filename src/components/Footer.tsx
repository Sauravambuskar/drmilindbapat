import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctor", href: "/doctor" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-xl font-bold mb-2">Dr. Milind Bapat</p>
            <p className="text-sm text-primary-foreground/60">
              MS (Surg), DNB (Urology)<br />
              Consultant Urologist & Andrologist
            </p>
          </div>

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

          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-teal-glow">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+918042757407" className="hover:text-teal-glow transition-colors">+91 8042757407</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Senapati Bapat Road, Shivajinagar, Pune</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Dr. Milind Bapat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
