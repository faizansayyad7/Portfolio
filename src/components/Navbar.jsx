import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

        <h1 className="text-2xl font-bold tracking-wider text-cyan-400">
          FAIZAN<span className="text-white">.</span>
        </h1>

        <ul className="hidden gap-8 text-sm font-medium text-gray-300 lg:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition duration-300 hover:text-cyan-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="hidden rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:scale-105 lg:block"
        >
          Resume
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 flex w-[92%] max-w-7xl flex-col rounded-2xl border border-white/10 bg-[#111]/95 p-5 backdrop-blur-xl lg:hidden">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-3 text-gray-300 transition hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="mt-4 rounded-xl bg-cyan-400 py-3 text-center font-semibold text-black"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}