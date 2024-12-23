'use client';
import Link from "next/link";
import Button from "../Button";
import TableResume from "./TableResume";

export default function About() {

    return (
        <div id="about" className='px-10 sm:px-20 m-4 mt-24 flex flex-col gap-7'>
            <section className="flex flex-col gap-[10px]">
                <h2 className="text-[20px]">Hola! Soy</h2>
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h1>
                <h2 className="text-[20px]">Desarrollador de Software | Estudiante de Ingeniería Informática </h2>
            </section>
            <div className="border-[1px] border-dark1 w-full"></div>
            <section className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Sobre mí</h2>
                {/* <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h2><p>I'm a software developer with three years of experience working on projects in C, C++, Python, and Java. I have a strong background in Git and GitHub, and I'm eager to enter the professional world to leverage my skills and make a meaningful contribution.</p> */}
                <p className="text-[16px]">Desarrollador de software con 3 años de experiencia en proyectos sobre programación realizados en C; C++; Python; y Java. Fuerte respaldo en Git y Github. Estoy ansioso por ingresar al mundo profesional para aprovechar mis habilidades y hacer una contribución significativa a las empresas.</p>
                <div className="w-[200px] flex items-center justify-center self-center">
                    <Link href="/about">
                        <Button onClick={() => console.log("Más detalles...")}>
                            &lt; Más detalles /&gt;
                        </Button>
                    </Link>
                </div>
                <TableResume />
            </section>
            <div className="border-[1px] border-dark1 w-full"></div>
        </div>
    )
}