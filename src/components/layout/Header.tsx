
export default function Header(){
    return(
        <header className="p-8 shadow-md shadow-[#0e0d0d69] font-bold fixed top-0 w-full z-10 backdrop-blur-[1000px] bg-[#03030327]">
            <nav className="flex flex-row justify-evenly relative z-10">
                <h1>Mi Portafolio</h1>
                <ul className="flex flex-row gap-6">
                    <li><a href="#hero">Sobre mi</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}