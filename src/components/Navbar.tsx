import { Link, useLocation } from "react-router-dom";
import { Plane, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md"
      style={{ boxShadow: "var(--nav-shadow)" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
            <Plane className="w-7 h-7 text-primary" />
          </motion.div>
          <div>
            <span className="font-heading font-bold text-xl text-primary">SkyBound</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-heading leading-none">
              The World, Within Reach
            </span>
          </div>
        </Link>

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

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="flex items-center gap-1.5 text-foreground hover:text-primary font-heading text-xs uppercase tracking-wider transition-colors">
            <User className="w-4 h-4" /> Login
          </Link>
          <Link to="/contact" className="btn-accent text-xs px-5 py-2.5">
            Find a Trip
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-4 rounded-lg font-heading text-sm uppercase tracking-wider transition-colors block ${
                      location.pathname === item.path
                        ? "bg-secondary text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-3 mt-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-primary text-xs flex-1 text-center">Login</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-accent text-xs flex-1 text-center">Find a Trip</Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
