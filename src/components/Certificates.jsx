import { motion } from "framer-motion";

const certificates = [
  {
    title: "Cyber Security Basics",
    org: "Cybrary",
    year: "2026",
  },
  {
    title: "IoT Network Specialist",
    org: "Reliance Foundation",
    year: "2026",
  },
  {
    title: "Cybersecurity Foundation",
    org: "Tech Mahindra Foundation",
    year: "2026",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-transparent py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="text-5xl mb-5">
                🏆
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-cyan-400">
                {item.org}
              </p>

              <span className="mt-6 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                {item.year}
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}