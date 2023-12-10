import Accordion from "./Accordion"


export default function AnimatedAccordionPage() {

  const faqs = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. ",
      active: false,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing.",
      active: false,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing.",
      active: false,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing.",
      active: true,
    },
  
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. ",
      active: false,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, ",
      active: false,
    },
       {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, ",
      active: false,
    },
   
  ]

  return (
    <main className="relative min-h-screen flex flex-col    justify-center overflow-hidden  p-12 ">
      <div className="w-full max-w-[550px] max-h-[570px]    mx-auto px-4 md:px-6 py-24   bg-black rounded-lg  pb-7 pt-6  border-2 border-grey "  >

       

        <div className="divide-y divide-grey  pb-6 ">
         
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}   >
              {faq.text}
            </Accordion>
          ))}
        </div>

      </div>
    </main>
  )
}



/*
 <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24 bg-red    rounded-lg   "

<main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden p-12 "></main>


*/