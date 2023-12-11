import ContactForm from "./ContactForm"
import AnimatedAccordionPage from "./AnimatedAccordionPage"

export default function ContactAccordion() {
  return (
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
    
  )
}