import { FaGithub } from "react-icons/fa";

export default function Projects() {
  interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
  }
  const projects: Project[] = [
    {
      title: "Project Alpha",
      description: "A modern web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
    },
    {
      title: "Dashboard Pro",
      description: "Professional dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "D3.js", "Firebase"],
      github: "https://github.com",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      github: "https://github.com",
    },
    {
      title: "Project Alpha2",
      description: "A modern web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
    },
    {
      title: "Dashboard Pro2",
      description: "Professional dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "D3.js", "Firebase"],
      github: "https://github.com",
    },
    {
      title: "E-Commerce Platform2",
      description: "Full-featured e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      github: "https://github.com",
    },
  ]
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-white py-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-stone-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-101 transition-all duration-200 border border-stone-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative group">
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
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-blue-400 transition-colors"
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


