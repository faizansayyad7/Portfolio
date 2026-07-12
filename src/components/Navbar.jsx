import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-cyan-400/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

  {/* Logo */}

  <a
    href="#home"
    className="text-2xl font-black tracking-widest transition hover:scale-105"
  >
    <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
      FAIZAN
    </span>
  </a>

  {/* Desktop Menu */}

  <ul className="hidden items-center gap-8 md:flex">

    {links.map((link) => (

      <li key={link.id}>

        <a
          href={`#${link.id}`}
          className={`relative pb-2 font-medium transition duration-300 ${
            active === link.id
              ? "text-cyan-400"
              : "text-gray-300 hover:text-cyan-400"
          }`}
        >
          {link.name}

          {active === link.id && (

            <motion.div
              layoutId="activeLink"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400"
            />

          )}

        </a>

      </li>

    ))}

  </ul>

  {/* Resume */}

  <a
    href="/resume/Faizan_Sayyad_Resume.pdf"
    download
    className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 font-semibold text-cyan-300 transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black lg:block"
  >
    Resume
  </a>

  {/* Mobile Menu Button */}

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-cyan-400 text-2xl lg:hidden"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

</div>

      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="absolute left-0 top-full w-full border-t border-cyan-400/20 bg-black/95 backdrop-blur-xl lg:hidden"
    >
      <div className="flex flex-col py-6">

        {links.map((link) => (

          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`px-8 py-4 transition ${
              active === link.id
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            {link.name}
          </a>

        ))}

        <a
          href="/resume/Faizan_Sayyad_Resume.pdf"
          download
          className="mx-8 mt-4 rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-black"
        >
          Download Resume
        </a>

      </div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
}