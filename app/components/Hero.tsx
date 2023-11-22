import { IoMdArrowForward } from "react-icons/io";

export default function Hero() {
  return (
   <section  className=" flex flex-col min-h-screen bg-black  text-white bg-center bg-cover bg-blend-overlay bg-fixed   " >
      <div className="flex-1 flex items-center ">
    <div className="text-center mx-auto  ">
     <br></br>
     <br></br>
     <br></br>
    <h1 className="text-7xl font-semibold  ">DOMINATE THE INDUSTRY</h1>
        <h1 className="text-6xl font-semibold">WITH RAPCULT</h1>
        <br></br>
       
    <p className="font-light text-lg mt-5 text-grey">JOIN US, GARNER RECOGNITION
    <br></br>
    AND STREAM YOUR WAY TO SUCCESS
    </p>
    
    <a className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10  " href="">
       JOIN RAPCULT
       <IoMdArrowForward />
    </a>


    </div>
</div>
    
   </section>
 
  )
}


/*
bg-slate-800
bg-black/30
 */

/*
 <a className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10" href="">
        Get Started
    </a>


*/