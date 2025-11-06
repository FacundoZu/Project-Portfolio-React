import { motion } from "motion/react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function CetzzLabsExperience() {
    return (
        <div className="text-white py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                <motion.div
                    className="flex flex-col md:flex-row gap-10 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <section className="flex flex-col w-full md:w-2/6 pt-4 items-center">
                        <div className="relative group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.6, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute w-80 h-80 -inset-4 bg-linear-to-b from-labs to-cetzz rounded-xl blur-xl group-hover:blur-2xl group-hover:opacity-100 transition"
                            ></motion.div>

                            <motion.img
                                src="/cetzzlabs.webp"
                                alt="CetzzLabs Logo"
                                className="w-72 h-72 rounded-xl object-cover relative border border-primary-200/20"
                                initial={{ opacity: 0.4, y: 50, rotate: 3 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                whileHover={{ scale: 1.04, rotate: 2 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>
                        <motion.div
                            className="flex gap-4 mt-8"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <a
                                href="https://cetzzlabs.com.ar"
                                target="_blank"
                                className="btn-primary flex items-center gap-2"
                            >
                                Conocer más <FaArrowUpRightFromSquare />
                            </a>
                        </motion.div>
                    </section>

                    <section className="w-full md:w-4/6 space-y-6">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold leading-tight"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            Mi experiencia en{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-100 to-primary-200">
                                Cetzz Labs
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-stone-300 leading-relaxed"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            Desde <strong>agosto de 2025</strong> formo parte de{" "}
                            <span className="text-accent-100 font-medium">CetzzLabs</span>, un estudio freelancer de desarrollo donde
                            construimos <strong>webs profesionales y a medida</strong> para clientes reales.
                            Me enfoqué en el diseño y desarrollo de landing pages modernas con tecnologías como React, Astro, Tailwind y Vercel.
                        </motion.p>

                        <motion.p
                            className="text-lg text-stone-300 leading-relaxed"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            También participé en varios{" "}
                            <strong className="text-accent-100">proyectos full stack internos</strong>
                            {" "}desarrollados con MERN stack.
                        </motion.p>

                        <motion.ul
                            className="space-y-3 text-stone-300 text-base"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            {[
                                "Diseño y desarrollo de landing pages modernas.",
                                "Implementación de formularios, envíos de correo y botones call to action.",
                                "Optimización de rendimiento y SEO.",
                                "Despliegue.",
                                "Integración con APIs.",
                                "Desarrollo full stack (MERN).",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex gap-3 items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <span className="text-accent-100 mt-0.5">•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                    </section>
                </motion.div>

            </div>
        </div>
    )
}
