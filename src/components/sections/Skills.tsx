
import Image from "next/image";
export default function Skills() {
    const cartas = [
        {
            "name": "React",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "url": "https://react.dev/",
            "category": "Frontend",
            "description": "Librería para construir interfaces de usuario dinámicas y reactivas.",
            "color": "#61DAFB"
        },
        {
            "name": "Next.js",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            "url": "https://nextjs.org/",
            "category": "Frontend",
            "description": "Framework de React para aplicaciones rápidas, con renderizado del lado del servidor.",
            "color": "#000000"
        },
        {
            "name": "Tailwind CSS",
            "icon": "https://cdn.simpleicons.org/tailwindcss/38B2AC.svg",
            "url": "https://tailwindcss.com/",
            "category": "CSS",
            "description": "Framework de utilidades CSS para diseño rápido y personalizable.",
            "color": "#38B2AC"
        },
        {
            "name": "Node.js",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "url": "https://nodejs.org/",
            "category": "Backend",
            "description": "Entorno de ejecución para JavaScript en el servidor.",
            "color": "#68A063"
        },
        {
            "name": "PostgreSQL",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            "url": "https://www.postgresql.org/",
            "category": "Base de Datos",
            "description": "Sistema de gestión de bases de datos relacional de código abierto.",
            "color": "#336791"
        },
        {
            "name": "SQL Server",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            "url": "https://www.microsoft.com/en-us/sql-server",
            "category": "Base de Datos",
            "description": "Sistema de gestión de bases de datos relacional desarrollado por Microsoft.",
            "color": "#CC2927"
        },
        {
            "name": "MongoDB",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "url": "https://www.mongodb.com/",
            "category": "Base de Datos",
            "description": "Base de datos orientada a documentos, utilizada para aplicaciones modernas y escalables.",
            "color": "#4DB33D"
        },
        {
            "name": "Git",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            "url": "https://git-scm.com/",
            "category": "Control de Versiones",
            "description": "Sistema distribuido para el control de versiones de código.",
            "color": "#F05032"
        },
        // Nuevas tecnologías y ajustes
        {
            "name": "JavaScript",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "url": "https://developer.mozilla.org/es/docs/Web/JavaScript",
            "category": "Lenguaje",
            "description": "Lenguaje de programación usado tanto en frontend como backend y otras aplicaciones.",
            "color": "#F7DF1E"
        },
        {
            "name": "TypeScript",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "url": "https://www.typescriptlang.org/",
            "category": "Lenguaje",
            "description": "Superset de JavaScript que añade tipado estático y mejora la mantenibilidad.",
            "color": "#3178C6"
        },
        {
            "name": "Figma",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            "url": "https://www.figma.com/",
            "category": "Diseño",
            "description": "Herramienta colaborativa para diseño de interfaces y prototipos.",
            "color": "#F24E1E"
        },
        {
            "name": "Vite",
            "icon": "https://vitejs.dev/logo.svg",
            "url": "https://vitejs.dev/",
            "category": "Herramientas",
            "description": "Herramienta moderna para desarrollo frontend con recarga rápida y build optimizado.",
            "color": "#646CFF"
        }
    ];



    return (
        <section id="skills" className="flex flex-col justify-center items-center relative pb-20">

            <span className="lg:absolute text-[6rem] text-gray-200 opacity-7 select-none pointer-events-none left-0 top-30" style={{ fontFamily: "'Robinson Outline', sans-serif" }}>
                SKILLS
            </span>

            <div className="grid  grid-cols-2 lg:grid-cols-4  sm:grid-cols-3 gap-5 w-[85%] sm:w-[70%] items-center z-20">
                {cartas.map((item) => (

                    <div
                        key={item.name}
                        className=" h-56 rounded-lg p-4 shadow-md flex flex-col items-center relative overflow-hidden bg-[#49454533] group "
                    >
                        <Image
                            src={item.icon}
                            height={160}
                            width={160}
                            alt={item.icon}
                            className="absolute bottom-[-10px] right-[-20px]
                                rotate-20
                                transition-all duration-500 ease-out
                                group-hover:rotate-0
                                group-hover:translate-x-2 group-hover:-translate-y-2
                                group-hover:scale-110"
                        />
                        <p className="font-semibold text-[21px] ">{item.name}</p>
                        <p className="border-1 rounded-[9px] p-1 absolute left-5 bottom-5 backdrop-blur-3xl">{item.category}</p>
                    </div>
                ))}
            </div>
        </section >

    )
}
