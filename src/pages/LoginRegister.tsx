import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plane, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import heroCruise from "@/assets/hero-cruise.jpg";

const loginSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (isLogin) {
      const result = loginSchema.safeParse(form);
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
        setErrors(fieldErrors);
        return;
      }
      toast.success("Welcome back! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } else {
      const result = registerSchema.safeParse(form);
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
        setErrors(fieldErrors);
        return;
      }
      toast.success("Account created successfully! Welcome aboard.");
      setTimeout(() => navigate("/"), 1500);
    }
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Left - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={heroCruise} alt="Travel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay flex items-center justify-center">
          <div className="text-center p-10">
            <Plane className="w-12 h-12 text-primary-foreground mb-4 mx-auto" />
            <h2 className="font-heading font-bold text-4xl text-primary-foreground mb-3">SkyBound</h2>
            <p className="text-primary-foreground/70 text-lg">The World, Within Reach</p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isLogin ? "Sign in to access your bookings and travel plans" : "Join SkyBound for exclusive travel deals"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-3 bg-muted/50 ${errors.name ? "border-destructive" : "border-border focus-within:border-primary"}`}>
                  <User className="w-4 h-4 text-primary shrink-0" />
                  <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="John Doe" className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none font-body" />
                </div>
                {errors.name && <span className="text-xs text-destructive mt-1">{errors.name}</span>}
              </div>
            )}

            <div>
              <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email</label>
              <div className={`flex items-center gap-2 border rounded-lg px-3 py-3 bg-muted/50 ${errors.email ? "border-destructive" : "border-border focus-within:border-primary"}`}>
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@email.com" className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none font-body" />
              </div>
              {errors.email && <span className="text-xs text-destructive mt-1">{errors.email}</span>}
            </div>

            <div>
              <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Password</label>
              <div className={`flex items-center gap-2 border rounded-lg px-3 py-3 bg-muted/50 ${errors.password ? "border-destructive" : "border-border focus-within:border-primary"}`}>
                <Lock className="w-4 h-4 text-primary shrink-0" />
                <input type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => updateField("password", e.target.value)} placeholder="••••••••" className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none font-body" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <span className="text-xs text-destructive mt-1">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div>
                <label className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Confirm Password</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-3 bg-muted/50 ${errors.confirmPassword ? "border-destructive" : "border-border focus-within:border-primary"}`}>
                  <Lock className="w-4 h-4 text-primary shrink-0" />
                  <input type="password" value={form.confirmPassword} onChange={(e) => updateField("confirmPassword", e.target.value)} placeholder="••••••••" className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none font-body" />
                </div>
                {errors.confirmPassword && <span className="text-xs text-destructive mt-1">{errors.confirmPassword}</span>}
              </div>
            )}

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn-primary w-full">
              {isLogin ? "Sign In" : "Create Account"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => { setIsLogin(!isLogin); setErrors({}); }}
              className="text-primary font-heading font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginRegister;
