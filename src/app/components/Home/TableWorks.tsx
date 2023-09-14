import Link from "next/link";
import Image from "next/image";

interface componentsArgs {
    image: string; // Tipo explícito para la prop 'imagen'
    title: string;
    description: string;
  }

export default function TableWorks({image, title, description}: componentsArgs) {
    return (

        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-60 md:h-72 lg:h-96 overflow-hidden rounded-lg relative">
              <Image
                src={image}
                alt=""
                layout="responsive"
                width={4000}
                height={3000}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-center p-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
            <div className="flex justify-center items-center pt-4">
              <Link href="https://github.com/NahuelNGomez/Rocket-League">
                <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
                </button>
              </Link>
            </div>
          </div>
          )
    
}

