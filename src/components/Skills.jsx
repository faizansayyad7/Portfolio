import { motion } from "framer-motion";

const skills = [
  { name: "Cyber Security", level: 90 },
  { name: "Python", level: 85 },
  { name: "Linux", level: 80 },
  { name: "Networking", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Power BI", level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050505] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <div className="mb-3 flex justify-between">

                <span className="font-semibold">
                  {skill.name}
                </span>

                <span className="text-cyan-400">
                  {skill.level}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}