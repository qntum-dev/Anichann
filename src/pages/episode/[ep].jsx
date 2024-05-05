import Loader from "@/components/Loader";
import Loader2 from "@/components/Loader2";
import { episodeClick } from "@/utils/episodeClick";
import { findEpisodeIdByNumber, handleEpisodeChange } from "@/utils/findEpId";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const ep = () => {
  const [loading, setLoading] = useState(true);
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [videolink, setVideoLink] = useState("");
  const [data, setData] = useState();
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [maxep, setMaxEp] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // setLoading(localStorage.getItem("loading"))
    // console.log(ep_id);
    // console.log(localStorage.getItem("videolink"));
    const savedData = localStorage.getItem("ani");
    if (savedData) {
      setData(JSON.parse(savedData));
      setEpisodes(JSON.parse(savedData).episodes);
      setLoading(false);
      setVideoLink(localStorage.getItem("videolink"));
      setCurrentEpisode(parseInt(localStorage.getItem("current_episode")));
      setMaxEp(parseInt(localStorage.getItem("max_ep")));
    }
    return () => {
      setVideoLink("");
      setLoading(true);
    };
  }, [router.query.ep, videolink]);

  useEffect(() => {
    const handlePopState = () => {
      // Redirect to a specific page
      //   console.log(data);
      router.replace(`/animeinfo/${localStorage.getItem("ani_id")}`);
    };

    // Subscribe to the popstate event
    window.addEventListener("popstate", handlePopState);

    // Unsubscribe from the popstate event when component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlayer(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [router.query.ep]);
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#C7B0FF] px-2 lg:px-0">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="text-3xl flex flex-col lg:flex-row gap-4 lg:gap-12">
            <div className="">
              <p className="">
                <span className="font-bold">Anime: </span>
                {data?.title}
              </p>
            </div>
            <div className="">
              <p className="">
                Episode <span>{localStorage.getItem("current_episode")}</span>
              </p>
            </div>
          </div>

          <div className="lg:h-[70dvh]">
            <div className="lg:w-[100%] h-[100%] ">
              {showPlayer && videolink ? (
                <div className="lg:h-[70dvh] border-4 border-[#C7B0FF] border-opacity-70">
                  <ReactPlayer
                    url={videolink}
                    controls
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              ) : (
                <div className="w-full h-full text-4xl flex flex-col items-center justify-center border-4 border-[#C7B0FF] border-opacity-15">
                  <div className="">loading video...</div>
                  <Loader2 />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:w-max h-fit">
            <button
              className={`${
                currentEpisode <= 1
                  ? "bg-[#151515] cursor-not-allowed opacity-15"
                  : "bg-[#2a2a2a] hover:bg-[#ad8ff9]  hover:text-white text-[#C7B0FF] p-4 rounded-xl text-center h-fit"
              } `}
              disabled={currentEpisode <= 1}
              onClick={() => {
                setShowPlayer(false);
                setLoading(true);
                const id = findEpisodeIdByNumber(episodes, currentEpisode - 1);
                episodeClick(id, currentEpisode - 1, router);
              }}
            >
              Previous Episode
            </button>

            <button
              className={`${
                currentEpisode >= maxep
                  ? "bg-[#151515] cursor-not-allowed opacity-15"
                  : "bg-[#2a2a2a] hover:bg-[#ad8ff9]  hover:text-white text-[#C7B0FF] p-4 rounded-xl text-center h-fit"
              } `}
              disabled={currentEpisode >= maxep}
              onClick={() => {
                setShowPlayer(false);

                setLoading(true);

                // console.log(parseInt(localStorage.getItem("current_episode")));
                const id = findEpisodeIdByNumber(
                  episodes,
                  parseInt(localStorage.getItem("current_episode")) + 1
                );
                episodeClick(
                  id,
                  parseInt(localStorage.getItem("current_episode")) + 1,
                  router
                );
              }}
            >
              Next Episode
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-xl">Go to a Episode</div>
              <div className="flex items-center gap-4">
                <div className="text-black placeholder:text-gray-600 text-xl">
                  <input
                    type="number"
                    className=""
                    placeholder={`Total ${localStorage.getItem(
                      "max_ep"
                    )} episodes`}
                    onChange={(evt) => {
                        
                      setEpisodeNumber(evt.target.value);
                    }}
                    onKeyDown={(evt) => {
                        if(evt.target.value<1 || evt.target.value>maxep ){
                            return
                        }
                      if (evt.key == "Enter") {
                        setShowPlayer(false);

                        setLoading(true);

                        

                        // console.log(episodes);
                        const id = findEpisodeIdByNumber(
                          episodes,
                          episodeNumber
                        );
                        episodeClick(id, episodeNumber, router);
                      }
                    }}
                    max={parseInt(localStorage.getItem("max_ep"))}
                  />
                </div>

                <div
                  className="text-xl bg-[#353535] hover:bg-[#ad8ff9] cursor-pointer  hover:text-white rounded-xl p-2"
                  onClick={() => {
                    setShowPlayer(false);

                    setLoading(true);

                    console.log(episodes);
                    const id = findEpisodeIdByNumber(episodes, episodeNumber);
                    episodeClick(id, episodeNumber, router);
                  }}
                >
                  Go
                </div>
              </div>
            </div>
            {episodes && (
              <div className="grid grid-cols-3 gap-4 h-[28dvh] overflow-y-auto w-fit">
                {episodes?.map((episode) => (
                  <div
                    className="bg-[#353535] hover:bg-[#ad8ff9] cursor-pointer  hover:text-white p-6 rounded-xl"
                    key={episode.id}
                    onClick={(evt) => {
                      setShowPlayer(false);
                      setLoading(true);
                      episodeClick(episode.id, episode.number, router);
                    }}
                  >
                    {episode.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ep;
