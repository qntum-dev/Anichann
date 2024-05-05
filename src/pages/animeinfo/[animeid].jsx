import AniInfo from "@/components/AniInfo";
import Loader from "@/components/Loader";
import { META } from "@consumet/extensions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const animeid = () => {
  const router = useRouter();
  const [ani, setAni] = useState({});
  const [loading, setLoading] = useState(false);
  const id = router.query.animeid;
  // console.log(id);
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const anilist = new META.Anilist();
        await anilist.fetchAnimeInfo(id).then((data) => {
          if(data !== undefined){

            setAni(data);
            setLoading(false);
            return data;
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnime();
  }, [id]);

  // console.log(ani);

  return (
    <>
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
    {loading ? (
        <Loader />
      ) : (
        // <div className="">{ani?.title?.english}</div>
        <AniInfo data={ani} />
      )}
        {/* <Loader /> */}
      
      </div>
      
    </>
  );
};

export default animeid;
