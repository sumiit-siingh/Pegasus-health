"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Added className to the props
const AnimateOnScroll = ({ children, delay = 0, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    // Applied the className to the outer div
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
