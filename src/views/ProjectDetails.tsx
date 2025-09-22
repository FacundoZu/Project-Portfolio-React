import { useParams, Link, useNavigate } from "react-router-dom"
import { projects } from "../../data/projects"
import { ArrowLeftIcon, CheckIcon, CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTechnology } from "../../data/technologies";
import { motion } from "motion/react"

interface CustomArrowProps {
    onClick?: () => void;
}

// Componente para flecha anterior
const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Imagen anterior"
        >
            <ChevronLeftIcon className="w-5 h-5" />
        </button>
    );
};

// Componente para flecha siguiente
const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Siguiente imagen"
        >
            <ChevronRightIcon className="w-5 h-5" />
        </button>
    );
};

export default function ProjectDetails() {
    const { index } = useParams<{ index: string }>()
    const navigate = useNavigate()

    if (index === undefined) {
        navigate('/')
        return null
    }

    const project = projects[parseInt(index)]

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
                    <div className="mb-8 px-6">
                        <Link
                            to="/#portfolio"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group rounded"
                        >
                            <ArrowLeftIcon className="w-5 h-5 mr-2 text-white" />
                            Volver a proyectos
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    // Configuración del carrusel con TypeScript
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="mt-28 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto rounded-xl p-6 border border-stone-700 bg-stone-950">
            <div className="shadow-xl rounded-lg">
                <div className="fixed inset-0 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, -100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        />
                    ))}
                </div>
                {/* Image Carousel */}
                <div className="relative mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
                    <Slider {...settings}>
                        {project.images.map((img, idx) => (

                            <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-gray-800 to-gray-900">
                                <img
                                    src={img}
                                    alt={`${project.title} - ${img}`}
                                    className="w-full h-full object-contain p-4 rounded-lg"
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                        const target = e.currentTarget;
                                        target.src = '/default/placeholder.png';
                                    }}
                                />
                                {/* Overlay con número de imagen */}
                                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {idx + 1} / {project.images.length}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        {project.title}
                    </h1>

                    <p className="mt-3 text-stone-300 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-sm font-medium text-stone-400 mb-3">Tecnologías utilizadas</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string, index: number) => {
                                const technology = getTechnology(tech);
                                return (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 shadow-blue-500/20 shadow-md transition-colors duration-200 cursor-default"
                                    >
                                        {technology?.icon}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center sm:flex-row gap-4">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Ver en GitHub
                        </h1>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                            Frontend
                        </a>
                        {project.githubback && (
                            <a
                                href={project.githubback}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <CodeBracketIcon className="w-5 h-5 mr-2" />
                                Backend
                            </a>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-stone-700">
                        <h3 className="text-sm font-medium text-stone-400 mb-4">Características principales</h3>
                        <ul className="space-y-3">
                            {project.functionalities.map((func: string, index: number) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-stone-300">{func}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-8 px-6">
                    <Link
                        to="/#portfolio"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group rounded"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 text-white" />
                        Volver a proyectos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}