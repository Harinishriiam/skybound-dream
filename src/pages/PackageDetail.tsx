import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Anchor, Tag, Users, Clock, Star, Check, ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";

import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";
import cruiseDeck from "@/assets/cruise-deck.jpg";
import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";

const allPackages: Record<string, any> = {
  "mumbai-weekend-cruise": {
    title: "2-Night Mumbai Weekend Cruise",
    type: "Cruise",
    image: heroCruise,
    gallery: [heroCruise, cruiseInterior, cruiseDeck, heroBeach],
    dates: "Mar 15 – Mar 17, 2026",
    route: "Mumbai → Goa → Mumbai",
    duration: "2 Nights / 3 Days",
    price: "₹14,999",
    emi: "₹4,999/mo",
    rating: 4.8,
    reviews: 245,
    offers: ["Exclusive Value Fares", "Flat 25% Off"],
    highlights: ["Luxury cabin accommodation", "All-inclusive dining", "Live entertainment & shows", "Swimming pool & spa access", "Port excursion in Goa", "Sunset deck party"],
    itinerary: [
      { day: "Day 1", title: "Mumbai Departure", desc: "Board at 4 PM. Welcome drink, safety drill, and dinner buffet. Evening entertainment show." },
      { day: "Day 2", title: "Goa Port Call", desc: "Arrive in Goa at 8 AM. Shore excursion to Calangute Beach & Old Goa churches. Return by 4 PM. Themed dinner night." },
      { day: "Day 3", title: "Return to Mumbai", desc: "Breakfast buffet. Disembark at Mumbai port by 9 AM." },
    ],
    inclusions: ["Cabin accommodation", "All meals & snacks", "Entertainment shows", "Pool & gym access", "Port charges"],
    exclusions: ["Shore excursions (optional)", "Spa treatments", "Alcoholic beverages", "Travel insurance"],
  },
  "greece-island-hopping": {
    title: "7-Day Greece Island Hopping",
    type: "Tour",
    image: destSantorini,
    gallery: [destSantorini, destMaldives, heroBeach, cruiseDeck],
    dates: "Apr 10 – Apr 17, 2026",
    route: "Athens → Santorini → Mykonos",
    duration: "7 Days / 6 Nights",
    price: "₹1,29,999",
    emi: "₹12,999/mo",
    rating: 4.9,
    reviews: 189,
    offers: ["Early Bird", "Couple Deal"],
    highlights: ["Blue dome churches of Santorini", "Sunset at Oia", "Mykonos beach parties", "Acropolis guided tour", "Wine tasting experience", "Ferry transfers included"],
    itinerary: [
      { day: "Day 1-2", title: "Athens Exploration", desc: "Arrive Athens. Visit Acropolis, Parthenon, and Plaka district. City walking tour." },
      { day: "Day 3-4", title: "Santorini Magic", desc: "Ferry to Santorini. Visit Fira, Oia sunset, wine tasting, volcanic beach." },
      { day: "Day 5-6", title: "Mykonos Vibes", desc: "Ferry to Mykonos. Beach day, Little Venice, windmills, nightlife experience." },
      { day: "Day 7", title: "Return", desc: "Morning ferry back to Athens. Airport transfer for departure." },
    ],
    inclusions: ["Hotel stays (4-star)", "Daily breakfast", "Inter-island ferry tickets", "Airport transfers", "Guided tours"],
    exclusions: ["International flights", "Lunch & dinner", "Personal expenses", "Travel insurance"],
  },
  "lakshadweep-explorer": {
    title: "5-Night Lakshadweep Explorer",
    type: "Cruise",
    image: cruiseInterior,
    gallery: [cruiseInterior, destMaldives, cruiseDeck, heroCruise],
    dates: "May 1 – May 6, 2026",
    route: "Kochi → Lakshadweep → Kochi",
    duration: "5 Nights / 6 Days",
    price: "₹49,999",
    emi: "₹8,499/mo",
    rating: 4.7,
    reviews: 312,
    offers: ["Kids Sail Free"],
    highlights: ["Pristine Lakshadweep beaches", "Snorkeling & kayaking", "Glass-bottom boat ride", "Island village visit", "All-inclusive dining", "Onboard entertainment"],
    itinerary: [
      { day: "Day 1", title: "Kochi Departure", desc: "Board ship at Kochi port. Welcome ceremony and safety drill. Set sail at 6 PM." },
      { day: "Day 2", title: "At Sea", desc: "Enjoy onboard activities - pool, spa, entertainment shows, and dining." },
      { day: "Day 3-4", title: "Lakshadweep Islands", desc: "Visit Kavaratti and Kalpeni islands. Beach activities, snorkeling, and cultural shows." },
      { day: "Day 5", title: "Return Journey", desc: "Day at sea with onboard activities. Captain's farewell dinner." },
      { day: "Day 6", title: "Kochi Arrival", desc: "Arrive Kochi port. Disembark after breakfast." },
    ],
    inclusions: ["Cabin accommodation", "All meals", "Island excursions", "Water sports (basic)", "Entertainment"],
    exclusions: ["Travel to Kochi", "Premium water sports", "Spa treatments", "Travel insurance"],
  },
  "bali-adventure": {
    title: "10-Day Bali Adventure",
    type: "Tour",
    image: destBali,
    gallery: [destBali, destMaldives, heroBeach, destSantorini],
    dates: "Jun 5 – Jun 15, 2026",
    route: "Denpasar → Ubud → Nusa Penida",
    duration: "10 Days / 9 Nights",
    price: "₹89,999",
    emi: "₹9,999/mo",
    rating: 4.8,
    reviews: 156,
    offers: ["All-Inclusive", "Free Airport Transfer"],
    highlights: ["Ubud rice terraces trek", "Mount Batur sunrise hike", "Nusa Penida island tour", "Temple visits", "Balinese cooking class", "White water rafting"],
    itinerary: [
      { day: "Day 1-2", title: "Seminyak & Kuta", desc: "Arrive Bali. Beach relaxation, sunset at Tanah Lot temple." },
      { day: "Day 3-5", title: "Ubud Cultural Immersion", desc: "Rice terraces, monkey forest, cooking class, art galleries." },
      { day: "Day 6-7", title: "Mount Batur & Adventure", desc: "Sunrise trek, white water rafting, coffee plantation tour." },
      { day: "Day 8-9", title: "Nusa Penida", desc: "Boat to Nusa Penida. Kelingking Beach, snorkeling with manta rays." },
      { day: "Day 10", title: "Departure", desc: "Free morning. Airport transfer for departure." },
    ],
    inclusions: ["Resort stays", "Daily breakfast & select meals", "All transfers", "Activity passes", "English guide"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
  },
  "dubai-city-break": {
    title: "4-Day Dubai City Break",
    type: "Tour",
    image: destDubai,
    gallery: [destDubai, cruiseDeck, heroBeach, cruiseInterior],
    dates: "Jul 1 – Jul 5, 2026",
    route: "Dubai City → Desert Safari → Marina",
    duration: "4 Days / 3 Nights",
    price: "₹54,999",
    emi: "₹7,499/mo",
    rating: 4.6,
    reviews: 278,
    offers: ["30% Off", "Burj Khalifa Pass"],
    highlights: ["Burj Khalifa observation deck", "Desert safari with BBQ dinner", "Dubai Mall & Fountain show", "Dhow cruise dinner", "Palm Jumeirah visit", "Gold Souk shopping"],
    itinerary: [
      { day: "Day 1", title: "Arrival & City Tour", desc: "Airport pickup. Visit Dubai Mall, Burj Khalifa, and Dubai Fountain show." },
      { day: "Day 2", title: "Desert Safari", desc: "Morning free. Afternoon desert safari with dune bashing, camel ride, and BBQ dinner." },
      { day: "Day 3", title: "Dubai Exploration", desc: "Palm Jumeirah, Atlantis, Dhow cruise dinner, Gold Souk." },
      { day: "Day 4", title: "Departure", desc: "Morning shopping at Dubai Mall. Airport transfer." },
    ],
    inclusions: ["4-star hotel", "Daily breakfast", "Airport transfers", "Desert safari", "Burj Khalifa tickets"],
    exclusions: ["Flights", "Lunch & dinner (except safari)", "Shopping", "Travel insurance"],
  },
  "goa-beach-retreat": {
    title: "3-Night Goa Beach Retreat",
    type: "Cruise",
    image: heroBeach,
    gallery: [heroBeach, heroCruise, cruiseDeck, cruiseInterior],
    dates: "Aug 10 – Aug 13, 2026",
    route: "Mumbai → Goa → Mumbai",
    duration: "3 Nights / 4 Days",
    price: "₹19,999",
    emi: "₹5,999/mo",
    rating: 4.7,
    reviews: 198,
    offers: ["Couple Special"],
    highlights: ["Premium ocean-view cabin", "Gourmet dining experience", "Live DJ & dance nights", "Couple spa package", "Goa beach day", "Sunset cocktail deck"],
    itinerary: [
      { day: "Day 1", title: "Mumbai Departure", desc: "Board at 3 PM. Welcome cocktail, dinner, and live entertainment." },
      { day: "Day 2", title: "Day at Sea", desc: "Pool day, spa treatments, cooking demo, afternoon tea, themed party." },
      { day: "Day 3", title: "Goa Exploration", desc: "Dock at Mormugao. Beach visit, water sports, local market. Return for dinner." },
      { day: "Day 4", title: "Return to Mumbai", desc: "Morning yoga on deck. Breakfast and disembark at Mumbai port by 10 AM." },
    ],
    inclusions: ["Cabin accommodation", "All meals & snacks", "Entertainment", "Port charges", "Couple spa (1 session)"],
    exclusions: ["Premium beverages", "Additional spa sessions", "Shore excursions", "Travel insurance"],
  },
};

const slugs = Object.keys(allPackages);

const PackageDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  const pkg = slug ? allPackages[slug] : null;

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-4">Package Not Found</h1>
          <Link to="/tours" className="btn-primary">Browse All Packages</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-[50vh]">
        <motion.img
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={pkg.gallery[selectedImage]}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute top-6 left-6 z-10">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-heading text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-1.5 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold mb-3">
              {pkg.type === "Cruise" ? <Anchor className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
              {pkg.type} Package
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-2">{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{pkg.dates}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{pkg.route}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{pkg.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Thumbnails */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {pkg.gallery.map((img: string, i: number) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(i)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i ? "border-primary" : "border-transparent opacity-70"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Rating & Offers */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(pkg.rating) ? "text-accent fill-accent" : "text-border"}`} />
                  ))}
                  <span className="ml-2 font-heading font-semibold text-foreground">{pkg.rating}</span>
                  <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                </div>
                <div className="flex gap-2">
                  {pkg.offers.map((o: string) => (
                    <span key={o} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-heading font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {o}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                  >
                    <Check className="w-4 h-4 text-success shrink-0" />
                    <span className="text-sm text-foreground">{h}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Itinerary */}
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-primary-foreground text-xs font-heading font-bold">{item.day.replace("Day ", "D")}</span>
                      </div>
                      {i < pkg.itinerary.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Inclusions / Exclusions */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-success shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-4 h-4 shrink-0 text-center text-destructive">✕</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal variant="fadeRight">
              <div className="card-travel p-6 sticky top-24">
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="font-heading font-bold text-4xl text-primary">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">EMI from {pkg.emi}</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" /> {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" /> {pkg.route}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" /> {pkg.dates}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowBooking(true);
                    toast.success("Fill in your details to book this package!");
                  }}
                  className="btn-accent w-full mb-3"
                >
                  Book Now
                </motion.button>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Enquire Now
                </Link>

                {/* Call */}
                <div className="mt-6 p-4 rounded-xl bg-muted text-center">
                  <Phone className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Need Help?</p>
                  <a href="tel:+919876543210" className="font-heading font-semibold text-foreground text-sm hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowBooking(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button onClick={() => setShowBooking(false)} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors">
                ✕
              </button>
              <div className="bg-card rounded-2xl p-6 mb-4">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">Book: {pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Fill in your travel details below</p>
              </div>
              <BookingForm compact />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PackageDetail;
