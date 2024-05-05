import { useRouter } from "next/router";
import { fetch_vid_links } from "./fetch_vid_links";

export async function episodeClick(id, num, router) {
  // const router = useRouter();

//   console.log(id);

  if (id) {
    //   setLoading(true);

    const links = await fetch_vid_links(id);

    const vid = Object.values(links);

    // console.log(vid);
    // console.log(data);

    //   setVideoLink(vid[vid.length - 3]);
    
    localStorage.setItem("videolink", vid[vid.length - 3]);

    localStorage.setItem("current_episode", num);

    //   localStorage.setItem("loading",true);

    router.push(`/episode/${id}`);
  }
}
