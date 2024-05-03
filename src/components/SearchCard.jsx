import { useRouter } from "next/router";

const SearchCard = ({ searchData }) => {
  const router = useRouter();

  return (
    <div className="flex gap-6 lg:w-max">
      {searchData?.map((data) => {
        // console.log(data.id);
        return (
          <div className="h-full cursor-pointer flex items-center justify-center flex-col" key={data?.id} onClick={()=>{
            router.push(`/animeinfo/${data.id}`)
          }}>
            <div className="lg:h-[36dvh]">
              <img
                src={data.image}
                alt={`Image ${data.id}`}
                className="rounded-xl h-full"
              />
            </div>

            <div className="w-32">{data.title.english}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchCard;
