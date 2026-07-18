import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "Faizan Sayyad",

  "",

  "$ education",
  "Bachelor of Science (B.Sc.)",

  "",

  "$ current_role",
  "Cloud & DevOps Trainee",

  "",

  "$ cloud_stack",
  "AWS | EC2 | S3 | CloudFront | IAM",

  "",

  "$ devops_stack",
  "Linux | Git | GitHub | Docker (Learning)",

  "",

  "$ cybersecurity",
  "VAPT | Networking | Python | OWASP Top 10",

  "",

  "$ certifications",
  "AWS Cloud Training",
  "Cyber Security Basics",
  "IoT Network Specialist",
  "Cybersecurity Foundation",

  "",

  "$ career_path",
  "Cloud Engineer → DevOps Engineer → DevSecOps → Cyber Security",

  "",

  "$ status",
  "Available for Internship & Entry-Level Roles ✔",
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Stop safely when all lines are rendered
      if (index >= lines.length) {
        clearInterval(interval);
        return;
      }

      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      >
        {/* Top Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="ml-4 font-mono text-sm text-gray-400">
            faizan@cloud-devops:~
          </span>
        </div>

        {/* Terminal Body */}
        <div className="space-y-3 p-8 font-mono text-sm md:text-lg">

          {visibleLines.map((line, index) => (

            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={
                line && line.startsWith("$")
                  ? "text-cyan-400"
                  : "text-green-400"
              }
            >
              {line}
            </motion.p>

          ))}

          <span className="animate-pulse text-cyan-400">█</span>

        </div>
      </motion.div>
    </section>
  );
}