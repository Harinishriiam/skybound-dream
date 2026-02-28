import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, ArrowLeft, MapPin } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mb-6"
        >
          <Plane className="w-16 h-16 text-primary mx-auto" />
        </motion.div>
        <h1 className="font-heading font-bold text-7xl md:text-9xl text-primary mb-4">404</h1>
        <h2 className="font-heading font-semibold text-2xl text-foreground mb-3">Lost in Paradise?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this destination doesn't exist yet. Let us help you find your way back to amazing travel experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="btn-primary gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/destinations" className="btn-accent gap-2">
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
