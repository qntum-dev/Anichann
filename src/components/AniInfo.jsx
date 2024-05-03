
import { useRouter } from "next/router";
import {  useState } from "react";

const AniInfo = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();

  const handleEpisodeClick = (id) => {
    console.log(id); // this is a string


    if (id) {
      router.push(`/ani/${id}`);
    }
  };

  return (
    <>
      <div className="grid lg:grid-flow-col gap-4 lg:gap-24 p-4 w-[95%] mx-auto text-lg text-[#C7B0FF]">
        <div className=" w-fit h-fit">
          <img
            src={`${data.image}`}
            alt=""
            className="rounded-3xl overflow-hidden  lg:h-[93dvh]"
          />
        </div>

        <div className="">
          <div className="lg:font-bold text-2xl font-extrabold lg:text-4xl">
            {data?.title?.english}
          </div>

          <div className="my-2 text-lg">
            {!expanded && (
              <div className="line-clamp-3 lg:line-clamp-6">
                {data?.description}
              </div>
            )}

            {!expanded && (
              <div
                className="cursor-pointer text-blue-400 font-bold"
                onClick={() => {
                  setExpanded(true);
                }}
              >
                show more
              </div>
            )}

            {expanded && <div className="">{data?.description}</div>}

            {expanded && (
              <div
                className="cursor-pointer text-blue-400 font-bold"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                show less
              </div>
            )}
          </div>

          <div className="">
            <p className="font-bold text-lg">
              Released:{" "}
              <span className="font-normal">
                {data?.startDate?.day}/{data?.startDate?.day}/
                {data?.startDate?.year}, {data?.status}
              </span>
            </p>
          </div>

          <div className="">
            <p className="font-bold text-lg">
              Type: <span className="font-normal">{data?.type}</span>
            </p>

            <div className="">
                <div className="font-bold text-lg mb-2">Episodes</div>
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 overflow-y-auto  lg:h-[44dvh]">
                  {data?.episodes &&
                    data?.episodes?.map((episode) => (
                      <div
                        className="cursor-pointer bg-[#C7B0FF] text-white rounded-lg  w-[90%] h-[60px] lg:w-[90px] lg:h-[8dvh] flex items-center justify-center lg:col-span-2"
                        key={episode.number}
                        onClick={() => {
                          // console.log("clicked ",episode.id);

                          handleEpisodeClick(episode.id);
                        }}
                      >
                        <p className="">{episode?.number}</p>
                      </div>
                    ))}

                    
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AniInfo;
