import { Link } from "react-router";

export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-stone-950 text-white sticky top-0 z-50 flex opacity-90">
            <div className='flex justify-between items-center w-full max-w-7xl mx-auto p-4 h-16'>
                <Link to='/' className="font-extrabold text-2xl">FZ</Link>
                <nav className="flex gap-5 items-center p-4">
                    <button 
                        onClick={() => scrollToSection('about')}
                        className="border-b border-transparent hover:border-b-white transition-colors"
                    >
                        Sobre mí
                    </button>
                    <button 
                        onClick={() => scrollToSection('skills')}
                        className="border-b border-transparent hover:border-b-white transition-colors"
                    >
                        Habilidades
                    </button>
                    <button 
                        onClick={() => scrollToSection('projects')}
                        className="border-b border-transparent hover:border-b-white transition-colors"
                    >
                        Proyectos
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="border-b border-transparent hover:border-b-white transition-colors"
                    >
                        Contacto
                    </button>
                </nav>
            </div>
        </header>
    )
}
