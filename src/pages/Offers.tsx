import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const offersData = [
  { title: "Early Bird Summer Special", discount: "30% OFF", desc: "Book your summer getaway before March 31st and save big on all international packages.", validity: "Valid till Mar 31, 2026", color: "from-primary to-primary/70" },
  { title: "Cruise Weekend Deal", discount: "₹2,999", desc: "Starting price for 2-night weekend cruises. All-inclusive dining and entertainment.", validity: "Weekends Only", color: "from-accent to-accent/70" },
  { title: "Family Holiday Pack", discount: "Kids Free", desc: "Children under 12 travel absolutely free on select family holiday packages.", validity: "Valid on select packages", color: "from-success to-success/70" },
  { title: "Honeymoon Bliss", discount: "40% OFF", desc: "Romantic getaways to Maldives, Bali & Santorini with exclusive couple benefits.", validity: "For newlyweds", color: "from-primary to-accent/70" },
  { title: "Group Travel Discount", discount: "₹5,000 OFF", desc: "Flat discount per person for groups of 6 or more on any domestic or international tour.", validity: "Min 6 travelers", color: "from-primary/80 to-primary" },
  { title: "Last Minute Deals", discount: "Up to 50%", desc: "Grab unbelievable discounts on departures within the next 7 days.", validity: "Limited availability", color: "from-accent/80 to-primary/80" },
];

const Offers = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={heroBeach} alt="Offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Save Big</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Exclusive Offers</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offersData.map((offer, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${offer.color} p-8 text-primary-foreground group hover:scale-[1.02] transition-transform duration-300`}>
                <div className="ribbon">Limited Time</div>
                <div className="pt-8">
                  <p className="font-heading font-bold text-5xl mb-3">{offer.discount}</p>
                  <h3 className="font-heading font-semibold text-xl mb-2">{offer.title}</h3>
                  <p className="text-sm opacity-80 mb-2">{offer.desc}</p>
                  <p className="text-xs opacity-60 mb-6">{offer.validity}</p>
                  <Link to="/tours" className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300">
                    Grab Now <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
