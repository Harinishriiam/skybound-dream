import { Link } from "react-router-dom";
import { Search, Calendar, Users, MapPin, Shield, Star, Headphones, Tag, Phone, ChevronRight, Quote, Mail, Anchor, ArrowRight } from "lucide-react";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";

const cruiseListings = [
  {
    image: heroCruise,
    title: "2-Night Mumbai Weekend Cruise",
    dates: "Mar 15 – Mar 17, 2026",
    route: "Mumbai → Goa → Mumbai",
    offers: ["Exclusive Value Fares", "Flat 25% Off"],
    emi: "₹4,999",
  },
  {
    image: cruiseInterior,
    title: "5-Night Lakshadweep Explorer",
    dates: "Apr 5 – Apr 10, 2026",
    route: "Kochi → Lakshadweep → Kochi",
    offers: ["Early Bird Special", "Kids Sail Free"],
    emi: "₹8,499",
  },
  {
    image: heroBeach,
    title: "3-Night Goa Beach Retreat",
    dates: "May 1 – May 4, 2026",
    route: "Mumbai → Goa → Mumbai",
    offers: ["Couple Special", "All-Inclusive Dining"],
    emi: "₹5,999",
  },
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
  { name: "Priya Sharma", location: "Mumbai, India", text: "SkyBound made our Maldives honeymoon absolutely magical. Every detail was perfect!", rating: 5 },
  { name: "Arjun Patel", location: "Delhi, India", text: "The cruise experience was beyond expectations. Will definitely book again with SkyBound.", rating: 5 },
  { name: "Meera Reddy", location: "Bangalore, India", text: "Best travel agency we've ever used. Their custom Bali package was incredible!", rating: 5 },
];

const offers = [
  { title: "Early Bird Summer Special", discount: "30% OFF", desc: "Book your summer getaway before March 31st", color: "from-primary to-primary/80" },
  { title: "Cruise Weekend Deal", discount: "₹2,999", desc: "Starting price for 2-night weekend cruises", color: "from-accent to-accent/80" },
  { title: "Family Holiday Pack", discount: "Kids Free", desc: "Children under 12 travel free on select packages", color: "from-success to-success/80" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <img
          src={heroCruise}
          alt="Luxury cruise sailing through tropical islands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-slide">
            <p className="font-heading text-secondary text-sm uppercase tracking-[0.3em] mb-4">
              Premium Travel Experiences
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              SkyBound
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-secondary">
                The World, Within Reach
              </span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed animate-fade-slide-delay">
              Plan unforgettable journeys with trusted travel experts. Luxury cruises, exotic destinations, and bespoke holiday packages.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-slide-delay-2">
              <Link to="/tours" className="btn-accent">
                Book Now
              </Link>
              <Link to="/destinations" className="btn-outline-light">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Panel */}
      <section className="relative z-20 -mt-16 md:-mt-20 container mx-auto px-4">
        <div className="bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { label: "From", placeholder: "Mumbai", icon: MapPin },
              { label: "To", placeholder: "Goa", icon: MapPin },
              { label: "Travel Date", placeholder: "Select date", icon: Calendar },
              { label: "Return Date", placeholder: "Select date", icon: Calendar },
              { label: "Adults", placeholder: "2", icon: Users },
              { label: "Children", placeholder: "0", icon: Users },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">
                  {field.label}
                </label>
                <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 bg-muted/50">
                  <field.icon className="w-4 h-4 text-primary shrink-0" />
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none font-body"
                    readOnly
                  />
                </div>
              </div>
            ))}
            <div className="flex items-end col-span-2 md:col-span-1">
              <button className="btn-primary w-full gap-2">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cruise & Tour Listings */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Sail Away</p>
            <h2 className="section-title mb-4">Cruise & Tour Packages</h2>
            <p className="section-subtitle mx-auto">Experience luxury at sea with our handpicked cruise packages and exclusive tour itineraries.</p>
          </div>

          <div className="space-y-6">
            {cruiseListings.map((cruise, i) => (
              <div key={i} className="card-travel flex flex-col lg:flex-row">
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
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {cruise.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {cruise.route}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cruise.offers.map((offer) => (
                        <span key={offer} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-heading font-medium">
                          {offer}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">EMI starts at</p>
                      <p className="font-heading font-bold text-2xl text-primary">{cruise.emi}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    </div>
                    <div className="flex gap-3">
                      <Link to="/tours" className="btn-primary text-xs px-5 py-2">Book Now</Link>
                      <Link to="/tours" className="btn-accent text-xs px-5 py-2">View Itinerary</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Assistance */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground">Your perfect trip is one call away.</h3>
              <p className="text-primary-foreground/70 text-sm">Speak with our travel experts for personalized recommendations.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-accent text-xs">Request a Callback</Link>
            <a href="tel:+919876543210" className="btn-outline-light text-xs">Call Now</a>
          </div>
        </div>
      </section>

      {/* Why Choose SkyBound */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Why Us</p>
            <h2 className="section-title mb-4">Why Choose SkyBound</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="card-travel p-8 text-center group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <feat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Explore</p>
            <h2 className="section-title mb-4">Trending Destinations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <Link to="/destinations" key={i} className="group relative rounded-2xl overflow-hidden h-80 img-zoom block">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-xl text-primary-foreground">{dest.name}</h3>
                  <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {dest.country}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Deals</p>
            <h2 className="section-title mb-4">Exclusive Offers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${offer.color} p-8 text-primary-foreground animate-pulse-glow`} style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="ribbon">Limited Time</div>
                <div className="pt-6">
                  <p className="font-heading font-bold text-4xl mb-2">{offer.discount}</p>
                  <h3 className="font-heading font-semibold text-lg mb-2">{offer.title}</h3>
                  <p className="text-sm opacity-80 mb-6">{offer.desc}</p>
                  <Link to="/offers" className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300">
                    Grab Now <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
            <h2 className="section-title mb-4">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-travel p-8">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden">
        <div className="gradient-overlay-alt py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Mail className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-3">Stay in the Loop</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/50 transition-colors font-body"
                readOnly
              />
              <button className="btn-accent">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
