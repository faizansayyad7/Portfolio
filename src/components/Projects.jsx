import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SecureVision SOC",
    image: "/projects/securevision.png",
    description:
      "Mini Security Operations Center dashboard with real-time log monitoring and analytics.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["Python", "Flask", "SQLite"],
  },

  {
    title: "Phishing URL Detector",
    image: "/projects/phishing.png",
    description:
      "Machine Learning based phishing URL detection using Python and Flask.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["Python", "ML", "Flask"],
  },

  {
    title: "Password Security Web",
    image: "/projects/password.png",
    description:
      "Password strength analyzer with breach checker and security suggestions.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: .3 }}
              className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}