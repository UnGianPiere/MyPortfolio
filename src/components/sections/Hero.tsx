'use client'
import Image from "next/image";
import { motion } from "motion/react"

export default function Hero() {
    return (
        <section id="hero" className="lg:pt-37 sm:pt-20 pb-20 relative px-10 sm:px-[0px]">
            {/* Texto de fondo animado */}
            <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="lg:absolute flex text-[5rem] text-gray-200 select-none pointer-events-none left-0 top-30 justify-center bounce flicker" 
                style={{ fontFamily: "'Robinson Outline', sans-serif" }}
            >
                ABOUT
            </motion.span>

            {/* Versión móvil */}
            <div className="block md:hidden">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="pt-4 font-extrabold text-[28px]">
                        GIAN PIERE CONDORI
                    </h1>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="pb-7 text-[20px] italic"
                    >
                        Web & App Developer
                    </motion.h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                    className="flex justify-center mb-8"
                >
                    <Image
                        src="/foto-portafolio.webp"
                        alt="Foto de perfil"
                        width={200}
                        height={200}
                        className="object-cover rounded-full"
                        style={{
                            maskImage: 'radial-gradient( rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
                            WebkitMaskImage: 'radial-gradient( rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
                        }}
                    />
                </motion.div>

                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-[1px] bg-[#ffffff6e] w-[50%] origin-left"
                />

                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="leading-relaxed mt-7 mb-3"
                >
                    Bachiller de Ingeniería de Sistemas, especializado en programación web y desarrollo de aplicaciones. Cuento con experiencia en gestión de bases de datos y en la creación de soluciones digitales eficientes.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="leading-relaxed mb-7"
                >
                    Me caracterizo por la responsabilidad, el trabajo en equipo y la comunicación efectiva, siempre enfocado en aportar valor en cada proyecto.
                </motion.p>

                <div className="flex justify-end">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="h-[1px] w-[50%] bg-[#ffffff6e] origin-right"
                    />
                </div>
            </div>

            {/* Versión desktop */}
            <div className="hidden md:flex justify-center gap-10 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col w-180 p-5 relative justify-center"
                >
                    <h1 className="pt-4 font-extrabold text-[30px]">
                        GIAN PIERE CONDORI
                    </h1>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="pb-7 text-[20px] italic"
                    >
                        Web & App Developer
                    </motion.h2>

                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-[1px] bg-[#ffffff6e] w-[50%] origin-left"
                    />

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="leading-relaxed mt-7 mb-3"
                    >
                        Bachiller de Ingeniería de Sistemas, especializado en programación web y desarrollo de aplicaciones. Cuento con experiencia en gestión de bases de datos y en la creación de soluciones digitales eficientes.
                    </motion.p>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="leading-relaxed mb-7"
                    >
                        Me caracterizo por la responsabilidad, el trabajo en equipo y la comunicación efectiva, siempre enfocado en aportar valor en cada proyecto.
                    </motion.p>

                    <div className="flex justify-end">
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="h-[1px] w-[50%] bg-[#ffffff6e] origin-right"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        src="/foto-portafolio.webp"
                        alt="Foto de perfil"
                        width={400}
                        height={400}
                        className="object-cover"
                        style={{
                            maskImage: 'radial-gradient( rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
                            WebkitMaskImage: 'radial-gradient( rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
                        }}
                    />
                </motion.div>
            </div>

            {/* Sección de redes sociales y CV */}
            <div className="flex flex-col">
                <div className="bottom-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex-col justify-center gap-2 mt-7"
                    >
                        <div className="flex justify-center gap-5">
                            <motion.a 
                                href="https://www.linkedin.com/in/piere-condori-huarcaya" 
                                target="_blank" 
                                aria-label="Linkedin" 
                                title="Ir a Linkedin de Gian Piere Condori" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.25, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="transition"
                            >
                                <svg width="50" height="50">
                                    <use href="/sprite.svg#linkedin-white" />
                                </svg>
                            </motion.a>

                            <motion.a 
                                href="https://github.com/UnGianPiere" 
                                target="_blank" 
                                aria-label="Github" 
                                title="Ir a Github de Gian Piere Condori" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.25, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="transition"
                            >
                                <svg width="40" height="50">
                                    <use href="/sprite.svg#github" />
                                </svg>
                            </motion.a>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            className="mt-3 text-center justify-center flex"
                        >
                            <a href="/cv.pdf" download='Mi_CV.pdf' target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    className="cursor-pointer bg-[#99959523] p-3 rounded-[7px] w-40 flex gap-1 justify-center items-center"
                                >
                                    <motion.div 
                                        className="size-[30px]"
                                        whileHover={{ y: 2 }}
                                        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#ffffff"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill="#ffffff"></path>
                                            </g>
                                        </svg>
                                    </motion.div>
                                    Descargar CV
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}