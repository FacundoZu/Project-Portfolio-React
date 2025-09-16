import { useParams, Link, useNavigate } from "react-router-dom"
import { projects } from "../../data/projects"
import { ArrowLeftIcon, CheckIcon, CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTechnology } from "../../data/technologies";

// Interfaces para TypeScript
interface ProjectImage {
    src: string;
    alt: string;
}

interface CustomArrowProps {
    onClick?: () => void;
}

// Función para obtener las imágenes específicas de cada proyecto
const getProjectImages = (projectTitle: string): ProjectImage[] => {
    const imageMap: Record<string, ProjectImage[]> = {
        'UpTask': [
            { src: '/uptask/login.png', alt: 'Pantalla de login' },
            { src: '/uptask/register.png', alt: 'Pantalla de registro' },
            { src: '/uptask/proyectos.png', alt: 'Lista de proyectos' },
            { src: '/uptask/crearproyecto.png', alt: 'Crear proyecto' },
            { src: '/uptask/agregarcolaborador.png', alt: 'Agregar colaborador' },
            { src: '/uptask/tabla.png', alt: 'Tabla de tareas' },
            { src: '/uptask/cambiarcontraseña.png', alt: 'Cambiar contraseña' },
            { src: '/uptask/confirm.png', alt: 'Confirmación' },
            { src: '/uptask/email.png', alt: 'Email verification' }
        ],
        'E-commerce': [
            { src: '/ecommerce/home.png', alt: 'Página principal' },
            { src: '/ecommerce/products.png', alt: 'Catálogo de productos' },
            { src: '/ecommerce/cart.png', alt: 'Carrito de compras' },
            { src: '/ecommerce/checkout.png', alt: 'Proceso de pago' }
        ],
        'Blog Personal': [
            { src: '/blog/home.png', alt: 'Página principal del blog' },
            { src: '/blog/post.png', alt: 'Vista de post' },
            { src: '/blog/admin.png', alt: 'Panel de administración' }
        ],
        // Agrega más proyectos aquí según tus necesidades
        'default': [
            { src: '/default/project1.png', alt: 'Vista del proyecto' },
            { src: '/default/project2.png', alt: 'Funcionalidades del proyecto' }
        ]
    };

    return imageMap[projectTitle] || imageMap['default'];
};

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

    const projectIndex = parseInt(index, 10)
    const project = projects[projectIndex]

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

    // Obtener imágenes dinámicamente según el proyecto
    const projectImages = getProjectImages(project.title);

    // Configuración del carrusel con TypeScript
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        fade: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        arrows: true,
        dotsClass: 'slick-dots !flex !justify-center !items-center !gap-2 !static !p-0 !m-0 !list-none',
        appendDots: (dots: React.ReactNode) => (
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <ul className="flex space-x-2 list-none p-0 m-0">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <button 
                className="w-3 h-3 rounded-full bg-gray-500/50 hover:bg-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 border-0 cursor-pointer"
                aria-label={`Ir a la imagen ${i + 1}`}
                style={{ fontSize: 0, lineHeight: 0, display: 'block', padding: 0 }}
            />
        ),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="mt-28 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto rounded-xl p-6 border border-stone-700">
            <div className="shadow-xl rounded-lg">
                {/* Image Carousel */}
                <div className="relative mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
                    <style>{`
                        .slick-dots li.slick-active button {
                            background-color: rgb(96 165 250) !important;
                            transform: scale(1.2) !important;
                            box-shadow: 0 0 10px rgba(96, 165, 250, 0.5) !important;
                        }
                        .slick-dots li button:hover {
                            background-color: rgb(96 165 250) !important;
                            transform: scale(1.1) !important;
                        }
                        .slick-slide {
                            transition: all 0.3s ease !important;
                        }
                        .slick-slide img {
                            transition: transform 0.3s ease !important;
                        }
                        .slick-slide:hover img {
                            transform: scale(1.02) !important;
                        }
                    `}</style>
                    <Slider {...settings}>
                        {projectImages.map((img, idx) => (
                            <div key={idx} className="outline-none">
                                <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-gray-800 to-gray-900">
                                    <img
                                        src={img.src}
                                        alt={`${project.title} - ${img.alt}`}
                                        className="w-full h-full object-contain p-4 rounded-lg"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                            const target = e.currentTarget;
                                            target.src = '/default/placeholder.png';
                                        }}
                                    />
                                    {/* Overlay con número de imagen */}
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {idx + 1} / {projectImages.length}
                                    </div>
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
                                        className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-200"
                                    >
                                        {technology?.icon}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                            Ver en GitHub
                        </a>
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
                        to="/"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
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