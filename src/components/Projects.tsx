import { FaGithub } from "react-icons/fa";
import { projects as projectsData } from "../../data/projects";
import { Project } from "../types/index.ts";
import Slider from "react-slick";
import { getTechnology } from "../../data/technologies.ts";
import { motion } from "motion/react";

export default function Projects() {
  const projects: Project[] = projectsData;

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div
      id="portfolio"
      className="w-full min-h-screen text-white py-16"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
          Proyectos Destacados
        </h2>
        <motion.div
          className="w-24 h-1 bg-linear-to-r from-primary-100 to-primary-200 mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Explora mis trabajos más recientes y descubre cómo puedo ayudarte con
          tu próximo proyecto
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer bg-bg-200/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary-100/20 h-full flex flex-col"
              onClick={() => (window.location.href = `/project/${index}`)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Slider {...settings}>
                  {project.images.map((image, idx) => (
                    <motion.img
                      key={idx}
                      src={image}
                      alt={project.title}
                      className="w-full h-72 object-cover aspect-video"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ))}
                </Slider>
                <div className="absolute inset-0" />
              </div>

              <div className="p-6 flex flex-col grow">
                <motion.h3
                  className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-stone-300 mb-4 line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => {
                    const technology = getTechnology(tech);
                    return (
                      <motion.span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1 text-sm text-accent-100 bg-primary-100/10 text-primary-400 rounded-full border border-primary-200/20"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {technology?.icon}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>

                <div className="mt-auto flex justify-end pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-accent-100 transition-colors z-10"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaGithub className="w-7 h-7" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </div>
  );
}
