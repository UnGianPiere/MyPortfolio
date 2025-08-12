import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mi portafolio personal",
  description: "Desarollador de apps web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
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
        <main className="flex-grow px-10">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
