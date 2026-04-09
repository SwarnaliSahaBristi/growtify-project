import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
}

export const FloatingElement = ({ children, className = "", duration = 6, delay = 0, y = 15 }: Props) => (
  <motion.div
    animate={{ y: [-y/2, y/2, -y/2] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);
