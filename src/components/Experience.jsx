import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Cyber Security Intern",
    company: "IT Roots Pvt. Ltd.",
    date: "2026 - Present",
    description:
      "Learning Ethical Hacking, Vulnerability Assessment, Penetration Testing, Linux Security, Networking, Web Application Security and building real-world cybersecurity projects.",
  },

  {
    role: "Bachelor of Science (B.Sc.CS)",
    company: "Savitribai Phule Pune University",
    date: "2022 - 2025",
    description:
      "Completed Bachelor of Science (Computer Science) while strengthening problem-solving, analytical thinking and technical skills, alongside continuous learning in Cyber Security.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 bg-cyan-400/30"></div>

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="relative mb-14 pl-20"
            >

              <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-black">

                <FaBriefcase />

              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-7 backdrop-blur-xl">

                <h3 className="text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {item.company}
                </p>

                <span className="text-gray-500">
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