import { Link } from "react-router-dom";
import { Calendar, MapPin, Anchor, Tag, Users, ArrowRight } from "lucide-react";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";

const tours = [
  { image: heroCruise, title: "2-Night Mumbai Weekend Cruise", dates: "Mar 15 – Mar 17, 2026", route: "Mumbai → Goa → Mumbai", type: "Cruise", price: "₹4,999/mo", offers: ["Flat 25% Off", "Free Spa"] },
  { image: destSantorini, title: "7-Day Greece Island Hopping", dates: "Apr 10 – Apr 17, 2026", route: "Athens → Santorini → Mykonos", type: "Tour", price: "₹12,999/mo", offers: ["Early Bird", "Couple Deal"] },
  { image: cruiseInterior, title: "5-Night Lakshadweep Explorer", dates: "May 1 – May 6, 2026", route: "Kochi → Lakshadweep → Kochi", type: "Cruise", price: "₹8,499/mo", offers: ["Kids Sail Free"] },
  { image: destBali, title: "10-Day Bali Adventure", dates: "Jun 5 – Jun 15, 2026", route: "Denpasar → Ubud → Nusa Penida", type: "Tour", price: "₹9,999/mo", offers: ["All-Inclusive", "Free Airport Transfer"] },
  { image: destDubai, title: "4-Day Dubai City Break", dates: "Jul 1 – Jul 5, 2026", route: "Dubai City → Desert Safari → Marina", type: "Tour", price: "₹7,499/mo", offers: ["30% Off", "Burj Khalifa Pass"] },
  { image: heroBeach, title: "3-Night Goa Beach Retreat", dates: "Aug 10 – Aug 13, 2026", route: "Mumbai → Goa → Mumbai", type: "Cruise", price: "₹5,999/mo", offers: ["Couple Special"] },
];

const Tours = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={heroCruise} alt="Tours & Cruises" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Discover</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Tours & Cruises</h1>
        </div>
      </section>

      {/* Filters (visual only) */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {["All Packages", "Cruises", "Tours", "Honeymoon", "Family", "Adventure"].map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-all duration-300 ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-6">
          {tours.map((tour, i) => (
            <div key={i} className="card-travel flex flex-col lg:flex-row">
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
                    <button className="btn-primary text-xs px-5 py-2">Book Now</button>
                    <button className="btn-accent text-xs px-5 py-2">View Itinerary</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
