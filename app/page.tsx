import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import PhotoGrid from './components/PhotoGrid';
import Card from './components/Card';

export default function Home() {
  return (
    <div >
    <NavBar/>
     <Hero />
     <About />
    <PhotoGrid />
    <Card />
    </div>
    
  )
}
