import { FaGithub } from "react-icons/fa";
import { projects as projectsData } from "../../data/projects";
import { Project } from "../types/index.ts";
import { getTechnology } from "../../data/technologies.ts";

export default function Projects() {

  const projects: Project[] = projectsData

  return (
    <div id="portfolio" className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Proyectos Destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Explora mis trabajos más recientes y descubre cómo puedo ayudarte con tu próximo proyecto
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-stone-900/80 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-101 transition-all duration-200 border border-stone-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 h-full"
              onClick={() => window.location.href = `/project/${index}`}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {project.title}
                </h3>
                <p className="text-stone-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => {
                    const technology = getTechnology(tech);
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {technology?.icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-blue-400 transition-colors z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-7 h-7 hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


