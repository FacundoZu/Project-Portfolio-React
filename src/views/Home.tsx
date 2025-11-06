import About from "../components/About";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Skils from "../components/Skils";
import Contact from "../components/Contact";
import MoreProjects from "../components/MoreProjects";
import Cetzz from "../components/Cetzz";

export default function Home() {

  return (
    <div>
      <Personal />
      <About />
      <Projects />
      <Cetzz />
      <MoreProjects />
      <Skils />
      <Contact />
    </div>
  )
}
