import Image from 'next/image'
import Footer from '../../components/Footer'
import Navegation from '../../components/Navegation'
import TableResume from '../../components/tableResume'
import About from '../../components/About'
import TableWorks from '../../components/TableWorks'


export default function Home() {

  const rocketLeague = "/rocketLeague.jpg";
  const teg = "/Teg.png";
  const kotlin = "/kotlin.png";
  const titleRocketLeague = "Rocket League"
  const titleTeg = "T-E-G"
  const titleKotlin = "Comparador APP - Kotlin"

  const descripcionRocketLeague = "Trabajo realizado en C"
  const descripcionTeg = "Trabajo realizado en Java"
  const descripcionKotlin = "Trabajo realizado en Kotlin"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 m-8">
      <Navegation/>
      <div className='p-4 m-4'>
        <About/>
        <TableResume/>
      </div>
      <div className="grid grid-cols-2 gap-1 p-4 m-4">
          <div className="col-span-1 w-1/2 mb-10">
            <TableWorks imagen={rocketLeague} titulo={titleRocketLeague} descripcion={descripcionRocketLeague} />
          </div>
          <div className="col-span-1 w-1/2 mb-10">
            <TableWorks imagen={teg} titulo={titleTeg} descripcion={descripcionTeg} />
          </div>
          <div className="col-span-1 w-1/2 mb-10">
            <TableWorks imagen={kotlin} titulo={titleKotlin} descripcion={descripcionKotlin} />
          </div>
          <div className="col-span-1 w-1/2 mb-10">
            <TableWorks imagen={kotlin} titulo={titleKotlin} descripcion={descripcionKotlin} />
          </div>
          <div className="col-span-1 w-1/2 mb-10">
            <TableWorks imagen={kotlin} titulo={titleKotlin} descripcion={descripcionKotlin} />
          </div>
      </div>

      <Footer/>

    </main>
  )
}
