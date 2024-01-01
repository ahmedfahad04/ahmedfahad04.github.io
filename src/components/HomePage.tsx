import Footer from "./Footer";
import About from "./Home_Page/About";
import Contact from "./Home_Page/Contact";
import Projects from "./Home_Page/Projects";
import Skills from "./Home_Page/Skills";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
