import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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

function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#050505] text-white">

  <BackgroundGlow />

  <div className="relative z-10">
    <Aurora />
    <ScrollProgress />
    <Cursor />

    <Navbar />
    <Hero />
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