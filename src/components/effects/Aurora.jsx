import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      <motion.div
        className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[170px]"
        animate={{
          x: [-100, 120, -100],
          y: [-50, 80, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-200px] top-[25%] h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[170px]"
        animate={{
          x: [120, -120, 120],
          y: [60, -60, 60],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 bottom-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[180px]"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}