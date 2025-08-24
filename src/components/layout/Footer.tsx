
export default function Footer() {
    return (
        <footer className="mt-20 py-8 px-4 border-t border-gray-700 bg-[#1a1a1a] w-full">
            {/* Mobile Footer Navigation */}
            <div className="md:hidden mb-8">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://www.linkedin.com/in/piere-condori-huarcaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#linkedin-white" />
                        </svg>
                    </a>
                    <a href="https://github.com/UnGianPiere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#github" />
                        </svg>
                    </a>
                    <a href="https://wa.me/+51912390600"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>
                </div>
                <a href="/cv.pdf"
                    download="Mi_CV.pdf"
                    className="block w-full max-w-xs mx-auto py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white text-center rounded-lg transition-colors">
                    Descargar CV
                </a>
            </div>

            {/* Desktop Footer Content */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4 relative">
                            <span className="relative z-10">Sobre mí</span>
                        
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Egresado de Ingeniería de Sistemas, especializado en desarrollo web y aplicaciones.
                        </p>
                        <div className="hidden md:flex space-x-4 mt-4">
                            <a href="https://www.linkedin.com/in/piere-condori-huarcaya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                                <svg width="20" height="20">
                                    <use href="/sprite.svg#linkedin-white" />
                                </svg>
                            </a>
                            <a href="https://github.com/UnGianPiere"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                                <svg width="20" height="20">
                                    <use href="/sprite.svg#github" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4 relative">
                            <span className="relative z-10">Tecnologías</span>
                            
                        </h3>
                        <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                            <a href="#skills" className="hover:text-white transition-colors">Frontend</a>
                            <a href="#skills" className="hover:text-white transition-colors">Backend</a>
                            <a href="#skills" className="hover:text-white transition-colors">Bases de datos</a>
                            <a href="#skills" className="hover:text-white transition-colors">Herramientas</a>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4 relative">
                            <span className="relative z-10">Proyectos</span>
                            
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#projects" className="hover:text-white transition-colors flex items-center space-x-2">
                                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                    <span>EduFeedback</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-white transition-colors flex items-center space-x-2">
                                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                    <span>Sistema de Recaudaciones</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-white transition-colors flex items-center space-x-2">
                                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                    <span>Reproductor de música</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4 relative">
                            <span className="relative z-10">Contacto</span>
                            
                        </h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <a href="mailto:geanpierehuarcaya@gmail.com"
                                className="block hover:text-white transition-colors">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span>geanpierehuarcaya@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://wa.me/+51912390600"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:block hover:text-white transition-colors">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </div>
                            </a>
                            <a href="/cv.pdf"
                                download="Mi_CV.pdf"
                                className="hidden md:block hover:text-white transition-colors">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                    </svg>
                                    <span>Descargar CV</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Gian Piere Condori
                </p>
            </div>
        </footer>
    );
}
