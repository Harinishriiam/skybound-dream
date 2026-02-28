import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface StaggerContainerProps {
  children: ReactNode[];
  staggerDelay?: number;
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";
  className?: string;
}

const StaggerContainer = ({ children, staggerDelay = 0.1, variant = "fadeUp", className = "" }: StaggerContainerProps) => {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal key={i} variant={variant} delay={i * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
};

export default StaggerContainer;
