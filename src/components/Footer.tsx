import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
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
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "Tours & Cruises", "Offers", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link === "Home" ? "" : link === "Tours & Cruises" ? "tours" : link.toLowerCase()}`}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
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

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">123 Skyline Tower, Marine Drive, Mumbai 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm opacity-80">hello@skybound.travel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">© 2026 SkyBound Travel. All rights reserved.</p>
          <div className="flex gap-6 text-xs opacity-60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
