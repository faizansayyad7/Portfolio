import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-[#050505] py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>

          <h2 className="text-2xl font-black">
            <span className="text-cyan-400">Faizan</span> Sayyad
          </h2>

          <p className="mt-2 text-gray-400">
            Cyber Security Intern • VAPT Enthusiast • Python Developer
          </p>

        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/faizansayyad7"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 transition hover:bg-cyan-400 hover:text-black"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/faizansayyad1076"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 transition hover:bg-cyan-400 hover:text-black"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Faizan Sayyad • Built with React & Tailwind • Made with{" "}
        <FaHeart className="mx-1 inline text-red-500" />

      </div>

    </footer>
  );
}