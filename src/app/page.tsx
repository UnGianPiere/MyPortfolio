import Hero from "../components/sections/Hero"; 
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experiencie";
export default function Home() {
  return (
    <>
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}