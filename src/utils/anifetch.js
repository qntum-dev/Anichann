const { META } = require("@consumet/extensions")

export const Anifetch=async (id)=>{
    const anilist=new META.Anilist();
    await anilist.fetchAnimeInfo(id).then(data => {
        // console.log(data);
        return data;
      })
}