import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-stone-950 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Información Personal */}
                    <div className="space-y-4 text-center">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Facundo Zuleta
                        </h3>
                        <p className="text-stone-400">
                            Desarrollador Web Full Stack apasionado por crear soluciones digitales innovadoras.
                        </p>
                    </div>

                    {/* Enlaces Rápidos */}
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

                    {/* Redes Sociales */}
                    <div className="space-y-4 text-center">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Conectemos
                        </h3>
                        <div className="flex gap-6 justify-center">
                            <a 
                                href="https://github.com/tu-usuario" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-stone-400 hover:text-purple-400 transition-colors"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://linkedin.com/in/tu-usuario" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-stone-400 hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a 
                                href="mailto:facundozuleta70@gmail.com"
                                className="text-stone-400 hover:text-red-400 transition-colors"
                            >
                                <FaEnvelope className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://wa.me/543875123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-400 hover:text-green-400 transition-colors"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent my-12"></div>

                {/* Copyright */}
                <div className="text-center text-stone-400">
                    <p>© {new Date().getFullYear()} Facundo Zuleta. Todos los derechos reservados.</p>
                    <p className="text-sm mt-2">Desarrollado con ❤️ usando React y Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}
