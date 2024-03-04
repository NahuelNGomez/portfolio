import Image from "next/legacy/image"
import Link from 'next/link'
import { useRouter } from 'next/router';
import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import About from './components/Home/About';
import TableWorks from './components/Home/TableWorks';
import ContactMe from './components/Home/ContactMe';

export default function Home() {

  const rocketLeague = "https://i.ibb.co/brRpmFm/rocket-League.jpg";
  const teg = "https://i.ibb.co/7vtvyYT/Teg.png";
  const kotlin = "https://i.ibb.co/nz88r5Z/kotlin.png";
  const frontPSA = "https://i.ibb.co/DYLtyXF/Front-Soporte.png"
  const apiRest = "https://i.ibb.co/2Z5hjqS/rest.png"
  const fileTransfer = "https://i.ibb.co/sQ8Vwf9/file-transfer.jpg"

  const titleRocketLeague = "Rocket League 2D"
  const titleTeg = "T - E - G"
  const titleKotlin = "Comparador APP - Kotlin"
  const titlefrontPSA = "Frontend PSA"
  const titleApiRest = "API REST"
  const titleFileTransfer = "File Transfer"

  const descripcionRocketLeague = "Trabajo realizado en C++ con conceptos de Cliente - Servidor, Sockets TCP, Multithreading y herramientas de visualización como QT5 y SDL2. Proyecto compartido."
  const descripcionTeg = "Proyecto realizado en Java utilzando POO, TDD y diagramas UML. Se utiliza como herramienta gráfica a JavaFX. Proyecto compartido."
  const descripcionKotlin = "aplicación móvil comparadora de textos en Kotlin, ofreciendo una herramienta eficiente para comparar y analizar contenido textual de manera precisa."
  const descripcionFileTransfer = "Aplicación de transferencia de archivos entre procesos concurrentemente utilizando sockets UDP con protocolos Stop & Wait y Selective Repeat. Se realizó en Python. Proyecto compartido."
  const descripcionfrontPSA = "Frontend sobre gestión de tickets realizando request a una API. Se utiliza Typescript; Next.js y React. Para el diseño se empleó Bootstrap"
  const descripcionApiRest = "Backend utilizando Python y SQLAlchemy para la manipulación eficiente de datos, respaldado por una API REST para la gestión de información."
  
  const linkRocketLeague = "https://github.com/NahuelNGomez/Rocket-League"
  const linkTeg = "https://github.com/NahuelNGomez/TEG"
  const linkKotlin = "https://github.com/NahuelNGomez/Proyecto-final-Comparador"
  const linkfrontPSA = "https://github.com/NahuelNGomez/Frontend-PSA"
  const linkApiRest = "https://github.com/NahuelNGomez/soporteAPI"
  const linkFileTransfer = "https://github.com/franciscoduc4/TP1-File-Transfer"
  return (
    <main className="min-h-screen">
      <Navegation/>
      <About/>
      <div id="work" className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-24 ">
        <div className="col-span-1 mb-10">
          <TableWorks image={rocketLeague} title={titleRocketLeague} description={descripcionRocketLeague} link={linkRocketLeague} />
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={teg} title={titleTeg} description={descripcionTeg} link={linkTeg}/>
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={frontPSA} title={titlefrontPSA} description={descripcionfrontPSA} link={linkfrontPSA}/>
        </div>
        <div className="col-span-1 mb-10">
          <TableWorks image={apiRest} title={titleApiRest} description={descripcionApiRest} link={linkApiRest}/>
        </div>
        <div className="col-span-1  mb-10">
          <TableWorks image={kotlin} title={titleKotlin} description={descripcionKotlin} link={linkKotlin}/>
        </div>
        <div className="col-span-1  mb-10">
          <TableWorks image={fileTransfer} title={titleFileTransfer} description={descripcionFileTransfer} link={linkFileTransfer} />
        </div>
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer/>
    </main>
  )
}
