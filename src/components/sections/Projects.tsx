'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showClosedProjectInfo, setShowClosedProjectInfo] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const projects = [
        {
            title: "Landing Page Clínica",
            description: "Landing page para Clínica Vital (clínica ficticia, proyecto personal en desarrollo). Diseño moderno y responsive.",
            technologies: ["Next,js", "React", "TypeScript"],
            link: "https://clinica-vital.vercel.app/",
            image: "/projects/project6",
            cantidad: 2,
            tipo: "abierto",
            github: "https://github.com/UnGianPiere/landing-clinica-vital.git",
        },
        {
            title: "Módulo de Ventas e Inventario",
            description: "Desarrollo enfocado en los módulos de ventas e inventario dentro del ERP de Tracto Leo Import S.A.C. Estos apartados se orientaron a registrar operaciones comerciales, controlar existencias en tiempo real y generar reportes de movimientos, logrando una reducción de errores en el manejo de stock y una optimización en la trazabilidad de productos.",
            technologies: ["Laravel", "PHP", "MySQL"],
            image: "/projects/project5",
            cantidad: 4,
            tipo: "cerrado"
        },
        {
            title: "Modulo de Recaudación",
            description: "Sistema desarrollado para la Dirección Regional de Archivo Junín, destinado a gestionar la caja y recaudación institucional. Permite automatizar el registro de ingresos, la emisión de comprobantes y la generación de reportes diarios y mensuales, facilitando la consolidación y control eficiente de los recursos financieros de la institución.",
            technologies: ["React", "JavaScript", "Express", "PostgreSQL"],
            image: "/projects/project2",
            cantidad: 3,
            tipo: "cerrado"
        },
        {
            title: "EduFeedback",
            description: "Aplicación propuesta para Universidad Continental, para recolectar y analizar feedback educativo en tiempo real con añadido de NLP Y LLM.",
            technologies: ["React", "TypeScript", "Mongodb", "Express","Python"],
            link: "https://edufeedback.vercel.app/",
            github: "https://github.com/UnGianPiere/EDUFEEDBACK.git",
            image: "/projects/project1",
            cantidad: 2,
            tipo: "abierto"
        },
        {
            title: "Gestor de Proyectos",
            description: "Proyecto Universitario de un aplicativo que permite gestionar proyectos, con metologia SCRUM",
            technologies: ["React", "MongoDB", "Express", "Node"],
            link: "https://proyectos-proyectos-pc.vercel.app/dashboard",
            github: "https://github.com/UnGianPiere/proyectos.git",
            image: "/projects/project4",
            cantidad: 4,
            tipo: "abierto"
        }
    ];

    const [index, setIndex] = useState(
        () => new Array(projects.length).fill(0)
    )

    const handleNextImage = (num: number) => {
        if (projects[num].cantidad - 1 > index[num]) {
            const newIndex = [...index];
            newIndex[num] = index[num] + 1;
            setIndex(newIndex);
        } else {
            const newIndex = [...index];
            newIndex[num] = 0;
            setIndex(newIndex);
        }
    }

    const handlePrevImage = (num: number) => {
        if (index[num] === 0) {
            const newIndex = [...index];
            newIndex[num] = projects[num].cantidad - 1;
            setIndex(newIndex);
        } else {
            const newIndex = [...index];
            newIndex[num] = index[num] - 1;
            setIndex(newIndex);
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex(prevIndex => {
                const newIndex = [...prevIndex];
                projects.forEach((project, num) => {
                    if (newIndex[num] === 0) {
                        newIndex[num] = projects[num].cantidad - 1;
                    } else {
                        newIndex[num] = newIndex[num] - 1;
                    }
                });
                return newIndex;
            });
        }, 9000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section id='projects' className="relative justify-center items-center flex flex-col gap-10 md:py-20 py-10">
            {/* Texto de fondo */}
            <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.15, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="bounce flicker lg:absolute flex text-[5rem] text-gray-200 select-none pointer-events-none left-0 top-50" 
                style={{ fontFamily: "'Robinson Outline', sans-serif" }}
            >
                PROJECTS
            </motion.span>

            {/* Cards de proyectos */}
            {projects.map((project, num) => (
                <motion.div 
                    key={num}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: num * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="shadow-md w-[85%] sm:w-[70%] h-70 sm:h-110 bg-[#49454533] rounded-[8px] flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    {/* Carrusel de imágenes */}
                    <div className="relative sm:w-[55%] overflow-hidden">
                        <div className="w-full h-full">
                            <div
                                className="w-full h-full transform transition-transform duration-700 ease-in-out"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    transform: `translateX(${index[num] * 100}%)`
                                }}
                            >
                                {[...Array(project.cantidad)].map((_, i) => (
                                    <div key={i} className="relative w-full h-full flex-shrink-0 group cursor-pointer"
                                        onClick={() => {
                                            setSelectedImage(`${project.image}-${i}.jpg`);
                                            setSelectedProject(project);
                                        }}>
                                        <img
                                            src={`${project.image}-${i}.jpg`}
                                            alt={`${project.title} ${i + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Overlay hover */}
                                        <div className="absolute inset-0 pointer-events-none z-20">
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <motion.div 
                                                    initial={{ scale: 0.8 }}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="bg-black/70 p-3 rounded-full"
                                                >
                                                    <svg className="w-6 h-6 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                                                    </svg>
                                                </motion.div>
                                                <span className="absolute bottom-4 text-white text-sm bg-black/70 px-3 py-1 rounded-full pointer-events-none">
                                                    Click para ampliar
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Botones de navegación */}
                            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-between px-5 pointer-events-none z-30">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevImage(num);
                                    }}
                                    className="cursor-pointer bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors size-10 pointer-events-auto"
                                >
                                    ←
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextImage(num);
                                    }}
                                    className="cursor-pointer bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors size-10 pointer-events-auto"
                                >
                                    →
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Info del proyecto */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 flex flex-col justify-between items-center sm:w-[45%]"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                            <p className="text-gray-300 mb-4 hidden sm:block">{project.description}</p>
                            <div className="flex-wrap gap-2 mb-4 hidden sm:flex">
                                {project.technologies.map((tech, index) => (
                                    <motion.span 
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.05) }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                        className="bg-[#ffffff11] px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4"
                        >
                            {project.tipo === 'abierto' ? (
                                <>
                                    {project.link && (
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex justify-center items-center gap-1 text-sm"
                                            >
                                                Visitar
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </Link>
                                        </motion.div>
                                    )}
                                    {project.github && (
                                        
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="bg-[#ffffff11] px-4 py-2 rounded-md hover:bg-[#ffffff22] transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                    )}
                                </>
                            ) : (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setShowClosedProjectInfo(true);
                                        setSelectedProject(project);
                                    }}
                                    className="cursor-pointer bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                >
                                    Proyecto Privado
                                </motion.button>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}

            {/* Modal para ver imagen ampliada */}
            <AnimatePresence>
                {selectedImage && selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/65 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center gap-8">
                            {/* Botón anterior */}
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentImageNumber = parseInt(selectedImage.split('-').pop()?.split('.')[0] || '0');
                                    if (currentImageNumber === 0) {
                                        setSelectedImage(`${selectedProject.image}-${selectedProject.cantidad - 1}.jpg`);
                                    } else {
                                        setSelectedImage(`${selectedProject.image}-${currentImageNumber - 1}.jpg`);
                                    }
                                }}
                                className="cursor-pointer bg-black/80 hover:bg-black text-white rounded-full transition-colors size-14 flex items-center justify-center pointer-events-auto"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            {/* Imagen principal */}
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <img
                                    src={selectedImage}
                                    alt="Imagen ampliada"
                                    className="max-w-full max-h-[90vh] object-contain"
                                />

                                {/* Botón cerrar */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(null);
                                    }}
                                    className="cursor-pointer absolute top-4 right-4 text-white hover:text-gray-300"
                                >
                                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </motion.div>

                            {/* Botón siguiente */}
                            <motion.button
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentImageNumber = parseInt(selectedImage.split('-').pop()?.split('.')[0] || '0');
                                    if (currentImageNumber === selectedProject.cantidad - 1) {
                                        setSelectedImage(`${selectedProject.image}-0.jpg`);
                                    } else {
                                        setSelectedImage(`${selectedProject.image}-${currentImageNumber + 1}.jpg`);
                                    }
                                }}
                                className="cursor-pointer bg-black/80 hover:bg-black text-white rounded-full transition-colors size-14 flex items-center justify-center pointer-events-auto"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>

                            {/* Indicadores de imagen */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none"
                            >
                                {[...Array(selectedProject.cantidad)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0.8 }}
                                        animate={{ 
                                            scale: selectedImage === `${selectedProject.image}-${i}.jpg` ? 1.2 : 1 
                                        }}
                                        className={`w-2 h-2 rounded-full ${selectedImage === `${selectedProject.image}-${i}.jpg`
                                            ? 'bg-white'
                                            : 'bg-white/30'
                                        }`}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal proyecto privado */}
            <AnimatePresence>
                {showClosedProjectInfo && selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/65 flex items-center justify-center z-50 p-4"
                        onClick={() => setShowClosedProjectInfo(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="bg-[#2a2a2a] p-6 rounded-lg max-w-md w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-bold mb-4">Proyecto Privado</h3>
                            <p className="text-gray-300 mb-6">
                                Este proyecto fue desarrollado para uso interno, bajo acuerdo de confidencialidad.
                                Por razones de privacidad y seguridad, el código fuente y demas no están disponibles públicamente.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowClosedProjectInfo(false)}
                                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                            >
                                Entendido
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}