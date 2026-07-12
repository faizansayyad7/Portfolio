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

function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;