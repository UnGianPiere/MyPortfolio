'use client';
import { useState } from "react";

export default function Header() {
    const [visible, setVisible] = useState(false);

    const handleNavbar = () => {
        setVisible(!visible);
        console.log("wa");
    };

    return (
        <header>
            {/* Botón hamburguesa móvil */}
            <button
                className="sm:hidden fixed left-5 top-5 w-10 h-10 rounded-full bg-[#f0ecec34] flex items-center justify-center z-50"
                onClick={handleNavbar}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Menú móvil */}
            {visible && (
                <nav className="sm:hidden fixed top-4 left-3 bg-[#00000079] p-4 shadow z-40 backdrop-blur-xl rounded-[9px]">
                    <ul className="flex flex-col gap-6 pt-10">
                        <li>
                            <a href="#hero">Sobre mi</a>
                        </li>
                        <li>
                            <a href="#hero">Experiencia</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            )}

            {/* Header desktop */}
            <div className="hidden sm:block p-8 shadow-md shadow-[#0e0d0d69] font-bold fixed top-0 w-full z-10  bg-[#222222]/90 backdrop-blur-xl">
                <nav className="flex flex-row justify-evenly relative z-10">
                    <h1>
                        <div className="size-7">
                            <img src="/logo-pier.webp" className="scale-170" alt="logo del portafolio de Gian Piere Condori Huarcaya" />
                        </div>
                    </h1>
                    <ul className="flex flex-row gap-6">
                        <li>
                            <a href="#hero">Sobre mi</a>
                        </li>
                        <li>
                            <a href="#experience">Experiencia</a>
                        </li>
                        <li>
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
