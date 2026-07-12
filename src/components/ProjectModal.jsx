import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ image, title, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute right-8 top-8 text-3xl text-white hover:text-cyan-400"
          >
            <FaTimes />
          </button>

          <motion.img
            src={image}
            alt={title}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-cyan-400/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}