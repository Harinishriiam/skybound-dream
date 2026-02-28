import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MapPin, Calendar, Users, Minus, Plus, Search, Check, X } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

const bookingSchema = z.object({
  from: z.string().trim().min(1, "Please select departure city"),
  to: z.string().trim().min(1, "Please select destination"),
  travelDate: z.string().min(1, "Please select travel date"),
  returnDate: z.string().min(1, "Please select return date"),
  adults: z.number().min(1, "At least 1 adult required"),
  children: z.number().min(0),
});

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Kochi", "Goa", "Jaipur"];
const destinations = ["Maldives", "Santorini", "Bali", "Dubai", "Switzerland", "Paris", "Tokyo", "Goa", "Lakshadweep", "Singapore"];

interface BookingFormProps {
  compact?: boolean;
}

const BookingForm = ({ compact = false }: BookingFormProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    from: "",
    to: "",
    travelDate: "",
    returnDate: "",
    adults: 2,
    children: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fill all required fields");
      return;
    }

    if (new Date(form.returnDate) <= new Date(form.travelDate)) {
      setErrors({ returnDate: "Return date must be after travel date" });
      toast.error("Return date must be after travel date");
      return;
    }

    setSubmitted(true);
    toast.success("Searching for the best packages...");
    setTimeout(() => {
      navigate("/tours");
    }, 2000);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 text-center"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-4"
        >
          <Check className="w-8 h-8 text-success-foreground" />
        </motion.div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-2">Finding Your Perfect Trip!</h3>
        <p className="text-muted-foreground text-sm">
          Searching packages from {form.from} to {form.to}...
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
      <div className={`grid gap-4 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-7"}`}>
        {/* From */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">From</label>
          <div className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 bg-muted/50 transition-colors ${errors.from ? "border-destructive" : "border-border focus-within:border-primary"}`}>
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <select
              value={form.from}
              onChange={(e) => updateField("from", e.target.value)}
              className="bg-transparent text-sm text-foreground w-full outline-none font-body appearance-none cursor-pointer"
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          {errors.from && <span className="text-xs text-destructive">{errors.from}</span>}
        </div>

        {/* To */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">To</label>
          <div className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 bg-muted/50 transition-colors ${errors.to ? "border-destructive" : "border-border focus-within:border-primary"}`}>
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <select
              value={form.to}
              onChange={(e) => updateField("to", e.target.value)}
              className="bg-transparent text-sm text-foreground w-full outline-none font-body appearance-none cursor-pointer"
            >
              <option value="">Select Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          {errors.to && <span className="text-xs text-destructive">{errors.to}</span>}
        </div>

        {/* Travel Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">Travel Date</label>
          <div className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 bg-muted/50 transition-colors ${errors.travelDate ? "border-destructive" : "border-border focus-within:border-primary"}`}>
            <Calendar className="w-4 h-4 text-primary shrink-0" />
            <input
              type="date"
              min={today}
              value={form.travelDate}
              onChange={(e) => updateField("travelDate", e.target.value)}
              className="bg-transparent text-sm text-foreground w-full outline-none font-body"
            />
          </div>
          {errors.travelDate && <span className="text-xs text-destructive">{errors.travelDate}</span>}
        </div>

        {/* Return Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">Return Date</label>
          <div className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 bg-muted/50 transition-colors ${errors.returnDate ? "border-destructive" : "border-border focus-within:border-primary"}`}>
            <Calendar className="w-4 h-4 text-primary shrink-0" />
            <input
              type="date"
              min={form.travelDate || today}
              value={form.returnDate}
              onChange={(e) => updateField("returnDate", e.target.value)}
              className="bg-transparent text-sm text-foreground w-full outline-none font-body"
            />
          </div>
          {errors.returnDate && <span className="text-xs text-destructive">{errors.returnDate}</span>}
        </div>

        {/* Adults */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">Adults</label>
          <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 bg-muted/50">
            <Users className="w-4 h-4 text-primary shrink-0" />
            <button type="button" onClick={() => form.adults > 1 && updateField("adults", form.adults - 1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-body font-medium text-foreground min-w-[20px] text-center">{form.adults}</span>
            <button type="button" onClick={() => form.adults < 10 && updateField("adults", form.adults + 1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">Children</label>
          <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 bg-muted/50">
            <Users className="w-4 h-4 text-primary shrink-0" />
            <button type="button" onClick={() => form.children > 0 && updateField("children", form.children - 1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-body font-medium text-foreground min-w-[20px] text-center">{form.children}</span>
            <button type="button" onClick={() => form.children < 6 && updateField("children", form.children + 1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Button */}
        <div className={`flex items-end ${compact ? "col-span-1 sm:col-span-2" : "col-span-2 md:col-span-1"}`}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full gap-2"
          >
            <Search className="w-4 h-4" />
            Search
          </motion.button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
