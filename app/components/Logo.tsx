import Image from 'next/image'




export default function Logo() {
  return (
    <div className=' pb-20   items-center text-center mx-auto '>
   <h1  className='md:text-center'>TECHNOLOGY  TRUSTED BY</h1>
   <br/>
   <div className='grid sm:grid-cols-2       md:grid-cols-4 gap-8  sm:px-5      '   >
     <Image
       
      src="/images/logo4.jpg"
      width={160}
      height={100}
      alt="Picture of the author"
    />

     <Image
       
      src="/images/logo2.jpg"
      width={160}
      height={100}
      alt="Picture of the author"
    />
     <Image
       
      src="/images/logo3.jpg"
      width={160}
      height={100}
      alt="Picture of the author"
    />
   
         <Image
          
      src="/images/logo4.jpg"
      width={160}
      height={100}
      alt="Picture of the author"
    />

   </div>
 




    </div>
    
  )
}


/*
className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-5' 

className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2"

*/