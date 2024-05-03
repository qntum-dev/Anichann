// components/Layout.jsx

import React from "react";
import Navbar from "./Navbar";

const AniLayout = ({ children }) => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-[#C7B0FF]">
      <header>
        <Navbar/>
      </header>

      <main>{children}</main>


      {/* <footer></footer> */}
    </div>
  );
};

export default AniLayout;
