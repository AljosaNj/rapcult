import { GoArrowUpRight }  from "react-icons/go";



export default function SliderCard() {
  return (
   
<div>



<div className="flex flex-col justify-center h-screen">
	<div
		className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-pacgrey">
		<div className="w-full md:w-1/3 bg-pacgrey   grid place-items-center">
			<img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo"  />
    </div>
			<div className="w-full md:w-2/3 bg-pacgrey flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
				
				</div>
				<h3 className="font-black text-red md:text-xl text-xl">FUCKING AMAZING!</h3>
				<p className="md:text-base text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
elit. Pellentesque nec nunc sit amet nibh vulputate<br/>
hendrerit. Curabitur placerat augue eu ligula<br/>
volutpat, eu consectetur est sollicitudin.</p>
			<br/>
       <hr className="flex-grow  "/> 
    


<div className="flex justify-between item-center ">
					<div className="flex items-center">
					
						<p className="text-grey font-bold text-sm ml-1">
							+200,000
							
						</p>
          <GoArrowUpRight  className="text-red"/>

					</div>




					<div className="flex items-center">
					
						<p className="text-grey font-bold text-sm ml-1">
							+$35,000
							
						</p>
          <GoArrowUpRight  className="text-red" />

					</div>
					
					<div className="flex items-center  px-5 py-1 ">
					
						<p className="text-grey font-bold text-sm ml-1   ">
							+150
							
						</p>
          <GoArrowUpRight  className="text-red" />

					</div>
				</div>

 









<div className="flex justify-between item-center pb-2">
  <div className="px-3 py-1  ">
    <p className="text-grey text-sm  font-medium ">STREAMS</p>
  </div>
					
					<div className="flex items-center">
						

						<p className="text-grey font-medium text-sm ml-1">
							REVENUE
							
						</p>
					</div>
					
					<div className="px-3 py-1   text-sm font-medium text-grey ">
						COLLABS</div>
				</div>





    






			</div>
		</div>
	</div>



</div>
    
  
 
   
    
  )
}
