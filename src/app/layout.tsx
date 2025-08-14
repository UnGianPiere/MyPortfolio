import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mi portafolio personal | Desarollador Web",
  description: "Portafolio profesional con proyectos de desarrollo web, experiencia en tecnologías modernas como React, Next.js, y más. Desarrollo de aplicaciones web de alta calidad.",
  keywords: "desarrollo web, frontend developer, React, Next.js, TypeScript, portafolio web, desarrollador fullstack",
  authors: [{ name: "UnGianPiere" }],
  openGraph: {
    title: "Mi portafolio personal | Desarollador Web",
    description: "Portafolio profesional con proyectos de desarrollo web, experiencia en tecnologías modernas como React, Next.js, y más.",
    type: "website",
    locale: "es_ES",
    siteName: "Portafolio UnGianPiere",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi portafolio personal | Desarollador Web",
    description: "Portafolio profesional con proyectos de desarrollo web",
    creator: "@UnGianPiere"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Language" content="es" />
        <meta name="geo.region" content="PE" />
        <link rel="canonical" href="https://my-portfolio-delta-six-33.vercel.app/" />
        <meta name="google-site-verification" content="-Or9zwJuKiPzrJix-fB8Dmnh25I6dBt0Hzc2GeQotU4" />
        <link
          href="https://db.onlinewebfonts.com/c/cb38535eaadf9667b4c52446d09f9fdf?family=Robinson+Outline"
          rel="stylesheet"
        />
        
      </head>
      <body
        className="flex flex-col min-h-screen"
      >
        <div className="bg"></div>
        <Header/>
        <main className="flex-grow sm:px-10">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
