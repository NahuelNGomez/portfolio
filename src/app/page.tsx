import Footer from './components/Home/Footer'
import Navegation from './components/Home/Navegation'
import About from './components/Home/About';
import ContactMe from './components/Home/ContactMe';
import ProjectsOverview from "./components/Home/ProjectsOverview";

export default function Home() {
  return (
    <main className="min-h-screen  font-code" >
      <About/>
      <ProjectsOverview/>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer/>
    </main>
  )
}
