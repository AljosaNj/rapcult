import Image from 'next/image'

export default function PhotoGrid() {
  return (
   <div className='bg-pacgrey  overflow-hidden '>
    <br/>
    <br/>
    <br/>
<h1  className='md:text-left text-white font-bold text-2xl  ml-12 '>JOIN CREATIVE<br/> COMMUNITY</h1>
   <br/>
   <br/>
   
   
<div className="flex   gap-4  items-center text-center mx-auto  transform  -rotate-6   "    >





     <Image
       className="h-auto max-w-full   rounded-lg w-1/4   sm:w-1/3 "
      src="/images/slid1.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"


    />
  


     <Image
        className="h-auto max-w-full  rounded-lg  w-1/4  sm:w-1/3 "
      src="/images/slid2.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />
   
   
         <Image
           className="h-auto max-w-full    rounded-lg w-1/4 sm:w-1/3 "
      src="/images/slid3.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />


 
       <Image
           className="h-auto max-w-full   rounded-lg  w-1/4 sm:w-1/3 "
      src="/images/slid4.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />


       <Image
           className=" h-auto max-w-full   rounded-lg w-1/4 sm:w-1/3 "
      src="/images/slid5.jpeg"
      width={400}
      height={200}
      
      alt="Picture of the author"
    />
     

    </div>
    <br/>
   <br/>
<h1  className='md:text-right text-grey font-bold text-2xl  mr-12   '>OF CREATORS<br/> LIKE YOU</h1>

    </div>
  )
}



/*
className=" grid grid-cols-1 ms:grid-cols-5    md:grid-cols-5 gap-4  items-center text-center mx-auto  transform -rotate-6  "

h-auto max-w-full  h-auto w-screen

*/