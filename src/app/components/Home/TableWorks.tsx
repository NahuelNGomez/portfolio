import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../Button";

interface componentsArgs {
  image: string; // Tipo explícito para la prop 'imagen'
  title: string;
  description: string;
  link: string;
  tags: any;
}

export default function TableWorks({ image, title, description, link, tags }: componentsArgs) {
  return (
    <div className="bg-bgdark0 flex flex-col w-[400px] min-h-48 items-center justify-center p-4 rounded-lg shadow-[0_35px_80px_-15px_rgba(0,0,0,1)] hover:scale-105 transition-all duration-300 gap-2">
      <div className="bg-black flex-col w-full h-52 md:h-72 overflow-hidden rounded-lg relative items-center justify-center">
        <Image
          src={image}
          alt=""
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      <h3 className="text-xl max-h-24 text-[#eeeeee] font-semibold text-center px-2">{title}</h3>
      <section className="flex flex-wrap justify-center sm:justify-center items-center gap-2">
        {
          tags ? tags.map((tag: any) => {
            return <div key={tag.name} className={tag.class}>{tag.icon}<div className="sm:flex hidden">{tag.name}</div></div>
          }) : ""
        }
      </section>
      <div className="border-[1px] border-dark1 w-full"></div>
      <p className="text-[#eeeeee] text-center">{description}</p>
      <div className="flex justify-center items-center pt-4">
        <Link href={link} target="_blank">
          <Button><section className="flex justify-center items-center gap-2">
            <svg className="h-6 w-6 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            view Project
          </section></Button>

        </Link>
      </div>
    </div>
  )

}

