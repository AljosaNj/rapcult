import Image from 'next/image'

export default function PhotoGrid() {
  return (
   <div className='bg-black'>
    <br/>
    <br/>
    <br/>
<h1  className='md:text-left text-white font-light text-lg    '>JOIN CREATIVE<br/> COMMUNITY</h1>
   <br/>
   <br/>
    <div  className=" grid grid-cols-1 ms:grid-cols-5    md:grid-cols-5 gap-4  items-center text-center mx-auto   " >
   


     <Image
       className="h-auto max-w-full rounded-lg  "
      src="/images/slid1.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"


    />
     <Image
        className="h-auto max-w-full rounded-lg  "
      src="/images/slid2.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />
   
         <Image
           className="h-auto max-w-full rounded-lg   "
      src="/images/slid3.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />
       <Image
           className="h-auto max-w-full rounded-lg   "
      src="/images/slid4.jpeg"
      width={400}
      height={200}
      alt="Picture of the author"
    />

       <Image
           className="h-auto max-w-full rounded-lg skew-x-5 "
      src="/images/slid5.jpeg"
      width={400}
      height={200}
      
      alt="Picture of the author"
    />

    </div>
    <br/>
   <br/>
<h1  className='md:text-right text-white font-light text-lg    '>OF CREATORS<br/> LIKE YOU</h1>

    </div>
  )
}