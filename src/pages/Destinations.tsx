import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const destinations = [
  { name: "Santorini", country: "Greece", image: destSantorini, desc: "Iconic blue domes & breathtaking sunsets over the Aegean Sea." },
  { name: "Bali", country: "Indonesia", image: destBali, desc: "Lush rice terraces, ancient temples & world-class surf." },
  { name: "Dubai", country: "UAE", image: destDubai, desc: "Futuristic skyline meets traditional Arabian culture." },
  { name: "Maldives", country: "Indian Ocean", image: destMaldives, desc: "Crystal-clear lagoons & overwater luxury villas." },
  { name: "Switzerland", country: "Europe", image: destSwitzerland, desc: "Snow-capped Alps, pristine lakes & chocolate villages." },
  { name: "Goa", country: "India", image: heroBeach, desc: "Golden beaches, vibrant nightlife & Portuguese heritage." },
];

const Destinations = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={destMaldives} alt="Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Explore</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Destinations</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <div key={i} className="card-travel group">
                <div className="relative h-64 img-zoom">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2">
                    <MapPin className="w-3 h-3 text-primary" />
                    {dest.country}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{dest.desc}</p>
                  <Link to="/tours" className="inline-flex items-center gap-2 text-primary font-heading text-sm font-semibold hover:gap-3 transition-all duration-300">
                    Explore Packages <ArrowRight className="w-4 h-4" />
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

export default Destinations;
