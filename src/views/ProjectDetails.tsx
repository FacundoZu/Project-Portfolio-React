import { useParams, Link, useNavigate } from "react-router-dom"
import { projects } from "../../data/projects"
import { ArrowLeftIcon, CheckIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTechnology } from "../../data/technologies";


export default function ProjectDetails() {
    const { index } = useParams<{ index: string }>()
    const navigate = useNavigate()

    if (index === undefined) {
        navigate('/')
        return null
    }

    const projectIndex = parseInt(index, 10)
    const project = projects[projectIndex]

    // Define project images - you can customize this based on project
    const projectImages = [
        '/uptask/login.png',
        '/uptask/register.png',
        '/uptask/proyectos.png',
        '/uptask/crearproyecto.png',
        '/uptask/agregarcolaborador.png',
        '/uptask/tabla.png',
        '/uptask/cambiarcontraseña.png',
        '/uptask/confirm.png',
        '/uptask/email.png'
    ]

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        appendDots: (dots: React.ReactNode) => (
            <div className="slick-dots-container">
                <ul style={{ margin: "0", padding: "10px 0" }}>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-2 h-2 mx-1 rounded-full bg-gray-400 hover:bg-blue-500 transition-colors"></div>
        )
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
                    <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
                        <ArrowLeftIcon className="w-5 h-5 mr-1" />
                        Volver al inicio
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-28 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto rounded-xl p-6 border border-stone-700">
            <div className="shadow-xl rounded-lg">
                {/* Image Carousel */}
                <div className="w-full relative group aspect-w-16 aspect-h-9 overflow-hidden">
                    <Slider {...settings}>
                        {projectImages.map((img, idx) => (
                            <div key={idx} className="outline-none">
                                <div className="relative h-80 md:h-96 w-full">
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">{project.title}</h1>

                    <p className="mt-3 text-stone-300 mb-6">{project.description}</p>

                    <div className="mt-6">
                        <h2 className="text-sm font-medium text-stone-400 mb-2">Tecnologías utilizadas</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => {
                                const technology = getTechnology(tech);
                                return (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                    >
                                        {technology?.icon}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-95">
                        <a
                            href={project.github}
                            target="_blank"
                            className="inline-flex justify-center items-center px-6 py-3 border text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                            Ver en GitHub
                        </a>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-medium text-stone-400 mb-3">Características principales</h3>
                        <ul className="space-y-2">
                            {project.functionalities.map((func, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                    <span className="text-stone-400">{func}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-1 text-white" />
                        Volver a proyectos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}