import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Terminal from "./components/Terminal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Cursor from "./components/effects/Cursor";
import BackgroundGlow from "./components/effects/BackgroundGlow";
import ScrollProgress from "./components/effects/ScrollProgress";
import Aurora from "./components/effects/Aurora";
import Spotlight from "./components/effects/Spotlight";

import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative overflow-x-hidden bg-[#050505] text-white">

      <BackgroundGlow />
      <Aurora />
      <Spotlight />

      <div className="relative z-10">
        <ScrollProgress />
        <Cursor />

        <Navbar />
        <Hero />
        <Stats />
        <Terminal />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;