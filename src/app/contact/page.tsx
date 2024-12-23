"use client";
import { motion } from "framer-motion";
import ContactMe from "../components/Home/ContactMe";

const animationVariants = {
    hidden: { opacity: 0, y: -10 }, // Estado inicial (invisible y desplazado)
    visible: { opacity: 1, y: 0 }, // Estado final (completamente visible)
  };

export default function Contact() {
    return (
        <motion.main className="font-code" initial="hidden" animate="visible" variants={animationVariants} >
        <div id="contact" className='px-10 sm:px-20 m-4 mt-24 flex flex-col gap-7'>
            <ContactMe />
        </div>

        </motion.main>
    )
}