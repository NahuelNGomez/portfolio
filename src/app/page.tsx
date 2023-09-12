import Image from 'next/image'
import Footer from '../../components/Footer'
import Navegation from '../../components/Navegation'
import TableResume from '../../components/tableResume'
import About from '../../components/About'
import TableWorks from '../../components/TableWorks'


export default function Home() {

  const rocketLeague = "https://i.ibb.co/brRpmFm/rocket-League.jpg";
  const teg = "https://i.ibb.co/7vtvyYT/Teg.png";
  const kotlin = "https://i.ibb.co/2hJD42H/kotlin.png";
  const titleRocketLeague = "Rocket League"
  const titleTeg = "T-E-G"
  const titleKotlin = "Comparador APP - Kotlin"

  const descripcionRocketLeague = "Trabajo realizado en C"
  const descripcionTeg = "Trabajo realizado en Java"
  const descripcionKotlin = "Trabajo realizado en Kotlin"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 m-8">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 rounded-lg">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <a className="flex-none text-xl font-semibold dark:text-white" href="#">Portfolio</a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#" aria-current="page">About</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Contact</a>
    </div>
  </nav>
</header>{/*Navegation*/}
      <div className='p-4 m-4'>
      <h2 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nahuel Gomez</h2>
            <p>I am a software developer with 2+ years of experience in C#, SQL, and web development. Proficient in C# Windows/Web apps, SQL database design and optimization, HTML, CSS and JavaScript. Strong team player, able to meet tight deadlines and deliver high-quality results. Passionate about using technology to make a positive impact.</p>{/*About*/}
            <div className="relative overflow-x-auto p-4 m-4 ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Resume
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Español
                </th>
            </tr>
        </tbody>
    </table>
</div> {/*TableResume*/ }
      </div>
      <div className="grid grid-cols-2 gap-1 p-4 m-4">
          <div className="col-span-1 w-1/2 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg relative">
        <Image
          src={rocketLeague}
          alt=""
          layout="responsive"
          width={4000}
          height={3000}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">{titleRocketLeague}</h3>
      <p className="text-gray-600">{descripcionRocketLeague}</p>
    </div> {/*<TableWorks imagen={rocketLeague} titulo={titleRocketLeague} descripcion={descripcionRocketLeague} />*/ }
          </div>
          <div className="col-span-1 w-1/2 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg relative">
        <Image
          src={teg}
          alt=""
          layout="responsive"
          width={4000}
          height={3000}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">{titleTeg}</h3>
      <p className="text-gray-600">{descripcionTeg}</p>
    </div>{/* <TableWorks imagen={teg} titulo={titleTeg} descripcion={descripcionTeg} /> */}
          </div>
          <div className="col-span-1 w-1/2 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg relative">
        <Image
          src={kotlin}
          alt=""
          layout="responsive"
          width={4000}
          height={3000}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">{titleKotlin}</h3>
      <p className="text-gray-600">{descripcionKotlin}</p>
    </div>
            {/* <TableWorks imagen={kotlin} titulo={titleKotlin} descripcion={descripcionKotlin} /> /> */}
          </div>
      </div>

      <footer className="footer container bg-black items-center justify-center py-4 rounded-lg">
            <h4 className='text-white flex items-center justify-center'>About the site</h4>
              <p className="text-body-secondary text-white flex items-center justify-center">Created by Nahuel Nicolás Gomez.</p>
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2023 <a href="https://flowbite.com/" className="hover:underline">Nahuel Nicolás Gomez™</a>. All Rights Reserved.</span>
</footer> {/*Footer */}

    </main>
  )
}
