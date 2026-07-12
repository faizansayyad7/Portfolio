import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-10"
        >

          <h2 className="text-5xl font-bold text-center">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for Cyber Security internship and
            entry-level opportunities. Feel free to connect with me.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <a
              href="mailto:faizansayyad1076@gmail.com"
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 hover:border-cyan-400 transition"
            >
              <FaEnvelope size={30} className="text-cyan-400 mb-4" />

              <h3 className="text-xl font-bold">
                Email
              </h3>

              <p className="mt-2 text-gray-400 break-all">
                faizansayyad1076@gmail.com
              </p>
            </a>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6">

              <FaMapMarkerAlt
                size={30}
                className="text-cyan-400 mb-4"
              />

              <h3 className="text-xl font-bold">
                Location
              </h3>

              <p className="mt-2 text-gray-400">
                Maharashtra, India
              </p>

            </div>

          </div>

          <div className="flex justify-center gap-6 mt-12">

            <a
              href="https://github.com/faizansayyad7"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/faizansayyad1076"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}