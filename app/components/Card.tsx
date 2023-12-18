import { SlSocialYoutube, SlSocialSpotify,SlSocialSoundcloud } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

export default function Card() {
    const posts = [
        {
            title: "PR MEDIA",
            icon: <SlSocialYoutube size={"3.5rem"} />,
           
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "SPOTIFY STREAMS",
           icon: <SlSocialSpotify size={"3.5rem"}  />,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "SOCIAL MEDIA GROWTH",
           icon: <SlSocialSoundcloud size={"3.5rem"} />,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "COMMUNITY",
           icon: <SlSocialSpotify size={"3.5rem"}  />,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
          {
            title: "MENTORSHIPS",
            icon: <SlSocialYoutube size={"3.5rem"} />,
           
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
          {
            title: "LOREM IPSUM",
            icon: <SlSocialYoutube size={"3.5rem"} />,
           
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2      bg-pacgrey  ">
                 
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg  lg:max-w-sm" key={key}>
                     <br/>
                    
                      
                        <div className="p-4">
 <span className='object-cover w-100 h-100 mb-2 text-red'>{items.icon}</span>

                            <h4 className="text-xl font-semibold text-red   ">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal text-grey">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 pb-1 text-sm text-red rounded shadow flex space-x-1   ">
                                Read more <br/> <IoIosArrowDown size={"1.3rem"}  />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}