import { useRouter } from "next/router";
import HomeNavbar from "./HomeNavbar";

const Display = () => {
  // const [selection,setSelection]=useState("");
  const router = useRouter();
  const handleSelectClick = (selection) => {
    // setSelection(selection);
    switch (selection) {
      case "MovieFlix":
        console.log("Clicked MovieFlix");
        router.push("/movieflix");

        break;

      case "AniChann":
        console.log("Clicked AniChann");
        router.push("/anichann");
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="bg-[#1a1a1a] min-h-screen text-[#C7B0FF">
        <HomeNavbar />

        {/* <div className="grid">

        
        </div> */}

        <div className="flex flex-col items-center justify-center border-4 border-green-200 gap-6 ">
          <div
            className="cursor-pointer text-[#C7B0FF] text-4xl flex justify-center items-center bg-black w-[20dvw] h-[20dvh] rounded-2xl"
            onClick={() => {
              handleSelectClick("MovieFlix");
            }}
          >
            MovieFlix
          </div>
          <div
            className="cursor-pointer text-[#C7B0FF] text-4xl flex justify-center items-center bg-black w-[20dvw] h-[20dvh] rounded-2xl"
            onClick={() => {
              handleSelectClick("AniChann");
            }}
          >
            AniChann
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
