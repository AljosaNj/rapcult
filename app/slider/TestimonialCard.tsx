
import { GoArrowUpRight }  from "react-icons/go";


type Props = {
  title: string;
  text: string;
  imgSrc: string;
  content: string;
  content1: string;
  content2: string;
  par: string;
   par1: string;
    par2: string;
};

const TestimonialCard = (props: Props) => {
  return (
  <div >



<div className="flex flex-col justify-center h-screen">
	<div
		className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-pacgrey">
		<div className="w-full md:w-1/3 bg-pacgrey   grid place-items-center">
			<img   src={props.imgSrc}  alt="tailwind logo"  />
    </div>
			<div className="w-full md:w-2/3 bg-pacgrey flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
				
				</div>
				<h3 className="font-black text-red md:text-xl text-xl">{props.title}</h3>
				<p className="md:text-base text-white text-base">{props.text}</p>
			<br/>
       <hr className="flex-grow  "/> 
    


<div className="flex justify-between item-center ">
					<div className="flex items-center">
					
						<p className="text-grey font-bold text-sm ml-1">
							{props.content}
							
						</p>
          <GoArrowUpRight  className="text-red"/>

					</div>




					<div className="flex items-center">
					
						<p className="text-grey font-bold text-sm ml-1">
							{props.content1}
							
						</p>
          <GoArrowUpRight  className="text-red" />

					</div>
					
					<div className="flex items-center  px-5 py-1 ">
					
						<p className="text-grey font-bold text-sm ml-1   ">
							{props.content2}
							
						</p>
          <GoArrowUpRight  className="text-red" />

					</div>
				</div>

 









<div className="flex justify-between item-center pb-2">
  <div className="px-3 py-1  ">
    <p className="text-grey text-sm  font-medium ">{props.par}</p>
  </div>
					
					<div className="flex items-center">
						

						<p className="text-grey font-medium text-sm ml-1">
						{props.par1}
							
						</p>
					</div>
					
					<div className="px-3 py-1   text-sm font-medium text-grey ">
						{props.par2}</div>
				</div>





    






			</div>
		</div>
	</div>

</div>


    

  );
};
export default TestimonialCard;