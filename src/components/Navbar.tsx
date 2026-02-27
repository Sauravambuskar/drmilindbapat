import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-foreground text-lg leading-tight">Dr. Milind Bapat</p>
              <p className="text-xs text-muted-foreground">Consultant Urologist & Andrologist</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button size="sm" className="hidden md:flex gap-2" asChild>
              <a href="tel:+918042757407">
                <Phone className="w-4 h-4" />
                Book Appointment
              </a>
            </Button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { scrollToSection(e, link.href); setOpen(false); }}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-2 gap-2" asChild>
              <a href="tel:+918042757407">
                <Phone className="w-4 h-4" />
                Call +91 8042757407
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
