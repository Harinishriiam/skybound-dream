import { MapPin, Phone, Mail, Clock } from "lucide-react";
import destSantorini from "@/assets/destination-santorini.jpg";

const Contact = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={destSantorini} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="section-title text-2xl md:text-3xl mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-body" />
                  </div>
                  <div>
                    <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email</label>
                    <input type="email" placeholder="john@email.com" className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-body" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-body" />
                </div>
                <div>
                  <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea rows={5} placeholder="Tell us about your dream trip..." className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-body resize-none" />
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="section-title text-2xl md:text-3xl mb-2">Contact Info</h2>
              <p className="text-muted-foreground text-sm mb-6">We'd love to hear from you. Reach out to us through any of the following channels.</p>

              {[
                { icon: MapPin, title: "Office Address", text: "123 Skyline Tower, Marine Drive, Mumbai 400001, India" },
                { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                { icon: Mail, title: "Email", text: "hello@skybound.travel" },
                { icon: Clock, title: "Working Hours", text: "Mon – Sat: 9 AM – 7 PM" },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.text}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden bg-muted h-48 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground font-heading">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
