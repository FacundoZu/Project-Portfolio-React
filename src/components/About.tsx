"use client"
import { motion } from "motion/react"
import { courses } from "../../data/courses"

export default function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-stone-950 to-stone-900 text-white py-8"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Sobre mí
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Conoce mi trayectoria profesional y mi pasión por el desarrollo web
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-8 border border-stone-700 hover:border-blue-500/50 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="space-y-6">
            <motion.div
              className="space-y-8"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                Educación
              </h3>

              <div className="relative">
                <motion.div
                  className="absolute left-[1rem] top-[1rem] bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                  className="relative pl-12 pb-8"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute left-[0.075rem] w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-blue-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">
                        Estudio Universitario
                      </span>
                      <span className="text-stone-400 text-sm">
                        feb 2021 - presente
                      </span>
                    </div>
                    <p className="text-stone-300">
                      Universidad Nacional de Salta, Salta Capital, Argentina
                    </p>
                    <p className="text-stone-300">
                      Carrera: Tecnicatura Universitaria en Programación
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>

            <motion.div
              className="space-y-8"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                Cursos y Certificaciones
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="bg-stone-800/30 rounded-lg p-6 border border-stone-700 hover:border-green-500/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1}}
                    whileHover={{ scale: 1.02, borderColor: "#22c55e" }}
                  >
                    <div className="flex items-center gap-3 mb-4 justify-between">
                      <h4 className="text-lg font-semibold text-green-400">
                        {course.name}
                      </h4>
                      <p className="text-stone-300 text-sm font-semibold">
                        {course.date}
                      </p>
                    </div>
                    <div className="my-2">
                      <p className="text-stone-300">{course.plataform}</p>
                      <p className="text-stone-300">{course.description}</p>
                      <p className="text-stone-300">{course.duration}</p>
                    </div>
                    {course.certificate && (
                      <motion.a
                        href={course.certificate}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        Ver Certificado
                      </motion.a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>

            <motion.div
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                Desarrollo Profesional
              </h3>
              <p className="text-stone-300">
                Estoy realizando cursos para ampliar mis conocimientos sobre la
                programación y el desarrollo web, manteniéndome actualizado con
                las últimas tecnologías y tendencias.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
