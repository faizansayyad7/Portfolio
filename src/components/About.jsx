import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-transparent px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-5xl font-bold"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              Who Am I?
            </h3>

            <p className="leading-8 text-gray-300">
              I'm <b>Faizan Sayyad</b>, a Cyber Security Intern passionate about
              ethical hacking, VAPT, networking and Python development. I enjoy
              building secure applications and continuously improving my
              cybersecurity skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              Highlights
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Cyber Security Intern</li>
              <li>✔ VAPT Enthusiast</li>
              <li>✔ Python Developer</li>
              <li>✔ SQL & Power BI</li>
              <li>✔ Learning DSA</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}