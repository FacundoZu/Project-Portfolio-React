import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'about', label: 'Sobre mí' },
        { id: 'portfolio', label: 'Proyectos' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'contact', label: 'Contacto' },
    ];

    return (
        <header
            className="fixed w-full z-50 transition-all px-2 duration-300 top-2"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 bg-bg-100/50 backdrop-blur-sm rounded-2xl">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-linear-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent hover:scale-105 transition-all cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        FZ
                    </Link>

                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`/#${item.id}`}
                                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                            >
                                {item.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-linear-to-r from-primary-100 to-primary-200 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="w-1/2 right-4 absolute px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg-100/50 backdrop-blur-sm rounded-b-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`/#${item.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
