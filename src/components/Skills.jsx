import { motion } from "framer-motion";
import {
  FaPython,
  FaLinux,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBurpsuite,
  SiWireshark,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "Linux", icon: <FaLinux size={32} /> },
  { name: "Networking", icon: "🌐" },
  { name: "Ethical Hacking", icon: "🛡️" },
  { name: "VAPT", icon: "🔐" },
  { name: "OWASP Top 10", icon: "⚠️" },
  { name: "Burp Suite", icon: <SiBurpsuite size={32} /> },
  { name: "Nmap", icon: "📡" },
  { name: "Wireshark", icon: <SiWireshark size={32} /> },
  { name: "SQL", icon: <SiMysql size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
  { name: "HTML5", icon: <FaHtml5 size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} /> },
  { name: "JavaScript", icon: <FaJs size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-5xl font-black"
        >
          Technical <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl text-center transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >

              <div className="mb-4 flex justify-center text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}