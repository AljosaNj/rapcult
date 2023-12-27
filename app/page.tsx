import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Stepper from './components/Stepper';
import SliderCard  from './components/SliderCard';
import ContactAccordion from './components/ContactAccordion';
import Footer from './components/Footer';
import Vertical from './components/Vertical';


export default function Home() {
  return (
    <div >
    <NavBar/>
     <Hero />
     
     <About />
     <Vertical />
   
  <Stepper />
 
  <SliderCard />
   
    
<ContactAccordion />
 <Footer />

    </div>
    
  )
}
