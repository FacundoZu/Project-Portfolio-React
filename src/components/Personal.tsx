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
          {/* Imagen + datos */}
          <section className="w-full md:w-2/6">
            <div className="relative group">
              {/* Glow detrás */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute w-92 h-92 m-auto -inset-3.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg blur-lg group-hover:blur-xl group-hover:opacity-100 transition"
              ></motion.div>
              {/* Imagen */}
              <motion.img
                src="../perfil_default.jpg"
                alt="Foto de perfil"
                className="w-80 h-80 m-auto rounded-lg object-cover relative"
                initial={{ opacity: 0.5, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
              />
            </div>
            {/* Info de contacto */}
            <div className="flex flex-col mt-6 gap-3 text-center">
              <motion.a
                href="mailto:facundozuleta70@gmail.com"
                className="text-lg font-medium text-stone-300 hover:text-blue-400 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 1 }}
              >
                facundozuleta70@gmail.com
              </motion.a>
              <motion.p
                className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 1.2 }}
              >
                Disponible para trabajar
              </motion.p>
            </div>
          </section>

          {/* Texto */}
          <section className="w-full md:w-4/6 space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1 }}
            >
              ¡Hola! Soy{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Facundo Zuleta
              </span>, un <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Desarrollador Web Full Stack
              </span>{" "}
              de Salta, Argentina.
            </motion.h2>

            <motion.p
              className="text-xl text-stone-300 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1.2 }}
            >
              ¡Explora mi portafolio para descubrir proyectos únicos y conocer más sobre mí!
            </motion.p>

            {/* Botones */}
            <motion.div
              className="flex gap-4 mt-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1.3 }}
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium transition-all duration-300"
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, color: "#60a5fa", borderColor: "#60a5fa" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-stone-600 rounded-lg font-medium transition-all duration-300"
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
