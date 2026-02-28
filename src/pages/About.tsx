import { Shield, Users, Globe, Award, Star } from "lucide-react";
import heroCruise from "@/assets/hero-cruise.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "100+", label: "Destinations" },
  { value: "4.9★", label: "Customer Rating" },
];

const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Your safety is our top priority. We partner with certified, reputable travel providers worldwide." },
  { icon: Users, title: "Customer First", desc: "We listen, we care, and we deliver. Every trip is tailored to exceed your expectations." },
  { icon: Globe, title: "Global Expertise", desc: "Our travel experts have explored every corner of the globe to bring you the best experiences." },
  { icon: Award, title: "Award-Winning", desc: "Recognized as one of the top premium travel agencies for 5 consecutive years." },
];

const About = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={heroCruise} alt="About SkyBound" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">About SkyBound</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Who We Are</p>
              <h2 className="section-title mb-6">Crafting Dream Journeys Since 2010</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SkyBound was founded with a simple belief: that travel should be transformative, not transactional. What started as a small team of passionate travelers has grown into one of India's most trusted premium travel agencies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in luxury cruises, bespoke holiday packages, and curated destination experiences that go beyond the ordinary. Every itinerary we craft is a labor of love, designed to create memories that last a lifetime.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-heading font-bold text-3xl text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden img-zoom" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={cruiseInterior} alt="SkyBound Team" className="w-full h-80 lg:h-[450px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Our Values</p>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-travel p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
