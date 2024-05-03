import Loader2 from "@/components/Loader2";
import { fetch_vid_links } from "@/utils/fetch_vid_links";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const aniid = () => {
  const router = useRouter();
  const [videolinks, setVideoLink] = useState([]);
  const id = router.query.aniid;
  const [loading, setLoading] = useState(true);
  // console.log(id);

  // const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      // console.log(id);
      let links;
      if (id) {
        // console.log("here");
        // Assuming fetch_vid_links is an asynchronous function
        links = await fetch_vid_links(id);
      }

      if (links) {
        // console.log(Object.values(links));
        setVideoLink(Object.values(links));
        setLoading(false);
      }
    };

    fetchData(id);
  }, [id]);
  return (
    <div className=" min-h-screen bg-[#1a1a1a] text-[#C7B0FF] px-2 lg:px-0">
      {loading ? (
        <Loader2 />
      ) : (
        <div className="grid lg:grid-flow-col ">
          <div className="h-screen">
            <ReactPlayer
              url={videolinks[videolinks.length-3]}
              controls
              width={"100%"}
              height={"100%"}
            />
          </div>

        </div>
      )}
    </div>
  );
};

export default aniid;
