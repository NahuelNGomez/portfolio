"use client";
import Link from 'next/link'
import { Github, Linkedin, MapPin, Mail } from 'lucide-react'
import Button from '../components/Button'
import Education from './education'
import Skills from './skills'
import { motion } from "framer-motion"; // Importar framer-motion

const animationVariants = {
    hidden: { opacity: 0, y: -10 }, // Estado inicial (invisible y desplazado)
    visible: { opacity: 1, y: 0 }, // Estado final (completamente visible)
  };

export default function About() {
    return (
        <motion.main id="about" className='px-10 sm:px-20 m-4 mt-24 flex flex-col gap-7 font-code' initial="hidden" animate="visible" variants={animationVariants}>
            <section className="flex flex-col gap-[10px]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h1>
                        <h2 className="text-[20px] mt-2">Desarrollador de Software | Estudiante de Ingeniería Informática </h2>
                    </div>
                    <div className="flex gap-2">
                        <Button className='bg-[#eeeeee] text-dark1' size="icon" asChild>
                            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button className='bg-[#eeeeee] text-dark1' size="icon" asChild>
                            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Buenos Aires, Argentina</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <span>nngomez@fi.uba.ar</span>
                    </div>
                </div>
            </section>

            <div className="border-[1px] border-dark1 w-full"></div>
            <section className="flex flex-col gap-[20px]">
            <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Sobre mí</h2>
                <p className="text-[16px]">Desarrollador de software con 3 años de experiencia en proyectos sobre programación realizados en C; C++; Python; y Java. Fuerte respaldo en Git y Github. Estoy ansioso por ingresar al mundo profesional para aprovechar mis habilidades y hacer una contribución significativa a las empresas.</p>
            </section>
            <div className="border-[1px] border-dark1 w-full"></div>
            <Education/>
            <Skills/>
        </motion.main>
    )
}