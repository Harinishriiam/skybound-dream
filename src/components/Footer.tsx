import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <ScrollReveal variant="fadeUp">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="w-6 h-6 text-primary" />
                <span className="font-heading font-bold text-xl text-primary">SkyBound</span>
              </div>
              <p className="text-sm leading-relaxed opacity-80 mb-6">
                Your trusted travel partner for unforgettable journeys across the globe. Premium holidays, luxury cruises, and custom packages tailored just for you.
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "Destinations", to: "/destinations" },
                  { label: "Tours & Cruises", to: "/tours" },
                  { label: "Offers", to: "/offers" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "About", to: "/about" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Popular Destinations</h4>
              <ul className="space-y-3">
                {["Maldives", "Santorini, Greece", "Bali, Indonesia", "Dubai, UAE", "Switzerland", "Paris, France"].map((dest) => (
                  <li key={dest}>
                    <Link to="/destinations" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {dest}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm opacity-80">123 Skyline Tower, Marine Drive, Mumbai 400001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919876543210" className="text-sm opacity-80 hover:text-primary transition-colors">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:hello@skybound.travel" className="text-sm opacity-80 hover:text-primary transition-colors">hello@skybound.travel</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">© 2026 SkyBound Travel. All rights reserved.</p>
          <div className="flex gap-6 text-xs opacity-60">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
