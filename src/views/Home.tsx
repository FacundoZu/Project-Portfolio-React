import About from "../components/About";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skils from "../components/Skils";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div>
      <Personal />
      <About />
      <Skils />
      <Projects />
      <Contact />
    </div>
  )
}
