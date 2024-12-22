"use client";
import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import About from './components/Home/About';
import ContactMe from './components/Home/ContactMe';
import ProjectsOverview from "./components/Home/ProjectsOverview";
import { motion } from "framer-motion"; 

const animationVariants = {
  hidden: { opacity: 0, y: -10 }, // Estado inicial (invisible y desplazado)
  visible: { opacity: 1, y: 0 }, // Estado final (completamente visible)
};


export default function Home() {
  return (
    <motion.main className="min-h-screen font-code" initial="hidden" animate="visible" variants={animationVariants} >
      <About/>
      <ProjectsOverview/>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer/>
    </motion.main>
  )
}
