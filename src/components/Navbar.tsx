import { Link, useLocation } from "react-router-dom";
import { Plane, Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Tours & Cruises", path: "/tours" },
  { label: "Offers", path: "/offers" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md" style={{ boxShadow: "var(--nav-shadow)" }}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Plane className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <div>
            <span className="font-heading font-bold text-xl text-primary">SkyBound</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-heading leading-none">
              The World, Within Reach
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-foreground hover:text-primary ${
                location.pathname === item.path ? "active text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-accent text-xs px-5 py-2.5">
            Find a Trip
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-slide">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg font-heading text-sm uppercase tracking-wider transition-colors ${
                  location.pathname === item.path
                    ? "bg-secondary text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-accent text-xs mt-2"
            >
              Find a Trip
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
