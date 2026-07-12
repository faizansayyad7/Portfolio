import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Password Security Web",
    description:
      "A web application that analyzes password strength and promotes secure password practices.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/faizansayyad7/Password-Security-Web",
  },
  {
    title: "Phishing URL Detector",
    description:
      "Python & Flask based application to identify suspicious and phishing URLs.",
    tech: "Python • Flask • Machine Learning",
    github: "https://github.com/faizansayyad7",
  },
  {
    title: "Security Header Auditor",
    description:
      "A tool to analyze website security headers and highlight missing configurations.",
    tech: "Python • Flask",
    github: "https://github.com/faizansayyad7",
  },
  {
    title: "Sales Dashboard",
    description:
      "Interactive Power BI dashboard for analyzing sales trends and business performance.",
    tech: "Power BI • SQL",
    github: "https://github.com/faizansayyad7",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-transparent px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: .5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <h3 className="mb-3 text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mb-5 leading-7 text-gray-300">
                {project.description}
              </p>

              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                {project.tech}
              </span>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-fit items-center gap-3 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                <FaGithub />
                GitHub
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}