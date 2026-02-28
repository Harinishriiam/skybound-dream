import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import destParis from "@/assets/destination-paris.jpg";
import destTokyo from "@/assets/destination-tokyo.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const destinations = [
  { name: "Santorini", country: "Greece", image: destSantorini, desc: "Iconic blue domes & breathtaking sunsets over the Aegean Sea.", packages: 12 },
  { name: "Bali", country: "Indonesia", image: destBali, desc: "Lush rice terraces, ancient temples & world-class surf.", packages: 15 },
  { name: "Dubai", country: "UAE", image: destDubai, desc: "Futuristic skyline meets traditional Arabian culture.", packages: 8 },
  { name: "Maldives", country: "Indian Ocean", image: destMaldives, desc: "Crystal-clear lagoons & overwater luxury villas.", packages: 10 },
  { name: "Switzerland", country: "Europe", image: destSwitzerland, desc: "Snow-capped Alps, pristine lakes & chocolate villages.", packages: 7 },
  { name: "Goa", country: "India", image: heroBeach, desc: "Golden beaches, vibrant nightlife & Portuguese heritage.", packages: 20 },
  { name: "Paris", country: "France", image: destParis, desc: "City of lights, romance, and world-class art & cuisine.", packages: 9 },
  { name: "Tokyo", country: "Japan", image: destTokyo, desc: "Ancient traditions meet cutting-edge modernity.", packages: 6 },
];

const Destinations = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={destMaldives} alt="Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative z-10 text-center">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Explore</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Destinations</h1>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((dest, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div whileHover={{ y: -8 }} className="card-travel group h-full">
                  <div className="relative h-56 img-zoom">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
                      <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2">
                      <MapPin className="w-3 h-3 text-primary" />
                      {dest.country}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-1">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{dest.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-heading font-medium">{dest.packages} packages</span>
                      <Link to="/tours" className="inline-flex items-center gap-1 text-primary font-heading text-xs font-semibold hover:gap-2 transition-all duration-300">
                        Explore <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
