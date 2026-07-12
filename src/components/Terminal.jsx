import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Terminal() {
  return (
    <section className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0b0b0b]/90 shadow-[0_0_40px_rgba(34,211,238,.08)]"
      >

        {/* Top Bar */}

        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-sm text-gray-400">
            terminal
          </span>

        </div>

        {/* Terminal Body */}

        <div className="space-y-4 p-8 font-mono text-sm md:text-lg">

          <p className="text-cyan-400">
            $ whoami
          </p>

          <h2 className="text-4xl font-bold text-white">
            Faizan Sayyad
          </h2>

          <p className="text-cyan-400">
            $ role
          </p>

          <p className="text-gray-300">
            Cyber Security Intern
          </p>

          <p className="text-cyan-400">
            $ skills
          </p>

          <p className="text-green-400">
            <Typewriter
              words={[
                "Python",
                "Linux",
                "Networking",
                "Ethical Hacking",
                "VAPT",
                "SQL",
                "React.js",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
            />
          </p>

          <p className="text-cyan-400">
            $ status
          </p>

          <p className="text-green-500">
            Available for Internship ✔
          </p>

        </div>

      </motion.div>

    </section>
  );
}