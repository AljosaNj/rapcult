import ContactForm from "./ContactForm"
import AnimatedAccordionPage from "./AnimatedAccordionPage"
import { IoMdArrowForward } from "react-icons/io";

export default function ContactAccordion() {
  return (
    <div className="bg-black">
      <br/>
    <div className=" relative flex justify-between      md:flex-row md:space-x-7 space-y-3 md:space-y-0 rounded-xl shadow-lg p-8 max-w-xs md:max-w-3xl mx-auto border border-pacgrey bg-red cursor-pointer sm:grid grid-cols-1   ">
      <div>
      <h1 className="text-4xl sm:text-1xl font-semibold text-center text-white">get your success story
       <br/>
with rapcult
      
      </h1>
 
</div>

<div className="pt-6  sm:ml-8">
  
 <a href=""
     className="flex items-center justify-center w-max  bg-white text-black  px-4 py-2 text-sm font-bold leading-5 capitalize duration-100 rounded-sm cursor-pointer focus:ring-opacity-50    outline-none    border-text  hover:shadow-lg hover:-translate-y-1    ">
       JOIN RAPCULT
									 <span className="ml-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="#000000" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
            </svg>
        </span>
    </a>

    
      </div>




    </div>
<br/>
<br/>
    <div className="grid sm:grid-cols-1  lg:grid-cols-2      md:grid-cols-1  bg-black">
      <div >
        <h1 className="text-2xl font-semibold text-center text-white">Frequently asked questions</h1>
       <AnimatedAccordionPage /> 
      </div>
<div >
  <h1 className="text-2xl font-semibold text-center text-white">Do you still have questions?</h1>
  <ContactForm />
</div>

    </div>
    </div>
  )
}


/*

<div className="pb-2  ">
 <a  className="flex items-center  px-5 py-2  bg-white text-black transition-colors   mt-10 "   
    
    
    href="">
      <div className="flex space-x-2    ">
        JOIN RAPCULT
        <br/>
       <IoMdArrowForward size={"0.9rem"}  />
      </div>
       
    </a>
    
      </div>



*/