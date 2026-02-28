import { Link } from "react-router-dom";
import { Plane, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => (
  <div>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-3">Privacy Policy</h1>
          <p className="text-primary-foreground/70">Last updated: February 28, 2026</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-heading text-sm mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="prose prose-lg max-w-none space-y-6">
          {[
            { title: "Information We Collect", content: "We collect personal information you provide when booking trips, creating accounts, or contacting us. This includes your name, email, phone number, travel preferences, and payment details." },
            { title: "How We Use Your Information", content: "Your information is used to process bookings, provide customer support, send travel updates, and personalize your experience. We may also use it for marketing with your consent." },
            { title: "Data Protection", content: "We implement industry-standard security measures to protect your personal data. All payment information is encrypted and processed through secure payment gateways." },
            { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings." },
            { title: "Third-Party Sharing", content: "We share necessary information with travel partners (airlines, hotels, cruise operators) to fulfill your bookings. We do not sell your personal data to third parties." },
            { title: "Your Rights", content: "You have the right to access, correct, or delete your personal data. Contact us at privacy@skybound.travel for any data-related requests." },
            { title: "Contact Us", content: "For any privacy concerns, reach us at privacy@skybound.travel or call +91 98765 43210." },
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

export default PrivacyPolicy;
