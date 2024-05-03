import { useEffect, useState } from "react";
import AniSlider from "./AniSlider";
import { META } from "@consumet/extensions";
import Loader2 from "./Loader2";
import AniLayout from "./AniLayout";
import SearchBar from "./SearchBar";

const MainDisplay = () => {
  const [trendloading, setTrendLoading] = useState(true);
  const [popularloading, setPopularLoading] = useState(true);

  const [trendingdata, setTrendingData] = useState([]);
  const [populardata, setPopularData] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const anilist = new META.Anilist();
        const response = await anilist.fetchTrendingAnime();
        const data = response.results.map((result) => result); // Corrected: Accessing 'data' field from response
        // console.log(data);

        setTrendingData(data);
        // console.log(trendingdata);
        if (trendingdata) {
          setTrendLoading(false);
        }
        // return data;
      } catch (err) {
        console.log(err);
        // return []; // Return an empty array in case of error
      }
    }
    fetchTrending();
  }, [trendloading]);

  useEffect(() => {
    async function fetchPopular() {
      try {
        const anilist = new META.Anilist();
        const response = await anilist.fetchPopularAnime();
        const data = response.results.map((result) => result); // Corrected: Accessing 'data' field from response
        // console.log(data);

        setPopularData(data);
        // console.log(populardata);
        if (populardata) {
          setPopularLoading(false);
          // setLoading({"trending":false,"popular":false})
        }
        // return data;
      } catch (err) {
        console.log(err);
        // return []; // Return an empty array in case of error
      }
    }
    fetchPopular();
  }, [popularloading]);

  return (
    <AniLayout>
      <div className="w-[95%] mx-auto flex flex-col py-8 gap-8">
        <SearchBar />


        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="text-[#c7b0ff] text-3xl font-bold">Trending</div>
            {trendloading ? (
              <Loader2 />
            ) : (
              <div className="overflow-x-auto custom-scrollbar p-2 group">
                <AniSlider d={trendingdata} />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[#c7b0ff] text-3xl font-bold">Popular</div>
            {popularloading ? (
              <Loader2 />
            ) : (
              <div className="overflow-x-auto custom-scrollbar p-2 group">
                <AniSlider d={populardata} />
              </div>
            )}
          </div>
        </div>
      </div>
    </AniLayout>
  );
};

export default MainDisplay;
