import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28"
        >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-10 lg:grid-cols-2">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm tracking-widest text-cyan-300">
            CLOUD • DEVOPS • CYBER SECURITY
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            FAIZAN
            <br />
            <span className="text-cyan-400">SAYYAD</span>
          </h1>

          <p className="mt-8 text-xl text-cyan-400 font-semibold">
  <Typewriter
    words={[
      "Cloud & DevOps Trainee",
      "AWS Cloud Enthusiast",
      "Linux System Administrator",
      "Cyber Security Enthusiast",
    ]}
    loop={0}
    cursor
    cursorStyle="_"
    typeSpeed={80}
    deleteSpeed={40}
  />
</p>

<p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
  Building secure and scalable cloud infrastructure with AWS, Linux and DevOps practices while continuously expanding my Cyber Security expertise.
</p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              View Projects
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-lg transition hover:border-cyan-400 hover:text-cyan-400">
              Download Resume
            </button>
          </div>

         <div className="mt-10 flex gap-5">

  <a
    href="https://github.com/faizansayyad7"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="https://linkedin.com/in/faizansayyad1076"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="mailto:faizansayyad1076@gmail.com"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaEnvelope size={20} />
  </a>

</div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">

  <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-4 text-center backdrop-blur-lg">
    <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
    <p className="mt-2 text-sm text-gray-400">
      Projects
    </p>
  </div>

  <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-4 text-center backdrop-blur-lg">
    <h3 className="text-3xl font-bold text-cyan-400">3</h3>
    <p className="mt-2 text-sm text-gray-400">
      Certificates
    </p>
  </div>

  <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-4 text-center backdrop-blur-lg">
    <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
    <p className="mt-2 text-sm text-gray-400">
      Passion
    </p>
  </div>

</div>

        </motion.div>

        
        
        {/* RIGHT */}
        <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -12, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { duration: 0.8 },
    y: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  }}
  className="flex justify-center"
>
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl" />

            {/* Avatar Frame */}

            <div className="relative flex h-[500px] w-[500px] items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/20 animate-pulse"></div>

            {/* Glass Circle */}
                <div className="relative flex h-[430px] w-[430px] items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl overflow-hidden">

                <div className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/30"></div>

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 18,
    ease: "linear",
  }}
  className="absolute h-[490px] w-[490px] rounded-full border-2 border-dashed border-cyan-400/40"
/>

             <img
  src="/avatar.png"
  alt="Faizan Sayyad"
  className="w-full h-full object-contain"
/>
        </div>

        </div>

        <motion.div
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="absolute -top-20 right-10 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
>
  🟢 Available for Internship
</motion.div>

            {/* Status Card */}
            <div className="absolute -bottom-5 left-1/2 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status</span>

                <span className="flex items-center gap-2 text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  Available
                </span>
              </div>

              <div className="mt-3 border-t border-white/10 pt-3 text-sm text-gray-300">
                Cloud & DevOps Trainee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

