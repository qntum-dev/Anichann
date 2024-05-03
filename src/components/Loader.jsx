import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-fit flex gap-2 items-center justify-center">
        {/* <ScaleLoader color="#36d7b7" /> */}
        <div className="">
          <RingLoader color="#C7B0FF" size={90} />
        </div>

        <div className="text-[#C7B0FF] text-4xl">loading</div>
      </div>
    </div>
  );
};

export default Loader;
