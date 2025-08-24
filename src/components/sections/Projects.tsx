'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showClosedProjectInfo, setShowClosedProjectInfo] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const projects = [
        {
            title: "Modulo de Recaudación",
            description: "Plataforma web para gestión y control de recaudaciones con panel administrativo.",
            technologies: ["React", "JavaScript", "Express", "PostgreSQL"],
            image: "/projects/project2",
            cantidad: 3,
            tipo: "cerrado"
        },

        {
            title: "EduFeedback",
            description: "Aplicación propuesta para Universidad Continental, para recolectar y analizar feedback educativo en tiempo real con añadido de NLP Y LLM.",
            technologies: ["Next.js", "React", "TypeScript", "Mongodb", "Express"],
            link: "https://edufeedback.vercel.app/",
            github: "https://github.com/tuusuario/edufeedback",
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
        },

        {
            title: "Reproductor de musica",
            description: "Sitio web para reproducir música en línea (API de tercero suele fallar)",
            technologies: ["Next,js", "React", "TypeScript"],
            link: "https://v0-music-streaming-app-vert-five.vercel.app/",
            github: "https://github.com/tuusuario/reproductor-musica",
            image: "/projects/project3",
            cantidad: 1,
            tipo: "abierto"
        },

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
        }, 9000); // Cambiar todas las imágenes cada 15 segundos

        return () => clearInterval(intervalo);
    }, []);


    return (
        <section id='projects' className="relative justify-center items-center flex flex-col gap-10 md:py-20 py-10">
            <span className="bounce flicker lg:absolute flex text-[5rem] text-gray-200 opacity-15 select-none pointer-events-none left-0 top-50" style={{ fontFamily: "'Robinson Outline', sans-serif" }}>
                PROJECTS
            </span>
            {projects.map((project, num) => (
                <div key={num} className="shadow-md w-[85%] sm:w-[70%] h-70 sm:h-110 bg-[#49454533] rounded-[8px] flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                                        <div className="absolute inset-0 pointer-events-none z-20">
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-black/70 p-3 rounded-full">
                                                    <svg className="w-6 h-6 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                                                    </svg>
                                                </div>
                                                <span className="absolute bottom-4 text-white text-sm bg-black/70 px-3 py-1 rounded-full pointer-events-none">
                                                    Click para ampliar
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-between px-5 pointer-events-none z-30">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevImage(num);
                                    }}
                                    className="bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors size-10 pointer-events-auto"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextImage(num);
                                    }}
                                    className="bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors size-10 pointer-events-auto"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between items-center sm:w-[45%]">
                        <div>
                            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                            <p className="text-gray-300 mb-4 hidden sm:block">{project.description}</p>
                            <div className="flex-wrap gap-2 mb-4 hidden sm:flex">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-[#ffffff11] px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {project.tipo === 'abierto' ? (
                                <>
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                                        >
                                            Link
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="bg-[#ffffff11] px-4 py-2 rounded-md hover:bg-[#ffffff22] transition-colors"
                                        >
                                            GitHub
                                        </Link>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        setShowClosedProjectInfo(true);
                                        setSelectedProject(project);
                                    }}
                                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                >
                                    Proyecto Privado
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal para ver imagen ampliada */}
            {selectedImage && selectedProject && (
                <div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center gap-8">
                        {/* Botón anterior */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentImageNumber = parseInt(selectedImage.split('-').pop()?.split('.')[0] || '0');
                                if (currentImageNumber === 0) {
                                    setSelectedImage(`${selectedProject.image}-${selectedProject.cantidad - 1}.jpg`);
                                } else {
                                    setSelectedImage(`${selectedProject.image}-${currentImageNumber - 1}.jpg`);
                                }
                            }}
                            className="bg-black/80 hover:bg-black text-white rounded-full transition-colors size-14 flex items-center justify-center pointer-events-auto"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>


                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Imagen ampliada"
                                className="max-w-full max-h-[90vh] object-contain"
                            />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                                className="absolute top-4 right-4 text-white hover:text-gray-300"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>


                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentImageNumber = parseInt(selectedImage.split('-').pop()?.split('.')[0] || '0');
                                if (currentImageNumber === selectedProject.cantidad - 1) {
                                    setSelectedImage(`${selectedProject.image}-0.jpg`);
                                } else {
                                    setSelectedImage(`${selectedProject.image}-${currentImageNumber + 1}.jpg`);
                                }
                            }}
                            className="bg-black/80 hover:bg-black text-white rounded-full transition-colors size-14 flex items-center justify-center pointer-events-auto"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>


                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                            {[...Array(selectedProject.cantidad)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${selectedImage === `${selectedProject.image}-${i}.jpg`
                                            ? 'bg-white'
                                            : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}


            {showClosedProjectInfo && selectedProject && (
                <div className="fixed inset-0 bg-black/65  flex items-center justify-center z-50 p-4"
                    onClick={() => setShowClosedProjectInfo(false)}>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg max-w-md w-full"
                        onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-bold mb-4">Proyecto Privado</h3>
                        <p className="text-gray-300 mb-6">
                            Este proyecto fue desarrollado para uso interno, bajo acuerdo de confidencialidad.
                            Por razones de privacidad y seguridad, el código fuente y demas no están disponibles públicamente.
                        </p>
                        <button
                            onClick={() => setShowClosedProjectInfo(false)}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}