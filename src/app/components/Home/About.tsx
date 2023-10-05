import TableResume from "./TableResume";

export default function About(){

    return (
        <div id="about" className='px-20 m-4 mt-24'>
            {/* <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h2><p>I'm a software developer with three years of experience working on projects in C, C++, Python, and Java. I have a strong background in Git and GitHub, and I'm eager to enter the professional world to leverage my skills and make a meaningful contribution.</p> */}
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h2><p>Desarrollador de software con 3 años de experiencia en proyectos sobre programación realizados en C; C++; Python; y Java. Fuerte respaldo en Git y Github. Estoy ansioso por ingresar al mundo profesional para aprovechar mis habilidades y hacer una contribución significativa a las empresas.</p>
            <TableResume/>
        </div>
    )
}