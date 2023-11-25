import Logo from "./Logo"
import PhotoGrid from "./PhotoGrid"
import Card from "./Card"

export default function About() {
  return (
    <section  className=" flex flex-col min-h-screen bg-black text-white bg-center bg-cover bg-blend-overlay bg-fixed   "    >
   <div  className="  flex-1 flex  items-center  bg-darkgreen  rounded-t-3xl   ">
    <div  className="  md:grid-cols-2 text-center mx-auto  " >
      <br/>
      <br/>
      <div className="flex-1 flex  ">
         <Logo />
           
            
      </div>
    

     
     <div className="pb-20">
       <PhotoGrid   />
     </div>
     
<div className="text-left mb-3 p-10">
  <Card />
</div>
  
<br/>


    </div>


    
  
      

      

  






   </div>

    </section>
    
  )
}
/*

className="  flex-1 flex   items-center w-full md:w-auto bg-darkgreen rounded-3xl  " 


*/