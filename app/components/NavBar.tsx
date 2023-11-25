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
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8"  >

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

         <li className="  pb-3 text-xs text-white py-2 px-4  text-center   md:hover:bg-transparent 
         
          invisible md:visible md:flex
            flex space-x-1   
          items-center  bg-red drop-shadow-md 
         
         ">
              
<a className="text-white    ">  JOIN RAPCULT  </a>
                 <IoMdArrowForward />


               


              
                  
                  
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
 <li className="pb-4 text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  
                 <button className="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md">
            <span className="text-white">  JOIN RAPCULT  </span>
                 <IoMdArrowForward />

          
        </button>
                  
                  
                </li>


*/