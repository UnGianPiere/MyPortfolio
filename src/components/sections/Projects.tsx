'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Projects() {

    const projects = [
        {
            title: "EduFeedback",
            description: "Aplicación para recolectar y analizar feedback educativo en tiempo real.",
            technologies: ["next", "react", "typescript", "mongodb", "vite"],
            link: "https://edufeedback.vercel.app/",
            github: "https://github.com/tuusuario/edufeedback",
            image: "/projects/project1",
            cantidad: 2
        },

        {
            title: "Sistema de Recaudaciones",
            description: "Plataforma web para gestión y control de recaudaciones con panel administrativo.",
            technologies: ["next", "react", "tailwind", "node", "postgresql"],
            link: "https://sistema-recaudaciones.vercel.app/",
            github: "https://github.com/tuusuario/sistema-recaudaciones",
            image: "/projects/project2",
            cantidad: 3
        },

        {
            title: "Reproductor de musica",
            description: "Sitio web para reproducir música en línea.",
            technologies: ["react", "tailwind", "vite"],
            link: "https://v0-music-streaming-app-vert-five.vercel.app/",
            github: "https://github.com/tuusuario/reproductor-musica",
            image: "/projects/project3",
            cantidad: 1
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
        }, 9000); // Cambiar todas las imágenes cada 15 segundos

        return () => clearInterval(intervalo);
    }, []);


    return (
        <section id='projects' className="relative justify-center items-center flex flex-col gap-4 py-20 ">

            {projects.map((project, num) => (
                <div key={num} className="w-[85%] sm:w-[70%] h-70 sm:h-110 bg-[#5353531c] rounded-[8px] flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative sm:w-[55%] overflow-hidden">
                        <div 
                            className="w-full h-full transform transition-transform duration-700 ease-in-out"
                            style={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                transform: `translateX(${index[num] * 100}%)`
                            }}
                        >
                            {[...Array(project.cantidad)].map((_, i) => (
                                <img 
                                    key={i}
                                    src={`${project.image}-${i}.jpg`}
                                    alt={`${project.title} ${i + 1}`}
                                    className="w-full h-full object-cover flex-shrink-0"
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            <button 
                                onClick={() => handlePrevImage(num)}
                                className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition-colors"
                            >
                                ←
                            </button>
                            <button 
                                onClick={() => handleNextImage(num)}
                                className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition-colors"
                            >
                                →
                            </button>
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
                            <Link 
                                href={project.link} 
                                target="_blank"
                                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                            >
                                Ver Demo
                            </Link>
                            <Link 
                                href={project.github} 
                                target="_blank"
                                className="bg-[#ffffff11] px-4 py-2 rounded-md hover:bg-[#ffffff22] transition-colors"
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            )
            )}

            <span className="absolute flex text-[6rem] text-gray-200 opacity-7 select-none pointer-events-none left-0 top-50" style={{ fontFamily: "'Robinson Outline', sans-serif" }}>
                PROJECTS
            </span>
        </section>
    )
}