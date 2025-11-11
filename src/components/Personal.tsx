import { motion } from "motion/react"

export default function Personal() {
  return (
    <div className=" text-white py-16 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <section className="w-full md:w-2/6">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute w-90 h-90 m-auto -inset-3.5 bg-linear-to-b from-primary-100 to-primary-200 rounded-lg blur-lg group-hover:blur-xl group-hover:opacity-100 transition"
              ></motion.div>
              <motion.img
                src="../foto-web.png"
                alt="Foto de perfil"
                className="w-80 h-80 p-4 m-auto rounded-4xl object-cover relative"
                initial={{ opacity: 0.5, y: 50, x: -15, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              />
            </div>  
            <div className="flex flex-col mt-6 gap-3 text-center">
              <motion.a
                href="mailto:facundozuleta70@gmail.com"
                className="text-lg font-medium text-stone-300 hover:text-primary-200 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                facundozuleta70@gmail.com
              </motion.a>
              <motion.p
                className="text-lg font-semibold bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                Disponible para trabajar
              </motion.p>
            </div>
          </section>

          <section className="w-full md:w-4/6 space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              ¡Hola! Soy{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200"
                initial={{
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)"
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                Facundo Zuleta
              </motion.span>, un <br />
              <motion.span
                className="bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200"
                initial={{
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)"
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                Desarrollador Web Full Stack
              </motion.span>{" "}
              de Salta, Argentina.
            </motion.h2>

            <motion.p
              className="text-xl text-stone-300 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              ¡Explora mi portafolio para descubrir proyectos únicos y conocer más sobre mí!
            </motion.p>
            <motion.div
              className="flex gap-4 mt-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="#portfolio"
                className="btn-primary"
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Contactar
              </motion.a>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
