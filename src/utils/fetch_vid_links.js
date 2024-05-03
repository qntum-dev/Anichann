export async function fetch_vid_links(id) {
	try {
		const res = await fetch(
			`https://consumet-jade.vercel.app/anime/gogoanime/watch/${id}`,
			// { cache: "force-cache" }
		);
		const data = await res.json();
		let vid={


		}
		data.sources?.map((source)=>{
			vid[source.quality]=source.url;
		})
		// console.log(vid);
		let vidLink = data.sources[data.sources.length - 2].url;
		return vid;
	} catch (error) {
		console.log("Mehh Error", error);
	}
}