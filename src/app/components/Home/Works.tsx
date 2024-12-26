import { experience } from "@/app/constants/constants"
export default function Works() {

    return (
        <section className="px-10 sm:px-20 m-4 flex flex-col">
            <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Experiencia</h2>
            {
                experience.map((exp, index) => {
                    return (
                        <div key={index} className="flex flex-col my-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[18px] font-bold"> ● {exp.title}</h3>
                                <span className="text-muted-foreground">{exp.date}</span>
                            </div>
                            <p className="text-[16px]">{exp.description}</p>
                        </div>
                    )
                })
            }

        </section>
    )
}