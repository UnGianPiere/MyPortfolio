"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [showToast, setShowToast] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('geanpierehuarcaya@gmail.com');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    return (
        <section id="contact" className="flex flex-col justify-center items-center relative pb-20 md:py-20 py-10">
            {/* Toast */}
            {showToast && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-out translate-x-0 opacity-100">
                    ✓ Email copiado al portapapeles
                </div>
            )}

            <span className="lg:absolute text-[5rem] text-gray-200 opacity-15 select-none pointer-events-none left-0 top-30 flicker bounce" style={{ fontFamily: "'Robinson Outline', sans-serif" }}>
                CONTACT
            </span>


            <form action="" className="bg-[#ffffff36] w-[90%] sm:w-[70%] mx-auto rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">


                    <div className="flex flex-col gap-4 p-10 bg-[#6362623d]">
                        <h2 className="text-xl font-semibold text-white-200 mb-4">Envíame un mensaje</h2>

                        <label className="flex flex-col text-sm text-white-200">
                            Nombre
                            <input
                                type="text"
                                className="mt-1 bg-white/70 focus:bg-gray-200 px-4 py-2 rounded-md outline-none placeholder-gray-500 text-gray-700"
                                placeholder="Ingrese su nombre"
                                required
                            />
                        </label>

                        <label className="flex flex-col text-sm text-white-200">
                            Email
                            <input
                                type="email"
                                className="mt-1 bg-white/70 focus:bg-gray-200 px-4 py-2 rounded-md outline-none placeholder-gray-500 text-gray-700"
                                placeholder="Ingrese su correo"
                                required
                            />
                        </label>

                        <label className="flex flex-col text-sm text-white-200">
                            Mensaje
                            <textarea
                                required
                                rows={4}
                                className="mt-1 bg-white/70 focus:bg-gray-200 px-4 py-2 rounded-md outline-none placeholder-gray-500 text-gray-700 resize-none"
                                placeholder="Escriba su mensaje"
                            ></textarea>
                        </label>

                        <button
                            type="submit"
                            className="bg-black text-white mt-4 py-2 rounded-full hover:bg-gray-900 transition"
                        >
                            Enviar
                        </button>
                    </div>


                    <div className="flex flex-col justify-center items-center gap-5 p-10 bg-[#eaebeb86] text-[#282A2A]">
                        <h3 className="text-lg font-semibold mb-2">O escríbeme directamente</h3>

                        <a
                            href="https://wa.me/+51912390600"
                            target="_blank"
                            className="w-full max-w-sm bg-gradient-to-r from-[#1b9949] via-[#25D366] to-[#1b9949] 
                   py-3 text-lg font-medium flex justify-center items-center 
                   rounded-full gap-3 text-white shadow-md hover:scale-105 transition"
                        >
                            <img src="/whatsapp.svg" alt="WhatsApp Gian Piere Condori Huarcaya" className="w-8 h-8" />
                            WhatsApp
                        </a>

                        <button type="button" onClick={copyToClipboard} className="w-full max-w-sm bg-gradient-to-r from-[#b9b7b7] via-[#e4e4e4] to-[#b9b7b7] py-3 text-lg font-medium flex justify-center items-center rounded-full gap-3 text-gray-700 shadow-md hover:scale-105 transition text-[15px]" > <img src="/correo.svg" alt="Correo Gian Piere Condori Huarcaya" className="w-8 h-8" /> <span className="truncate">geanpierehuarcaya@gmail.com</span> </button>
                    
                    </div>
                    
                </div>
            </form>
        </section>
    )
}