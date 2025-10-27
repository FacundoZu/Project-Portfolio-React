import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiMongodb, SiGit, SiGithub } from "react-icons/si";
import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      colorFrom: "from-blue-400",
      colorTo: "to-blue-500",
      icon: <FaReact className="text-3xl text-blue-400" />,
      skills: [
        { name: "React", description: "Desarrollo de UI", icon: <FaReact className="text-2xl text-blue-400" /> },
        { name: "TypeScript", description: "Tipado estático", icon: <SiTypescript className="text-2xl text-blue-400" /> },
        { name: "JavaScript", description: "Lenguaje base", icon: <SiJavascript className="text-2xl text-blue-400" /> },
        { name: "HTML & CSS", description: "Estructura y estilo", icon: <><SiHtml5 className="text-2xl text-blue-400" /><SiCss3 className="text-2xl text-blue-400" /></> },
      ]
    },
    {
      title: "Backend",
      colorFrom: "from-green-400",
      colorTo: "to-green-500",
      icon: <FaNodeJs className="text-3xl text-green-400" />,
      skills: [
        { name: "NodeJS", description: "Runtime JavaScript", icon: <FaNodeJs className="text-2xl text-green-400" /> },
        { name: "Express", description: "Framework web", icon: <SiExpress className="text-2xl text-green-400" /> },
      ]
    },
    {
      title: "Bases de Datos",
      colorFrom: "from-purple-400",
      colorTo: "to-purple-500",
      icon: <FaDatabase className="text-3xl text-purple-400" />,
      skills: [
        { name: "PostgreSQL", description: "Base relacional", icon: <SiPostgresql className="text-2xl text-purple-400" /> },
        { name: "MongoDB", description: "Base NoSQL", icon: <SiMongodb className="text-2xl text-purple-400" /> },
      ]
    },
    {
      title: "Herramientas",
      colorFrom: "from-red-400",
      colorTo: "to-red-500",
      icon: <FaTools className="text-3xl text-red-400" />,
      skills: [
        { name: "Git & GitHub", description: "Control de versiones", icon: <><SiGit className="text-2xl text-red-400" /><SiGithub className="text-2xl text-red-400" /></> },
        { name: "REST APIs", description: "Comunicación web", icon: <FaTools className="text-2xl text-red-400" /> },
      ]
    }
  ];

  return (
    <div id="skills" className="w-full text-white py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
          Habilidades Técnicas
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-primary-100 to-primary-200 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          Tecnologías y herramientas que utilizo para crear soluciones digitales
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`bg-stone-950/20 backdrop-blur-sm rounded-xl p-6 border border-bg-200/50`}
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-linear-to-r ${category.colorFrom} ${category.colorTo}`}>
                {category.title}
              </h3>
              <div className={`h-px flex-1 bg-linear-to-r ${category.colorFrom}/50 to-transparent`}></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  className="flex items-center gap-3 p-3 rounded-lg cursor-default"
                >
                  {skill.icon}
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-stone-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
