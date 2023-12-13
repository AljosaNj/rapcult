import ContactForm from "./ContactForm"
import AnimatedAccordionPage from "./AnimatedAccordionPage"
import { IoMdArrowForward } from "react-icons/io";

export default function ContactAccordion() {
  return (
    <div className="bg-black">
    <div className=" relative flex justify-between  md:flex-row md:space-x-7 space-y-3 md:space-y-0 rounded-xl shadow-lg p-8 max-w-xs md:max-w-3xl mx-auto border border-pacgrey bg-red cursor-pointer  sm:grid grid-cols-1  ">
      <div>
      <h1 className="text-4xl sm:text-1xl font-semibold text-center text-white">get your success story
       <br/>
with rapcult
      
      </h1>
 
</div>
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