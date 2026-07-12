import { motion } from "framer-motion";

const circles = [
  {
    size: 280,
    top: "10%",
    left: "8%",
    color: "bg-cyan-500/20",
    duration: 8,
  },
  {
    size: 220,
    top: "60%",
    left: "70%",
    color: "bg-violet-500/20",
    duration: 10,
  },
  {
    size: 180,
    top: "30%",
    left: "55%",
    color: "bg-sky-500/20",
    duration: 7,
  },
];

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {circles.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[120px] ${item.color}`}
          style={{
            width: item.size,
            height: item.size,
            top: item.top,
            left: item.left,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}