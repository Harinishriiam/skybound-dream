import { Link } from "react-router-dom";
import { Search, Calendar, Users, MapPin, Shield, Star, Headphones, Tag, Phone, ChevronRight, Quote, Mail, Anchor, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarArjun from "@/assets/avatar-arjun.jpg";
import avatarMeera from "@/assets/avatar-meera.jpg";

const cruiseListings = [
  { image: heroCruise, title: "2-Night Mumbai Weekend Cruise", dates: "Mar 15 – Mar 17, 2026", route: "Mumbai → Goa → Mumbai", offers: ["Exclusive Value Fares", "Flat 25% Off"], emi: "₹4,999", slug: "mumbai-weekend-cruise" },
  { image: cruiseInterior, title: "5-Night Lakshadweep Explorer", dates: "Apr 5 – Apr 10, 2026", route: "Kochi → Lakshadweep → Kochi", offers: ["Early Bird Special", "Kids Sail Free"], emi: "₹8,499", slug: "lakshadweep-explorer" },
  { image: heroBeach, title: "3-Night Goa Beach Retreat", dates: "May 1 – May 4, 2026", route: "Mumbai → Goa → Mumbai", offers: ["Couple Special", "All-Inclusive Dining"], emi: "₹5,999", slug: "goa-beach-retreat" },
];

const destinations = [
  { name: "Santorini", country: "Greece", image: destSantorini },
  { name: "Bali", country: "Indonesia", image: destBali },
  { name: "Dubai", country: "UAE", image: destDubai },
  { name: "Maldives", country: "Indian Ocean", image: destMaldives },
];

const features = [
  { icon: Shield, title: "Trusted Travel Experts", desc: "15+ years of premium travel planning experience" },
  { icon: Tag, title: "Best Price Guarantee", desc: "Unbeatable prices on all packages and cruises" },
  { icon: Star, title: "Customized Packages", desc: "Tailored itineraries designed around your dreams" },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Round-the-clock assistance wherever you are" },
];

const testimonials = [
  { name: "Priya Sharma", location: "Mumbai, India", text: "SkyBound made our Maldives honeymoon absolutely magical. Every detail was perfect!", rating: 5, avatar: avatarPriya },
  { name: "Arjun Patel", location: "Delhi, India", text: "The cruise experience was beyond expectations. Will definitely book again with SkyBound.", rating: 5, avatar: avatarArjun },
  { name: "Meera Reddy", location: "Bangalore, India", text: "Best travel agency we've ever used. Their custom Bali package was incredible!", rating: 5, avatar: avatarMeera },
];

const offers = [
  { title: "Early Bird Summer Special", discount: "30% OFF", desc: "Book your summer getaway before March 31st", color: "from-primary to-primary/80" },
  { title: "Cruise Weekend Deal", discount: "₹2,999", desc: "Starting price for 2-night weekend cruises", color: "from-accent to-accent/80" },
  { title: "Family Holiday Pack", discount: "Kids Free", desc: "Children under 12 travel free on select packages", color: "from-success to-success/80" },
];

const Index = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Subscribed successfully! Check your inbox for travel deals.");
    setNewsletterEmail("");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroCruise}
          alt="Luxury cruise sailing through tropical islands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-secondary text-sm uppercase tracking-[0.3em] mb-4"
            >
              Premium Travel Experiences
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              SkyBound
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-secondary">
                The World, Within Reach
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed"
            >
              Plan unforgettable journeys with trusted travel experts. Luxury cruises, exotic destinations, and bespoke holiday packages.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/tours" className="btn-accent">Book Now</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/destinations" className="btn-outline-light">View Packages</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Animated floating shapes */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 w-20 h-20 rounded-full bg-accent/10 backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-40 right-40 w-14 h-14 rounded-full bg-secondary/10 backdrop-blur-sm hidden lg:block"
        />
      </section>

      {/* Search Panel */}
      <section className="relative z-20 -mt-16 md:-mt-20 container mx-auto px-4">
        <ScrollReveal variant="slideUp">
          <BookingForm />
        </ScrollReveal>
      </section>

      {/* Cruise & Tour Listings */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Sail Away</p>
              <h2 className="section-title mb-4">Cruise & Tour Packages</h2>
              <p className="section-subtitle mx-auto">Experience luxury at sea with our handpicked cruise packages and exclusive tour itineraries.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {cruiseListings.map((cruise, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="card-travel flex flex-col lg:flex-row"
                >
                  <div className="lg:w-2/5 img-zoom">
                    <img src={cruise.image} alt={cruise.title} className="w-full h-64 lg:h-full object-cover" />
                  </div>
                  <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Anchor className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Cruise Package</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">{cruise.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{cruise.dates}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{cruise.route}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cruise.offers.map((offer) => (
                          <span key={offer} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-heading font-medium">{offer}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">EMI starts at</p>
                        <p className="font-heading font-bold text-2xl text-primary">{cruise.emi}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                      </div>
                      <div className="flex gap-3">
                        <Link to={`/package/${cruise.slug}`} className="btn-primary text-xs px-5 py-2">Book Now</Link>
                        <Link to={`/package/${cruise.slug}`} className="btn-accent text-xs px-5 py-2">View Itinerary</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call Assistance */}
      <ScrollReveal>
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center"
              >
                <Phone className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-foreground">Your perfect trip is one call away.</h3>
                <p className="text-primary-foreground/70 text-sm">Speak with our travel experts for personalized recommendations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="btn-accent text-xs">Request a Callback</Link>
              <a href="tel:+919876543210" className="btn-outline-light text-xs">Call Now</a>
            </div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Why Choose SkyBound */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Why Us</p>
              <h2 className="section-title mb-4">Why Choose SkyBound</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <ScrollReveal key={i} variant="scaleUp" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="card-travel p-8 text-center group cursor-default h-full"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5"
                  >
                    <feat.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Explore</p>
              <h2 className="section-title mb-4">Trending Destinations</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link to="/destinations" className="group relative rounded-2xl overflow-hidden h-80 img-zoom block">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-bold text-xl text-primary-foreground">{dest.name}</h3>
                    <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {dest.country}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Deals</p>
              <h2 className="section-title mb-4">Exclusive Offers</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <ScrollReveal key={i} variant="scaleUp" delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${offer.color} p-8 text-primary-foreground h-full`}
                >
                  <div className="ribbon">Limited Time</div>
                  <div className="pt-6">
                    <p className="font-heading font-bold text-4xl mb-2">{offer.discount}</p>
                    <h3 className="font-heading font-semibold text-lg mb-2">{offer.title}</h3>
                    <p className="text-sm opacity-80 mb-6">{offer.desc}</p>
                    <Link to="/offers" className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300">
                      Grab Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
              <h2 className="section-title mb-4">What Our Travelers Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div whileHover={{ y: -6 }} className="card-travel p-8 h-full">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden">
        <div className="gradient-overlay-alt py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3 }}>
                <Mail className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
              </motion.div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-3">Stay in the Loop</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.</p>
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/50 transition-colors font-body"
                />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="btn-accent">
                  Subscribe
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
