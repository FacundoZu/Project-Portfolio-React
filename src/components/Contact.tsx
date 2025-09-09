import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return ( 
        <div id="contact" className="w-full bg-stone-950 text-white py-8">

            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-8 border border-stone-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Información de Contacto */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                                Información de Contacto
                            </h3>
                            <div className="space-y-4">
                                <a 
                                    href="mailto:facundozuleta70@gmail.com"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                        <FaEnvelope className="text-2xl text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-stone-400">facundozuleta70@gmail.com</p>
                                    </div>
                                </a>

                                <a 
                                    href="https://wa.me/543875123456"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-green-500/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                                        <FaWhatsapp className="text-2xl text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">WhatsApp</p>
                                        <p className="text-sm text-stone-400">+54 387 5192850</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                                Redes Sociales
                            </h3>
                            <div className="space-y-4">
                                <a 
                                    href="https://github.com/FacundoZu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-purple-500/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                                        <FaGithub className="text-2xl text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">GitHub</p>
                                        <p className="text-sm text-stone-400">https://github.com/FacundoZu</p>
                                    </div>
                                </a>

                                <a 
                                    href="https://linkedin.com/in/tu-usuario"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                        <FaLinkedin className="text-2xl text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">LinkedIn</p>
                                        <p className="text-sm text-stone-400">Facundo Zuleta</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Ubicación */}
                    <div className="mt-8 pt-8 border-t border-stone-700">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 mb-4">
                            Ubicación
                        </h3>
                        <p className="text-stone-300">
                            Salta Capital, Argentina
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 