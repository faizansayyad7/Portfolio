import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Cloud & DevOps Trainee",
    company: "IT Roots Pvt. Ltd.",
    date: "2026 - Present",
    description:
      "Hands-on training in AWS Cloud, Linux administration, Git, GitHub and DevOps fundamentals. Currently building real-world cloud infrastructure projects while continuously strengthening Cyber Security knowledge with the goal of becoming a DevSecOps Engineer.",
  },

  {
    role: "Bachelor of Science (B.Sc. Computer Science)",
    company: "Savitribai Phule Pune University",
    date: "2022 - 2025",
    description:
      "Completed a Bachelor's degree in Computer Science with a strong foundation in programming, networking, databases and operating systems. Developed problem-solving skills while exploring Cloud Computing, DevOps and Cyber Security.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center text-5xl font-black"
        >
          Experience & <span className="text-cyan-400">Education</span>
        </motion.h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-cyan-400/30"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-14 pl-20"
            >
              <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                <FaBriefcase />
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.20)]">

                <h3 className="text-2xl font-bold text-white">
                  {item.role}
                </h3>

                <p className="mt-2 font-medium text-cyan-400">
                  {item.company}
                </p>

                <span className="text-sm text-gray-500">
                  {item.date}
                </span>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}