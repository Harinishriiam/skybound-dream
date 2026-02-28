import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Anchor, Tag, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";
import cruiseDeck from "@/assets/cruise-deck.jpg";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destParis from "@/assets/destination-paris.jpg";
import destTokyo from "@/assets/destination-tokyo.jpg";

const allTours = [
  { image: heroCruise, title: "2-Night Mumbai Weekend Cruise", dates: "Mar 15 – Mar 17, 2026", route: "Mumbai → Goa → Mumbai", type: "Cruise", price: "₹4,999/mo", offers: ["Flat 25% Off", "Free Spa"], slug: "mumbai-weekend-cruise", category: ["Cruises", "All Packages"] },
  { image: destSantorini, title: "7-Day Greece Island Hopping", dates: "Apr 10 – Apr 17, 2026", route: "Athens → Santorini → Mykonos", type: "Tour", price: "₹12,999/mo", offers: ["Early Bird", "Couple Deal"], slug: "greece-island-hopping", category: ["Tours", "Honeymoon", "All Packages"] },
  { image: cruiseInterior, title: "5-Night Lakshadweep Explorer", dates: "May 1 – May 6, 2026", route: "Kochi → Lakshadweep → Kochi", type: "Cruise", price: "₹8,499/mo", offers: ["Kids Sail Free"], slug: "lakshadweep-explorer", category: ["Cruises", "Family", "All Packages"] },
  { image: destBali, title: "10-Day Bali Adventure", dates: "Jun 5 – Jun 15, 2026", route: "Denpasar → Ubud → Nusa Penida", type: "Tour", price: "₹9,999/mo", offers: ["All-Inclusive", "Free Airport Transfer"], slug: "bali-adventure", category: ["Tours", "Adventure", "All Packages"] },
  { image: destDubai, title: "4-Day Dubai City Break", dates: "Jul 1 – Jul 5, 2026", route: "Dubai City → Desert Safari → Marina", type: "Tour", price: "₹7,499/mo", offers: ["30% Off", "Burj Khalifa Pass"], slug: "dubai-city-break", category: ["Tours", "All Packages"] },
  { image: heroBeach, title: "3-Night Goa Beach Retreat", dates: "Aug 10 – Aug 13, 2026", route: "Mumbai → Goa → Mumbai", type: "Cruise", price: "₹5,999/mo", offers: ["Couple Special"], slug: "goa-beach-retreat", category: ["Cruises", "Honeymoon", "All Packages"] },
  { image: destMaldives, title: "5-Day Maldives Paradise", dates: "Sep 1 – Sep 6, 2026", route: "Malé → Ari Atoll → Malé", type: "Tour", price: "₹15,999/mo", offers: ["Overwater Villa", "Honeymoon Special"], slug: "mumbai-weekend-cruise", category: ["Tours", "Honeymoon", "All Packages"] },
  { image: destParis, title: "6-Day Paris Romance", dates: "Oct 5 – Oct 11, 2026", route: "Paris → Versailles → Loire Valley", type: "Tour", price: "₹11,999/mo", offers: ["Wine Tasting", "Seine Cruise"], slug: "greece-island-hopping", category: ["Tours", "Honeymoon", "All Packages"] },
  { image: destTokyo, title: "8-Day Japan Discovery", dates: "Nov 1 – Nov 9, 2026", route: "Tokyo → Kyoto → Osaka", type: "Tour", price: "₹13,999/mo", offers: ["Cherry Blossom Special"], slug: "bali-adventure", category: ["Tours", "Adventure", "All Packages"] },
  { image: cruiseDeck, title: "4-Night Luxury Deck Cruise", dates: "Dec 20 – Dec 24, 2026", route: "Mumbai → Lakshadweep → Mumbai", type: "Cruise", price: "₹10,999/mo", offers: ["Christmas Special", "All-Inclusive"], slug: "lakshadweep-explorer", category: ["Cruises", "Family", "All Packages"] },
];

const filters = ["All Packages", "Cruises", "Tours", "Honeymoon", "Family", "Adventure"];

const Tours = () => {
  const [activeFilter, setActiveFilter] = useState("All Packages");
  const filteredTours = allTours.filter((t) => t.category.includes(activeFilter));

  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={heroCruise}
          alt="Tours & Cruises"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 text-center"
        >
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Discover</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Tours & Cruises</h1>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-6">
          {filteredTours.map((tour, i) => (
            <ScrollReveal key={`${tour.title}-${i}`} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="card-travel flex flex-col lg:flex-row"
              >
                <div className="lg:w-2/5 relative img-zoom">
                  <img src={tour.image} alt={tour.title} className="w-full h-64 lg:h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold flex items-center gap-1">
                    {tour.type === "Cruise" ? <Anchor className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                    {tour.type}
                  </span>
                </div>
                <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">{tour.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{tour.dates}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{tour.route}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.offers.map((o) => (
                        <span key={o} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-heading font-medium flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {o}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">EMI starts at</p>
                      <p className="font-heading font-bold text-2xl text-primary">{tour.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link to={`/package/${tour.slug}`} className="btn-primary text-xs px-5 py-2">Book Now</Link>
                      <Link to={`/package/${tour.slug}`} className="btn-accent text-xs px-5 py-2">View Itinerary</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-heading">No packages found for this filter. Try another category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Tours;
