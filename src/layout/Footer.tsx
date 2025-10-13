import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";
import { motion } from "motion/react"

export default function Footer() {
    const [copiado, setCopiado] = useState(false);
    const email = "facundozuleta70@gmail.com";

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(email);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <footer className="w-full bg-stone-950 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4 text-center">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Facundo Zuleta
                        </h3>
                        <p className="text-stone-400">
                            Desarrollador Web Full Stack apasionado por crear soluciones digitales innovadoras.
                        </p>
                    </div>

                    <div className="space-y-4 text-center">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-stone-400 hover:text-blue-400 transition-colors"
                                >
                                    Sobre mí
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('skills')}
                                    className="text-stone-400 hover:text-blue-400 transition-colors"
                                >
                                    Habilidades
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="text-stone-400 hover:text-blue-400 transition-colors"
                                >
                                    Proyectos
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-stone-400 hover:text-blue-400 transition-colors"
                                >
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-center">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Conectemos
                        </h3>
                        <div className="flex gap-6 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://github.com/FacundoZu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-400 hover:text-purple-400 transition-colors"
                            >
                                <FaGithub className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.linkedin.com/in/facundo-zuleta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-400 hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.button
                                onClick={handleCopyClick}
                                className="relative text-stone-400 hover:text-red-400 transition-colors flex items-center justify-center rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Copiar correo al portapapeles"
                            >
                                <motion.div
                                    key={copiado ? "check" : "envelope"}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {copiado ? (
                                        <FaCheck className="w-6 h-6 text-green-500" />
                                    ) : (
                                        <FaEnvelope className="w-6 h-6" />
                                    )}
                                </motion.div>

                                {copiado && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10"
                                    >
                                        ¡Correo copiado!
                                    </motion.span>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent my-12"></div>

                <div className="text-center text-stone-400">
                    <p>© {new Date().getFullYear()} Facundo Zuleta. Todos los derechos reservados.</p>
                    <p className="text-sm mt-2">Desarrollado con React y Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}
