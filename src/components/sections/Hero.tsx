
import Image from "next/image";
export default function Hero() {
    return (
        <section id="hero" className=" pt-15 sm:pt-37 pb-20 relative px-10 sm:px-[0px]">
            <span className="absolute flex text-[6rem] text-gray-200 opacity-7 select-none pointer-events-none left-0 top-30" style={{ fontFamily: "'Robinson Outline', sans-serif" }}>
                ABOUT
            </span>

            <div className="block md:hidden">
                <div className="text-center">
                    <h1 className="pt-4 font-extrabold text-[28px]">
                        GIAN PIERE CONDORI
                    </h1>
                    <h2 className="pb-7 text-[20px] italic">
                        Web & App Developer
                    </h2>
                </div>

                <div className="flex justify-center mb-8">
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
                </div>
                <div className="h-[1px] bg-[#ffffff6e] w-[50%]"></div>
                <p className="leading-relaxed mt-7 mb-3">
                    Egresado de Ingeniería de Sistemas, especializado en programación web y desarrollo de aplicaciones. Cuento con experiencia en gestión de bases de datos y en la creación de soluciones digitales eficientes.
                </p>
                <p className="leading-relaxed mb-7">
                    Me caracterizo por la responsabilidad, el trabajo en equipo y la comunicación efectiva, siempre enfocado en aportar valor en cada proyecto.
                </p>
                <div className="flex justify-end">
                    <div className="h-[1px] w-[50%] bg-[#ffffff6e]"></div>
                </div>
            </div>

            <div className="hidden md:flex justify-center gap-10 items-center">
                <div className="flex flex-col w-180 p-5 relative justify-center">
                    <h1 className="pt-4 font-extrabold text-[30px]">
                        GIAN PIERE CONDORI
                    </h1>
                    <h2 className="pb-7 text-[20px] italic">
                        Web & App Developer
                    </h2>
                    <div className="h-[1px] bg-[#ffffff6e] w-[50%]"></div>
                    <p className="leading-relaxed mt-7 mb-3">
                        Egresado de Ingeniería de Sistemas, especializado en programación web y desarrollo de aplicaciones. Cuento con experiencia en gestión de bases de datos y en la creación de soluciones digitales eficientes.
                    </p>
                    <p className="leading-relaxed mb-7">
                        Me caracterizo por la responsabilidad, el trabajo en equipo y la comunicación efectiva, siempre enfocado en aportar valor en cada proyecto.
                    </p>
                    <div className="flex justify-end">
                        <div className="h-[1px] w-[50%] bg-[#ffffff6e]"></div>
                    </div>
                </div>

                <div>
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
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bottom-20">
                    <div className="flex-col justify-center gap-2 mt-7">
                        <div className="flex justify-center gap-5">
                            <a href="https://www.linkedin.com/in/piere-condori-huarcaya" target="_blank" aria-label="Linkedin" title="Ir a Linkedin de Gian Piere Condori" rel="noopener noreferrer">
                                <svg width="50" height="50">
                                    <use href="/sprite.svg#linkedin-white" />
                                </svg>
                            </a>
                            <a href="https://github.com/UnGianPiere" target="_blank" aria-label="Github" title="Ir a Github de Gian Piere Condori" rel="noopener noreferrer">
                                <svg width="40" height="50">
                                    <use href="/sprite.svg#github" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-3 text-center justify-center flex">
                            <a href="/cv.pdf" download='Mi_CV.pdf' target="_blank">
                                <button
                                    className="bg-[#99959523] p-3 rounded-[7px] w-40 flex  gap-1 justify-center items-center hover:scale-105 ease-in-out transform transition active:scale-95">

                                    <div className="size-[30px]">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill="#ffffff"></path> </g></svg>
                                    </div>
                                    Descargar CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}