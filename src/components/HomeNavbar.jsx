
const HomeNavbar = () => {
  return (
    <>
      <div className="w-full bg-black min-h-[50px] flex">
        <div className="text-[#c7b0ff] font-bold text-3xl w-[95%] mx-auto flex justify-between items-center">
          <div className="cursor-pointer">
            <h1>Flix</h1>
          </div>
          <div className="cursor-pointer">
            <RxHamburgerMenu/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
