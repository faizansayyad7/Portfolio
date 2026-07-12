import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Cyan Glow */}
      <motion.div
        className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="absolute right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[150px]"
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
      />

    </div>
  );
}