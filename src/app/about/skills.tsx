import { proficient, languages } from "@/app/constants/constants"

export default function Skills() {
    return (
        <section className="space-y-6">
            <h2 className="text-[20px] underline decoration-dark2 underline-offset-4">Habilidades Técnicas</h2>
            
            <div className="space-y-4">
                <div>
                    <h3 className="text-[18px] font-semibold mb-2">Tecnologías y Herramientas:</h3>
                    <ul className="flex flex-wrap gap-2">
                        {proficient.map((skill, index) => (
                            <button key={index} className="border-2 border-dark3 rounded-md px-5 py-1 text-sm hover:bg-dark3 transition duration-300">
                                {skill.title}
                            </button>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-[18px] font-semibold mb-2">Lenguajes de Programación:</h3>
                    <ul className="flex flex-wrap gap-2">
                        {languages.map((language, index) => (
                            <li key={index} className="border-2 border-dark2 rounded-md px-5 py-1 text-sm">
                                {language.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}