import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const TermsOfService = () => (
  <div>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-3">Terms of Service</h1>
          <p className="text-primary-foreground/70">Last updated: February 28, 2026</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-heading text-sm mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="space-y-6">
          {[
            { title: "Acceptance of Terms", content: "By accessing SkyBound's website and services, you agree to be bound by these Terms of Service. If you disagree, please do not use our services." },
            { title: "Booking & Payments", content: "All bookings are subject to availability. A deposit is required to confirm reservations. Full payment must be received before the travel date as per the package terms." },
            { title: "Cancellation Policy", content: "Cancellations made 30+ days before departure receive a full refund minus processing fee. 15-30 days: 50% refund. Less than 15 days: no refund. Special conditions may apply to cruise bookings." },
            { title: "Travel Documents", content: "Travelers are responsible for ensuring valid passports, visas, and travel documents. SkyBound is not liable for denied entry due to invalid documentation." },
            { title: "Liability", content: "SkyBound acts as an intermediary between travelers and service providers. We are not liable for acts of third-party providers, natural disasters, or force majeure events." },
            { title: "Modifications", content: "We reserve the right to modify itineraries, prices, or services due to circumstances beyond our control. Affected customers will be notified and offered alternatives." },
            { title: "Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Mumbai, Maharashtra." },
          ].map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <h2 className="font-heading font-bold text-xl text-foreground">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default TermsOfService;
