import { BarLoader } from "react-spinners";

const Loader2 = () => {
  return (
    <div className="flex items-center">
      <div className="w-fit flex gap-2 items-center justify-center ">
        {/* <ScaleLoader color="#36d7b7" /> */}
        <BarLoader color="#C7B0FF" width={100} height={9} className="rounded"/>

        {/* <div className="text-[#C7B0FF] text-4xl">loading</div> */}
      </div>
    </div>
  );
};

export default Loader2;
