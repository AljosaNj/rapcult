"use client";

import { useState } from "react";
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

export default function HavBar() {

 const [navbar, setNavbar] = useState(false)
  return (
    <div >
    <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
      
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6"  >

    <div>
     <div className="flex items-center justify-between py-3 md:py-5 md:block">
     {/*LOGO */}

     <h2 className="   pb-2   text-2xl text-white text-600 font-bold " >RAPCULT</h2>

      {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose  width={30} height={30}  />
                  ) : (
                    <FaBars
                      
                      width={30}
                      height={30}
                     
                      className="focus:border-none active:border-none "
                    />
                  )}
                </button>   
              </div>
               </div>
                </div>

           
 <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  ">
                <li className="pb-4 text-xs text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-red  border-red  md:hover:text-red md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    HOW IT WORKS
                  </Link>
                </li>
                <li className="pb-4 text-xs text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-red  border-red  md:hover:text-red md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                  PACKAGES
                  </Link>
                </li>
                <li className="pb-4 text-xs text-white py-2 px-6 text-center  border-b-2 md:border-b-0 hover:bg-red  border-red  md:hover:text-red     md:hover:bg-transparent ">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    SUCCESS STORIES
                  </Link>
                </li>
                <li className="pb-4 text-xs text-white py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-red  border-red  md:hover:text-red    md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                   ABOUT RAPCULT
                  </Link>
                </li>

                <li className="pb-4 text-xs text-white py-2 px-6 text-center  border-b-2 md:border-b-0 hover:bg-red  border-red  md:hover:text-red     md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    RAPCULT
                  </Link>
                </li>
<li className=" invisible  md:visible ">


   <a href=""
     className="flex items-center justify-center w-max  bg-red text-white  px-4 py-2 text-sm font-bold leading-5 capitalize duration-100 rounded-sm cursor-pointer focus:ring-opacity-50    outline-none    border-text  hover:shadow-lg hover:-translate-y-1   truncate   sm:px-20 ">
       JOIN RAPCULT
									 <span className="ml-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
            </svg>
        </span>
    </a>
</li>
        

                


              </ul>




              
            </div>
          </div>





      </div>
    </nav>
    </div>
    
  )
}

/*

   <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded flex flex-row">
                JOIN RAPCULT 
               
              <IoMdArrowForward  className="top-1 right-15 h-10 w-17 ..."  />
                
                   
                
                
                    </div>

*/

/*

 <li className="  pb-3 text-xs text-white py-2 px-4  text-center   md:hover:bg-transparent 
         
          invisible  md:visible   md:flex
            flex space-x-1   
          items-center  bg-red drop-shadow-md 
         
         ">
              
<a className="text-white    ">  JOIN RAPCULT  </a>
                 <IoMdArrowForward />


               


              
                  
                  
                </li>


*/