import { education } from "@/app/constants/constants"

export default function Education() {

    return (
        <section className="flex flex-col gap-[20px]">
            <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Educación</h2>
            <div className="flex flex-col gap-[20px]">
                {education.map((edu, index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[18px] font-bold"> ● {edu.title} - {edu.institution}</h3>
                                <span className="text-muted-foreground">{edu.date}</span>
                            </div>
                            <p className="text-[16px]">{edu.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}