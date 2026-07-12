import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-transparent px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl bg-black/30 p-4 outline-none border border-white/10 focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl bg-black/30 p-4 outline-none border border-white/10 focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full rounded-xl bg-black/30 p-4 outline-none border border-white/10 focus:border-cyan-400"
          ></textarea>

          <button
            className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}