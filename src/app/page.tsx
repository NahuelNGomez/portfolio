import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import TableResume from './components/Home/TableResume';

export default function Home() {

  const rocketLeague = "https://i.ibb.co/brRpmFm/rocket-League.jpg";
  const teg = "https://i.ibb.co/7vtvyYT/Teg.png";
  const kotlin = "https://i.ibb.co/nz88r5Z/kotlin.png";
  const frontPSA = "https://i.ibb.co/DYLtyXF/Front-Soporte.png"
  const apiRest = "https://i.ibb.co/2Z5hjqS/rest.png"

  const titleRocketLeague = "Rocket League 2D"
  const titleTeg = "T-E-G"
  const titleKotlin = "Comparador APP - Kotlin"
  const titlefrontPSA = "Frontend PSA"
  const titleApiRest = "API REST"

  const descripcionRocketLeague = "Trabajo realizado en C++"
  const descripcionTeg = "Trabajo realizado en Java"
  const descripcionKotlin = "Trabajo realizado en Kotlin"
  const descripcionfrontPSA = "Trabajo realizado en TypeScript"
  const descripcionApiRest = "Trabajo realizado en Python"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 m-8">
      <Navegation/>
      <div id="about" className='p-4 m-4'>
        <h2 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h2>
          <p>I am a software developer with 2+ years of experience in C#, SQL, and web development. Proficient in C# Windows/Web apps, SQL database design and optimization, HTML, CSS and JavaScript. Strong team player, able to meet tight deadlines and deliver high-quality results. Passionate about using technology to make a positive impact.</p>{/*About*/}
          <TableResume/>
      </div>
      <div id="work" className="grid grid-cols-2 gap-8 ">
        <div className="col-span-1 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-60 md:h-72 lg:h-96 overflow-hidden rounded-lg relative">
              <Image
                src={rocketLeague}
                alt=""
                layout="responsive"
                width={4000}
                height={3000}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-center p-2">{titleRocketLeague}</h3>
            <p className="text-gray-600 text-center">{descripcionRocketLeague}</p>
            <div className="flex justify-center items-center pt-4">
              <Link href="https://github.com/NahuelNGomez/Rocket-League">
                <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
                </button>
              </Link>
            </div>
          </div> {/*<TableWorks imagen={rocketLeague} titulo={titleRocketLeague} descripcion={descripcionRocketLeague} />*/ }
        </div>
          <div className="col-span-1 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-60 md:h-72 lg:h-96 overflow-hidden rounded-lg relative">
        <Image
          src={teg}
          alt=""
          layout="responsive"
          width={4000}
          height={3000}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-center p-2">{titleTeg}</h3>
      <p className="text-gray-600 text-center">{descripcionTeg}</p>
      <div className="flex justify-center items-center pt-4">
        <Link href="https://github.com/NahuelNGomez/TEG">
          <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
          </button>
         </Link>
      </div>
    </div>{/* <TableWorks imagen={teg} titulo={titleTeg} descripcion={descripcionTeg} /> */}
          </div>
          <div className="col-span-1 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-80 md:h-96 lg:h-120 overflow-hidden rounded-lg relative">
        <Image
          src={frontPSA}
          alt=""
          layout="responsive"
          width={600}
          height={400}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-center p-2">{titlefrontPSA}</h3>
      <p className="text-gray-600 text-center">{descripcionfrontPSA}</p>
      <div className="flex justify-center items-center pt-4">
              <Link href="https://github.com/NahuelNGomez/Frontend-PSA">
                <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
                </button>
              </Link>
            </div>
      
    </div>
    </div>
          <div className="col-span-1 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-80 md:h-96 lg:h-120 overflow-hidden rounded-lg relative">
        <Image
          src={apiRest}
          alt=""
          layout="responsive"
          width={600}
          height={400}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-center p-2">{titleApiRest}</h3>
      <p className="text-gray-600 text-center">{descripcionApiRest}</p>
      <div className="flex justify-center items-center pt-4">
              <Link href="https://github.com/NahuelNGomez/soporteAPI">
                <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
                </button>
              </Link>
            </div>
    </div>
    </div>
          <div className="col-span-1 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-80 md:h-96 lg:h-120 overflow-hidden rounded-lg relative">
        <Image
          src={kotlin}
          alt=""
          layout="responsive"
          width={600}
          height={400}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-center p-2">{titleKotlin}</h3>
      <p className="text-gray-600 text-center">{descripcionKotlin}</p>
      <div className="flex justify-center items-center pt-4">
              <Link href="https://github.com/NahuelNGomez/Proyecto-final-Comparador">
                <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view Project
                </button>
              </Link>
            </div>
    </div>
            {/* <TableWorks imagen={kotlin} titulo={titleKotlin} descripcion={descripcionKotlin} /> /> */}
          </div>
      </div>
      <Footer/>
    </main>
  )
}
