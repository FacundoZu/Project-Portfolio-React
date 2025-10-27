import { FaArrowDown, FaTimes } from "react-icons/fa";
import { moreProjects as moreProjectsData } from "../../data/moreProjets"
import type { MoreProjects } from "../types/index.ts"
import { useState } from "react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

interface MoreProjectsPopupProps {
  project: MoreProjects;
  index: number;
}

export default function MoreProjects() {
  const [open, setOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState<MoreProjectsPopupProps | null>(null);
  const moreProjects: MoreProjects[] = moreProjectsData;

  const openPopup = (project: MoreProjects, index: number) => {
    setSelectedProject({ project, index });
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
          Más Proyectos
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-primary-100 to-primary-200 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Descubre otros proyectos con los que he aprendido
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setOpen(!open)}
            className="btn-primary flex items-center gap-2 text-white"
          >
            {open ? "Ocultar Proyectos" : "Ver Más Proyectos"}
            <FaArrowDown className={`size-5 transition-all duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, height: 0 },
                show: { opacity: 1, height: "auto", transition: { staggerChildren: 0.15 } }
              }}
            >
              {moreProjects.map((project, index) => {
                return (
                  <motion.div
                    key={index}
                    onClick={() => openPopup(project, index)}
                    layoutId={`project-${index}`}
                    whileHover={{ scale: 1.02 }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="bg-bg-200/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:shadow-lg hover:shadow-primary-100/20 h-full flex flex-col cursor-pointer"
                  >
                    {project.img && (
                      <div className="relative w-full h-48 overflow-hidden group">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6 grow">
                      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
                        {project.name}
                      </h3>
                      <p className="text-stone-300 mb-6 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                      <a
                        href={project.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project-link"
                      >
                        Ver Proyecto
                        <FaArrowUpRightFromSquare className="size-5 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 p-4 z-50 flex items-center justify-center bg-black/50"
            onClick={closePopup}
          >
            <motion.div
              className="relative bg-stone-900 w-full max-w-full sm:max-w-2xl lg:max-w-6xl max-h-[90vh] rounded-lg sm:rounded-xl shadow-2xl"
              layoutId={`project-${selectedProject.index}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white hover:bg-stone-300 text-gray-700 hover:text-gray-900 rounded-full p-2 shadow-lg"
                onClick={closePopup}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-64 md:h-full">
                  <img
                    className="w-full h-full object-cover aspect-video rounded-t-lg md:rounded-l-lg md:rounded-tr-none z-40"
                    src={selectedProject.project.img}
                    alt={selectedProject.project.name}
                  />
                </div>
                <div className='flex flex-col justify-between p-4'>
                  <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
                    {selectedProject.project.name}
                  </h2>

                  <div
                    className="text-gray-600"
                  >
                    <p className="text-stone-300 line-clamp-3">
                      {selectedProject.project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <a
                      href={selectedProject.project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 mt-4 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors border border-blue-500/30 hover:border-blue-400/50 cursor-pointer"
                    >
                      Ver Proyecto
                      <FaArrowUpRightFromSquare className="size-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
