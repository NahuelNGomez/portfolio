import Link from "next/link";
import Image from "next/legacy/image";

interface componentsArgs {
  image: string; // Tipo explícito para la prop 'imagen'
  title: string;
  description: string;
  link: string;
  tags: any;
}

export default function TableWorks({ image, title, description, link, tags }: componentsArgs) {
  return (
    <div className="bg-white flex-col min-w-min min-h-48 items-center justify-center p-4 rounded-lg shadow-md">
      <div className="bg-black flex-col sm:w-full h-52 md:h-72 overflow-hidden rounded-lg relative items-center justify-center">
        <Image
          src={image}
          alt=""
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      <h3 className="text-xl max-h-24 text-black font-semibold text-center p-2">{title}</h3>
      <section className="flex flex-wrap justify-center sm:justify-center items-center gap-2">
            {
              tags ? tags.map((tag: any) => {
                return <div key={tag.name} className={tag.class}>{tag.icon}<div className="sm:flex hidden">{tag.name}</div></div>
              }) : ""
            }
          </section>
      <p className="text-gray-600 text-center">{description}</p>
      
      <div className="flex justify-center items-center pt-4">
        <Link href={link} target="_blank">
          <button type="button" className=" text-white bg-dark0 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-dark0 dark:hover:bg-gray-900 dark:focus:ring-gray-900 dark:border-gray-900">
            <section className="flex justify-center items-center gap-2">
              <svg className="h-6 w-6 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              view Project
            </section>
          </button>
          
        </Link>
      </div>
    </div>
  )

}

