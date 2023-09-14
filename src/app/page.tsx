import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import About from './components/Home/About';
import TableWorks from './components/Home/TableWorks';

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
    <main className="min-h-screen flex flex-col">
      <Navegation/>
      <About/>
      <div id="work" className="grid grid-cols-2 gap-4 px-24">
        <div className="col-span-1 mb-10 ">
          <TableWorks image={rocketLeague} title={titleRocketLeague} description={descripcionRocketLeague} />
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={teg} title={titleTeg} description={descripcionTeg} />
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={frontPSA} title={titlefrontPSA} description={descripcionfrontPSA} />
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={apiRest} title={titleApiRest} description={descripcionApiRest} />
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={kotlin} title={titleKotlin} description={descripcionKotlin} />
        </div>
      </div>
      <Footer/>
    </main>
  )
}
