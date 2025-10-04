"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Desarrollador Full-Stack Freelance",
            company: "Tracto Leo Import S.A.C.",
            date: "Ago 2025 – Oct 2025",
            achievements: [
                "Desarrollo de módulos de ventas e inventario en ERP (Laravel, MySQL).",
                "Optimización del flujo de ventas-inventario en tiempo real.",
                "Reducción de errores en el manejo de stock mediante validaciones automáticas."
            ]
        },
        {
            role: "Desarrollador Full-Stack Freelance",
            company: "Dirección Regional de Archivo Junín",
            date: "May 2025 – Jul 2025",
            achievements: [
                "Implementación de sistema de gestión de recaudación y caja institucional (React, Node.js, PostgreSQL).",
                "Automatización de reportes financieros y conciliación de pagos.",
                "Mejora de la trazabilidad de ingresos institucionales."
            ]
        },
        {
            role: "Practicante de Desarrollo Web",
            company: "Programa Miconsultor – Mibanco & Universidad Continental",
            date: "Jun 2024 – Ago 2024",
            achievements: [
                "Desarrollo de sitio web corporativo para MYPE de confecciones.",
                "Implementación en WordPress con optimización SEO.",
                "Capacitación a usuarios finales en gestión de contenidos."
            ]
        }
    ];

    return (
        <section
            id="experience"
            className="flex flex-col justify-center items-center relative pb-20 pt-10 w-[90%] sm:w-[70%] mx-auto"
        >
            {/* Texto de fondo centrado */}
            <span
                className="absolute text-[4rem] sm:text-[5rem] text-gray-200 opacity-15 select-none pointer-events-none top-5 text-center w-full flicker bounce"
                style={{ fontFamily: "'Robinson Outline', sans-serif" }}
            >
                EXPERIENCE
            </span>

            {/* Timeline centrado */}
            <div className="flex flex-col border-l-2 border-gray-700 pl-8 space-y-12 mt-24 w-full">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Punto en timeline */}
                        <div className="absolute -left-[21px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-2 border-gray-900 shadow-md"></div>

                        {/* Info */}
                        <p className="text-sm text-gray-400 px-2">{exp.date}</p>
                        <h3 className="text-lg font-bold text-gray-100 px-2">{exp.role}</h3>
                        <p className="text-md font-semibold text-gray-300 mb-2 px-2">{exp.company}</p>

                        <ul className="list-disc ml-5 space-y-1">
                            {exp.achievements.map((item, i) => (
                                <li key={i} className="text-sm text-gray-400 leading-relaxed">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
