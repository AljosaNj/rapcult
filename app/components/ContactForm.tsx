
export default function ContactForm() {
  return (
 
    <>
<div className="flex items-center justify-center  p-12">

  <div className="mx-auto w-full max-w-[550px] bg-pacgrey rounded-lg  py-2 px-6   ">
 <h4 className="text-center text-grey">Lorem ipsum dolor sit amet, consectetur<br/>
adipiscing elit. Sed id varius purus.   </h4>  

    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-grey"
        >
          FIRST AND NAME
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John"
          className="w-full border border-grey bg-pacgrey py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-grey"
        >
          E_MAIL
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@mail.com"
          className="w-full  border border-grey bg-pacgrey py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-grey"
        >
          PHONE NUMBER
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="+421"
          className="w-full border border-grey bg-pacgrey py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-grey"
        >
          MESSAGE FROM YOU TO RAPCULT
        </label>
        <textarea
         
          name="message"
          id="message"
          placeholder="Write here"
          className="w-full resize-none  border border-grey bg-pacgrey py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red focus:shadow-md"
        ></textarea>
      </div>
      <div className=" flex flex-col   w-full sm:w-auto sm:flex-row " >
    <a href=""
     className="flex items-center justify-center w-max  bg-red text-white  px-4 py-2 text-sm font-bold leading-5 capitalize duration-100 rounded-sm cursor-pointer focus:ring-opacity-50    outline-none    border-text  hover:shadow-lg hover:-translate-y-1   truncate    ">
        SEND MESSAGE
									 <span className="ml-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
            </svg>
        </span>
    </a>

       




      </div>


    </form>
  </div>
</div>



    </>
  );
};





/*
 <button
          className="hover:shadow-form  bg-red py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit


        </button>

*/





    



