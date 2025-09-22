import { FaGithub, FaLinkedin, FaEnvelope, FaMap } from "react-icons/fa";
import { motion } from "motion/react";

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl text-blue-400" />,
            title: "Email",
            subtitle: "facundozuleta70@gmail.com",
            bgFrom: "bg-blue-500/20",
            hoverBg: "group-hover:bg-blue-500/30",
            href: "mailto:facundozuleta70@gmail.com"
        },
        {
            icon: <FaMap className="text-2xl text-blue-400" />,
            title: "Ubicación",
            subtitle: "Salta Capital, Argentina",
            bgFrom: "bg-blue-500/20",
            hoverBg: "group-hover:bg-blue-500/30"
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub className="text-2xl text-purple-400" />,
            title: "GitHub",
            subtitle: "https://github.com/FacundoZu",
            bgFrom: "bg-purple-500/20",
            hoverBg: "group-hover:bg-purple-500/30",
            href: "https://github.com/FacundoZu"
        },
        {
            icon: <FaLinkedin className="text-2xl text-blue-400" />,
            title: "LinkedIn",
            subtitle: "Facundo Zuleta",
            bgFrom: "bg-blue-500/20",
            hoverBg: "group-hover:bg-blue-500/30",
            href: "https://linkedin.com/in/tu-usuario"
        }
    ];

    return (
        <div id="contact" className="w-full bg-gradient-to-b from-stone-900 to-stone-950 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-stone-950/20 backdrop-blur-sm rounded-xl p-8 border border-stone-700 hover:border-blue-500/50 transition-all duration-300"
                >
                    <h3 className="mb-6 text-2xl inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                        Información de Contacto
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Información de Contacto */}
                        <div className="space-y-6">

                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={info.href || "#"}
                                        target={info.href ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        className={`flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-blue-500/10 transition-all duration-300 group`}
                                    >
                                        <div className={`w-12 h-12 rounded-lg ${info.bgFrom} flex items-center justify-center ${info.hoverBg} transition-all duration-300`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium">{info.title}</p>
                                            <p className="text-sm text-stone-400">{info.subtitle}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Redes Sociales */}
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
                                        className="flex items-center gap-3 p-4 rounded-lg bg-stone-800/50 hover:bg-purple-500/10 transition-all duration-300 group"
                                    >
                                        <div className={`w-12 h-12 rounded-lg ${social.bgFrom} flex items-center justify-center ${social.hoverBg} transition-all duration-300`}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium">{social.title}</p>
                                            <p className="text-sm text-stone-400">{social.subtitle}</p>
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
