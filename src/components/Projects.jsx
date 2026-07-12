import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "SecureVision SOC",
    image: "/projects/securevision.png",
    description:
      "Mini Security Operations Center dashboard with real-time log monitoring, threat analytics and incident management.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["Python", "Flask", "SQLite"],
  },
  {
    title: "Phishing URL Detector",
    image: "/projects/phishing.png",
    description:
      "Machine Learning based phishing URL detection using Python and Flask with real-time prediction.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["Python", "Machine Learning", "Flask"],
  },
  {
    title: "Password Security Web",
    image: "/projects/password.png",
    description:
      "Password strength analyzer with breach checker, password generator and security recommendations.",
    github: "https://github.com/faizansayyad7",
    demo: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-5xl font-black"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1200}
              transitionSpeed={1500}
              scale={1.03}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#22d3ee"
              glarePosition="all"
            >

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition duration-300 hover:scale-105"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>
    </section>
  );
}