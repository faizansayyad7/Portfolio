import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026 - Present",
    title: "Cyber Security Intern",
    company: "IT Roots Pvt. Ltd.",
    description:
      "Learning VAPT, Linux, Networking, Python and building cybersecurity projects."
  },
  {
    year: "2026",
    title: "Cyber Security Certifications",
    company: "Cybrary | Reliance Foundation | Tech Mahindra Foundation",
    description:
      "Completed cybersecurity fundamentals, IoT networking and security training."
  },
  {
    year: "2025",
    title: "BSc CS Student",
    company: "Computer Science",
    description:
      "Focused on Cyber Security, Python, SQL, DSA and secure application development."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-transparent px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Experience <span className="text-cyan-400">& Education</span>
        </motion.h2>

        <div className="relative border-l border-cyan-400/40 pl-8">

          {timeline.map((item) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              className="relative mb-12"
            >

              <div className="absolute -left-[42px] h-5 w-5 rounded-full bg-cyan-400"></div>

              <span className="text-cyan-400">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <h4 className="mb-3 text-gray-400">
                {item.company}
              </h4>

              <p className="leading-7 text-gray-300">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}