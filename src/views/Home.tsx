import About from "../components/About";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skils from "../components/Skils";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div>
      <Personal />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skils />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
