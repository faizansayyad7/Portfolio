import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="h-28 w-28 rounded-full border-4 border-cyan-400 border-t-transparent"
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="mt-10 text-3xl font-bold tracking-widest text-cyan-400"
      >
        INITIALIZING...
      </motion.h1>

      <p className="mt-3 text-gray-400">
        Loading Portfolio
      </p>
    </motion.div>
  );
}