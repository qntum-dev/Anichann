import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const AniSlider = ({ d }) => {
  const [data, setData] = useState([]);
  
  const router=useRouter();
  
  
  useEffect(() => {
    const fetchData = async (d) => {
      try {
        
        setData(d);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Return an empty array in case of error
      }
    };
    fetchData(d);
  }, []); // Corrected: Added 'type' to dependency array to trigger effect when type changes

  return (
    <div className="flex gap-6 lg:w-max">
      {data?.map(
        (
          item,
          index // Corrected: Added index parameter for unique key
        ) => (
          <div className="h-fit rounded-xl my-3 flex flex-col items-center cursor-pointer group-hover:opacity-40 hover:!opacity-100 duration-200 " key={item.id} onClick={()=>{
            router.push(`/animeinfo/${item.id}`)
          }}>
            <div className="lg:h-[32dvh]">
              <img
                src={item.image}
                alt={`Image ${index}`} // Corrected: Used index as part of alt text
                className="rounded-xl h-full w-full"
              />
            </div>
            <div className="text-white w-32">
              <p className="text-center line-clamp-1">
                {/* {type === "trending" ? item.title : item.title.english} */}
                {item.title.english}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AniSlider;
