export default function About() {
    return (
    <div className="w-full bg-stone-900 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Sobre mí
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Conoce mi trayectoria profesional y mi pasión por el desarrollo web
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-8 border border-stone-700 hover:border-blue-500/50 transition-all duration-300">
          <div className="space-y-6">
            <p className="text-lg text-stone-300 leading-relaxed">
              Estoy aquí para ser tu socio en el viaje tecnológico. Si están listos para llevar su proyecto al siguiente nivel o tienen alguna consulta o pregunta sobre este, estoy ansioso por hablar más a fondo.
            </p>
            
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                Educación
              </h3>
              
              <div className="relative">
                {/* Línea vertical de la línea temporal */}
                <div className="absolute left-[0.999999rem] top-[1rem] bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                
                {/* Estudio Universitario */}
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">Estudio Universitario</span>
                      <span className="text-stone-400 text-sm">feb 2021 - presente</span>
                    </div>
                    <p className="text-stone-300">Universidad Nacional de Salta, Salta Capital, Argentina</p>
                    <p className="text-stone-300">Carrera: Tecnicatura Universitaria en Programación</p>
                  </div>
                </div>

                {/* Educación Secundaria */}
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-semibold">Educación Secundaria</span>
                      <span className="text-stone-400 text-sm">feb 2015 - dic 2020</span>
                    </div>
                    <p className="text-stone-300">Colegio secundario N°5087, Cachi Salta, Argentina</p>
                    <p className="text-stone-300">Título de Bachiller en Ciencias Naturales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                Cursos y Certificaciones
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* React y TypeScript */}
                <div className="bg-stone-800/30 rounded-lg p-6 border border-stone-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-semibold text-green-400">React y TypeScript - La Guía Completa</h4>
                    <span className="text-stone-400 text-sm">feb 2025</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-stone-300">Creando +10 Proyectos</p>
                  </div>
                </div>

                {/* Master en React */}
                <div className="bg-stone-800/30 rounded-lg p-6 border border-stone-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-semibold text-green-400">Master en React</h4>
                    <span className="text-stone-400 text-sm">jul 2024</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-stone-300">Aprobado, +5 proyectos.</p>
                    <p className="text-stone-300">Duración: 39 horas.</p>
                  </div>
                </div>

                {/* Curso de introducción al desarrollo web */}
                <div className="bg-stone-800/30 rounded-lg p-6 border border-stone-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-semibold text-green-400">Introducción al desarrollo web</h4>
                    <span className="text-stone-400 text-sm">may 2021</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-stone-300">Res. CS. Nº 309/00 y en la RESCD-EXA Nº 017/16.</p>
                    <p className="text-stone-300">Duración: 50 horas. Aprobado.</p>
                  </div>
                </div>

                {/* Hacking Ético */}
                <div className="bg-stone-800/30 rounded-lg p-6 border border-stone-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-semibold text-green-400">Hacking Ético: Offensive and Defensive Básico</h4>
                    <span className="text-stone-400 text-sm">nov 2024</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-stone-300">Por ExorciceThat Global Cybersecurity</p>
                    <p className="text-stone-300">Duración: 20 horas. Aprobado.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                Desarrollo Profesional
              </h3>
              <p className="text-stone-300">
                Estoy realizando cursos para ampliar mis conocimientos sobre la programación y el desarrollo web, manteniéndome actualizado con las últimas tecnologías y tendencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}