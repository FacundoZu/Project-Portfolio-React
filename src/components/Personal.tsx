export default function Personal() {
    return (
        <div className="bg-gradient-to-b from-stone-850 to-stone0 text-white py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <section className='w-full md:w-2/6'>
                        <div className="relative group">
                            <div className="absolute -inset-3.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <img 
                                src="../perfil_default.jpg" 
                                className="w-80 h-80 rounded-lg object-cover relative transform transition duration-300 hover:scale-105" 
                                alt="Foto de perfil"
                            />
                        </div>
                        <div className='flex flex-col mt-6 gap-3 text-center'>
                            <a 
                                href="mailto:facundozuleta70@gmail.com" 
                                className="text-lg font-medium text-stone-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                facundozuleta70@gmail.com
                            </a>
                            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Disponible para trabajar
                            </p>
                        </div>
                    </section>

                    <section className="w-full md:w-4/6 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            ¡Hola! Soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Facundo Zuleta</span>, un <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Desarrollador Web Full Stack</span> de Salta, Argentina.
                        </h2>
                        <p className="text-xl text-stone-300 leading-relaxed">
                            ¡Explora mi portafolio para descubrir proyectos únicos y conocer más sobre mi!
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a 
                                href="#portfolio" 
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                            >
                                Ver Proyectos
                            </a>
                            <a 
                                href="#contact" 
                                className="px-6 py-3 border border-stone-600 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                            >
                                Contactar
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
