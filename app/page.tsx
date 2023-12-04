import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Stepper from './components/Stepper';
import SliderCard from './components/SliderCard';

export default function Home() {
  return (
    <div >
    <NavBar/>
     <Hero />
     <About />
    
   <Stepper />
   <SliderCard />
    </div>
    
  )
}
