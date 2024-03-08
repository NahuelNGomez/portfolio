import Image from "next/legacy/image"
import Link from 'next/link'
import { useRouter } from 'next/router';
import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import About from './components/Home/About';
import TableWorks from './components/Home/TableWorks';
import ContactMe from './components/Home/ContactMe';
import { TAGS, PROJECTS } from './constants/constants';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navegation/>
      <About/>

      <div id="work" className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-24 ">
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="col-span-1 mb-10">
              <TableWorks image={project.image} title={project.title} description={project.description} link={project.link} tags={project.tags} />
            </div>
          )
        })}
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer/>
    </main>
  )
}
