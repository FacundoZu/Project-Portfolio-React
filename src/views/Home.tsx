import About from "../components/About";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skils from "../components/Skils";
import Contact from "../components/Contact";
import MoreProjects from "../components/MoreProjects";

export default function Home() {
  return (
    <div>
      <Personal />
      <About />
      <Skils />
      <Projects />
      <MoreProjects />
      <Contact />
    </div>
  )
}
