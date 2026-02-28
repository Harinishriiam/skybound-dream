import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";
import destSantorini from "@/assets/destination-santorini.jpg";
import mapMumbai from "@/assets/map-mumbai.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
  };

  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={destSantorini} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative z-10 text-center">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Contact Us</h1>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="section-title text-2xl md:text-3xl mb-6">Send Us a Message</h2>
              </ScrollReveal>
              {submitted ? (
                <ScrollReveal variant="scaleUp">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 bg-muted rounded-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="w-10 h-10 text-success-foreground" />
                    </motion.div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you, {form.name}. We'll reply to {form.email} within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }} className="btn-primary mt-6">Send Another Message</button>
                  </motion.div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={0.1}>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name</label>
                        <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="John Doe" className={`w-full px-4 py-3 rounded-lg border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none transition-colors font-body ${errors.name ? "border-destructive" : "border-border focus:border-primary"}`} />
                        {errors.name && <span className="text-xs text-destructive mt-1">{errors.name}</span>}
                      </div>
                      <div>
                        <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email</label>
                        <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@email.com" className={`w-full px-4 py-3 rounded-lg border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none transition-colors font-body ${errors.email ? "border-destructive" : "border-border focus:border-primary"}`} />
                        {errors.email && <span className="text-xs text-destructive mt-1">{errors.email}</span>}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+91 98765 43210" className={`w-full px-4 py-3 rounded-lg border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none transition-colors font-body ${errors.phone ? "border-destructive" : "border-border focus:border-primary"}`} />
                      {errors.phone && <span className="text-xs text-destructive mt-1">{errors.phone}</span>}
                    </div>
                    <div>
                      <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message</label>
                      <textarea rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your dream trip..." className={`w-full px-4 py-3 rounded-lg border bg-muted/50 text-foreground placeholder:text-muted-foreground outline-none transition-colors font-body resize-none ${errors.message ? "border-destructive" : "border-border focus:border-primary"}`} />
                      {errors.message && <span className="text-xs text-destructive mt-1">{errors.message}</span>}
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn-primary gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </motion.button>
                  </form>
                </ScrollReveal>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal variant="fadeRight">
                <h2 className="section-title text-2xl md:text-3xl mb-2">Contact Info</h2>
                <p className="text-muted-foreground text-sm mb-6">We'd love to hear from you. Reach out through any of the following channels.</p>
              </ScrollReveal>

              {[
                { icon: MapPin, title: "Office Address", text: "123 Skyline Tower, Marine Drive, Mumbai 400001, India" },
                { icon: Phone, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", text: "hello@skybound.travel", href: "mailto:hello@skybound.travel" },
                { icon: Clock, title: "Working Hours", text: "Mon – Sat: 9 AM – 7 PM" },
              ].map((info, i) => (
                <ScrollReveal key={i} variant="fadeRight" delay={0.1 + i * 0.08}>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{info.text}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.text}</p>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              <ScrollReveal variant="fadeRight" delay={0.5}>
                <div className="rounded-xl overflow-hidden h-48">
                  <img src={mapMumbai} alt="SkyBound Office Location - Mumbai Marine Drive" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
