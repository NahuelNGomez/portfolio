import { PROJECTS } from "@/app/constants/constants"
import TableWorks from "./TableWorks"

export default function ProjectsOverview() {

    return (
        <section className="px-10 sm:px-20 m-4 flex flex-col">
            <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Proyectos</h2>
            <div id="work" className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-24 ">
                {PROJECTS.map((project, index) => {
                    return (
                        <div key={index} className="col-span-1 mb-10">
                            <TableWorks image={project.image} title={project.title} description={project.description} link={project.link} tags={project.tags} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

