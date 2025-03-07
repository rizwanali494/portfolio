import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-full h-full bg-white rounded-full" />
    </motion.div>
  );
}
