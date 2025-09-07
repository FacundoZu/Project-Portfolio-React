import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiMongodb, SiGit, SiGithub } from "react-icons/si";

export default function Skils() {
    return (
        <div id="skills" className="w-full bg-stone-900 text-white py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Habilidades Técnicas
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                    Tecnologías y herramientas que utilizo para crear soluciones digitales
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frontend */}
                    <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-6  transition-all duration-300 border border-stone-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <FaReact className="text-3xl text-blue-400" />
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                                Frontend
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300">
                                <FaReact className="text-2xl text-blue-400" />
                                <div>
                                    <p className="font-medium">React</p>
                                    <p className="text-sm text-stone-400">Desarrollo de UI</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300">
                                <SiTypescript className="text-2xl text-blue-400" />
                                <div>
                                    <p className="font-medium">TypeScript</p>
                                    <p className="text-sm text-stone-400">Tipado estático</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300">
                                <SiJavascript className="text-2xl text-blue-400" />
                                <div>
                                    <p className="font-medium">JavaScript</p>
                                    <p className="text-sm text-stone-400">Lenguaje base</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300">
                                <div className="flex gap-1">
                                    <SiHtml5 className="text-2xl text-blue-400" />
                                    <SiCss3 className="text-2xl text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium">HTML & CSS</p>
                                    <p className="text-sm text-stone-400">Estructura y estilo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-6  transition-all duration-300 border border-stone-700 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <FaNodeJs className="text-3xl text-green-400" />
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                                Backend
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-green-500/10 transition-all duration-300">
                                <FaNodeJs className="text-2xl text-green-400" />
                                <div>
                                    <p className="font-medium">NodeJS</p>
                                    <p className="text-sm text-stone-400">Runtime JavaScript</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-green-500/10 transition-all duration-300">
                                <SiExpress className="text-2xl text-green-400" />
                                <div>
                                    <p className="font-medium">Express</p>
                                    <p className="text-sm text-stone-400">Framework web</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bases de Datos */}
                    <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-6  transition-all duration-300 border border-stone-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <FaDatabase className="text-3xl text-purple-400" />
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                                Bases de Datos
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-purple-500/10 transition-all duration-300">
                                <SiPostgresql className="text-2xl text-purple-400" />
                                <div>
                                    <p className="font-medium">PostgreSQL</p>
                                    <p className="text-sm text-stone-400">Base relacional</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-purple-500/10 transition-all duration-300">
                                <SiMongodb className="text-2xl text-purple-400" />
                                <div>
                                    <p className="font-medium">MongoDB</p>
                                    <p className="text-sm text-stone-400">Base NoSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Herramientas */}
                    <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-6  transition-all duration-300 border border-stone-700 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <FaTools className="text-3xl text-red-400" />
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500">
                                Herramientas
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-red-500/10 transition-all duration-300">
                                <div className="flex gap-1">
                                    <SiGit className="text-2xl text-red-400" />
                                    <SiGithub className="text-2xl text-red-400" />
                                </div>
                                <div>
                                    <p className="font-medium">Git & GitHub</p>
                                    <p className="text-sm text-stone-400">Control de versiones</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-800/50 hover:bg-red-500/10 transition-all duration-300">
                                <FaTools className="text-2xl text-red-400" />
                                <div>
                                    <p className="font-medium">REST APIs</p>
                                    <p className="text-sm text-stone-400">Comunicación web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
