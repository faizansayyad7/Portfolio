import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    title: "Projects Completed",
  },
  {
    number: "3+",
    title: "Certifications",
  },
  {
    number: "1+",
    title: "Internship",
  },
  {
    number: "100%",
    title: "Learning Passion",
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all"
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}