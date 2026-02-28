import { Shield, Users, Globe, Award, Heart, Target, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroCruise from "@/assets/hero-cruise.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

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

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", desc: "20+ years in luxury travel. Visited 80+ countries." },
  { name: "Anita Desai", role: "Head of Operations", desc: "Ensures seamless travel experiences for every client." },
  { name: "Vikram Singh", role: "Cruise Director", desc: "Expert in cruise itineraries and luxury sea travel." },
  { name: "Priya Menon", role: "Customer Success Lead", desc: "Dedicated to making every journey unforgettable." },
];

const About = () => (
  <div>
    <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
      <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={heroCruise} alt="About SkyBound" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-overlay" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative z-10 text-center">
        <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Our Story</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">About SkyBound</h1>
      </motion.div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fadeLeft">
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
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                      <p className="font-heading font-bold text-3xl text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight">
            <div className="rounded-2xl overflow-hidden img-zoom" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={teamPhoto} alt="SkyBound Team" className="w-full h-80 lg:h-[450px] object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Our Values</p>
            <h2 className="section-title">What Drives Us</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={i} variant="scaleUp" delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="card-travel p-8 text-center group h-full">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5"
                >
                  <v.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2">Meet The Team</p>
            <h2 className="section-title">Travel Experts Behind SkyBound</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="card-travel p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-2xl text-primary">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <ScrollReveal>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Let our travel experts craft your perfect holiday experience.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/tours" className="btn-accent">Browse Packages</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-outline-light">Contact Us</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </div>
);

export default About;
