"use client";
import { Link } from "lucide-react"
import TableWorks from "../components/Home/TableWorks"
import { PROJECTS } from "../constants/constants"
import Button from "../components/Button"
import { motion } from "framer-motion";

const animationVariants = {
    hidden: { opacity: 0, y: -10 }, // Estado inicial (invisible y desplazado)
    visible: { opacity: 1, y: 0 }, // Estado final (completamente visible)
};

export default function Work() {
    return (
        <motion.main className="min-h-screen font-code" initial="hidden" animate="visible" variants={animationVariants} >
            <section id="about" className='px-10 sm:px-20 m-4 mt-24 flex flex-col gap-[10px]'>
                <div className="flex flex-col">
                    <h2 className="text-[30px] underline decoration-dark2 underline-offset-4">Mis proyectos más relevantes</h2>
                    <div id="work" className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                        {PROJECTS.map((project, index) => {
                            return (
                                <div key={index} className="col-span-1 mb-10 flex justify-center items-center self-center">
                                    <TableWorks image={project.image} title={project.title} description={project.description} link={project.link} tags={project.tags} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </motion.main >
    )
}