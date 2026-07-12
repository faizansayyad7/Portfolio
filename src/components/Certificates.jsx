import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Cyber Security Basics",
    issuer: "Cybrary",
    date: "June 2026",
    image: "/certificates/cybrary.jpg",
  },
  {
    title: "IoT Network Specialist",
    issuer: "Reliance Foundation",
    date: "June 2026",
    image: "/certificates/iot.jpg",
  },
  {
    title: "Cybersecurity Foundation",
    issuer: "Tech Mahindra Foundation",
    date: "June 2026",
    image: "/certificates/techmahindra.jpg",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.20)]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <FaAward
                  className="mb-4 text-cyan-400"
                  size={28}
                />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.issuer}
                </p>

                <p className="mt-1 text-sm text-cyan-400">
                  {item.date}
                </p>

                <button className="mt-6 flex items-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 transition hover:bg-cyan-400 hover:text-black">
                  <FaExternalLinkAlt />
                  View Certificate
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}