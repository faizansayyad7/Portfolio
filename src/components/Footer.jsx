import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">

        <h2 className="text-3xl font-bold">
          Faizan <span className="text-cyan-400">Sayyad</span>
        </h2>

        <p className="text-gray-400">
          Cyber Security Intern • VAPT Enthusiast • Python Developer
        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/faizansayyad7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/faizansayyad1076"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:faizansayyad1076@gmail.com"
            className="hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 Faizan Sayyad. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}