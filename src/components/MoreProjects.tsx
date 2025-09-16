import { FaArrowDown, FaSearchPlus } from "react-icons/fa";
import { moreProjects as moreProjectsData } from "../../data/moreProjets"
import type { MoreProjects } from "../types/index.ts"
import { useState, useRef, useEffect } from "react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ImageModalProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-[85vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors backdrop-blur-sm"
                    aria-label="Cerrar"
                >
                    <XMarkIcon className="w-5 h-5 cursor-pointer" />
                </button>
            </div>
        </div>
    );
}

export default function MoreProjects() {
    const [open, setOpen] = useState(true);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
    const moreProjects: MoreProjects[] = moreProjectsData;
    const projectsRef = useRef<HTMLDivElement>(null);

    const handleOpenImage = (src: string, alt: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImage({ src, alt });
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="w-full bg-gradient-to-b from-stone-950 to-stone-900 py-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Más Proyectos
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                    Descubre otros proyectos con los que he aprendido
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-lg flex items-center gap-2 group cursor-pointer"
                    >
                        {open ? 'Ocultar Proyectos' : 'Ver Más Proyectos'}
                        <FaArrowDown className={`size-5 transition-all duration-300 ${open ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {open && (
                    <div
                        ref={projectsRef}
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        {moreProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-stone-900/80 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-101 transition-all duration-200 border border-stone-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col"
                            >
                                {project.img && (
                                    <div className="relative w-full h-48 overflow-hidden group">
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        <button
                                            onClick={(e) => handleOpenImage(project.img || '', project.name, e)}
                                            className="absolute bottom-2 right-2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 backdrop-blur-sm"
                                            aria-label="Ampliar imagen"
                                        >
                                            <FaSearchPlus className="size-5 transition-all duration-300 group-hover:rotate-360 cursor-pointer" />
                                        </button>
                                    </div>
                                )}
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                        {project.name}
                                    </h3>
                                    <p className="text-stone-300 mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <a
                                        href={project.web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors border border-blue-500/30 hover:border-blue-400/50 cursor-pointer"
                                    >
                                        Ver Proyecto
                                        <FaArrowUpRightFromSquare className="size-5 ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <ImageModal
                    src={selectedImage?.src || ''}
                    alt={selectedImage?.alt || ''}
                    isOpen={!!selectedImage}
                    onClose={handleCloseImage}
                />
            </div>
        </div>
    )
}