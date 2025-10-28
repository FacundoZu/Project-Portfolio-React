import { FaGithub, FaLinkedin, FaEnvelope, FaMap } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
    const [copiado, setCopiado] = useState(false);
    const email = "facundozuleta70@gmail.com";

    const handleCopyClick = () => {
        if (copiado) return;
        navigator.clipboard.writeText(email);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    const socialLinks = [
        {
            icon: <FaGithub className="text-2xl text-primary-100" />,
            title: "GitHub",
            subtitle: "https://github.com/FacundoZu",
            bgFrom: "bg-primary-100/20",
            hoverBg: "group-hover:bg-primary-100/30",
            href: "https://github.com/FacundoZu"
        },
        {
            icon: <FaLinkedin className="text-2xl text-primary-100" />,
            title: "LinkedIn",
            subtitle: "Facundo Zuleta",
            bgFrom: "bg-primary-100/20",
            hoverBg: "group-hover:bg-primary-100/30",
            href: "https://linkedin.com/in/tu-usuario"
        }
    ];

    return (
        <div id="contact" className="w-full text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl p-8 border border-bg-200/50"
                >
                    <h3 className="mb-6 text-2xl inline-block font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500">
                        Información de Contacto
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">

                        <div>
                            <div className="space-y-4">
                                <motion.a
                                    onClick={handleCopyClick}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-bg-100 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-100/20 flex items-center justify-center group-hover:bg-primary-100/30 transition-all duration-300">
                                        <FaEnvelope className="text-2xl text-primary-100" />
                                    </div>
                                    <div>
                                        <p className="text-sm">Email</p>
                                        <p className="font-medium text-accent-200/90">facundozuleta70@gmail.com</p>
                                    </div>
                                    <AnimatePresence>
                                        {copiado && (
                                            <motion.span
                                                key="copy-feedback"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                                                className="absolute left-4/12 bg-neutral-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10"
                                            >
                                                ¡Correo copiado!
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.a>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-bg-100 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-100/20 flex items-center justify-center group-hover:bg-primary-100/30 transition-all duration-300">
                                        <FaMap className="text-2xl text-primary-100" />
                                    </div>
                                    <div>
                                        <p className="text-sm ">Ubicación</p>
                                        <p className="font-medium text-accent-200/90">Salta Capital, Argentina</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-y-6 mt-14 md:mt-0">
                            <div className="space-y-4">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        className="flex items-center gap-3 p-4 rounded-lg bg-bg-100 group"
                                    >
                                        <div className={`w-12 h-12 rounded-lg bg-primary-100/20 flex items-center justify-center group-hover:bg-primary-100/30 transition-all duration-300`}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm">{social.title}</p>
                                            <p className="font-medium text-accent-200/90">{social.subtitle}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
