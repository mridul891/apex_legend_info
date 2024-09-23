import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="mx-[10rem] ">
      <div className="flex justify-between  item-center ">
        {/* Left Element */}
        <div className="h-10 w-10">
          <img src={logo} />
        </div>
        {/* Mid ELement */}
        <div className="">
          <ul className="flex justify-between gap-10 text-black">
            <li>LEGENDS</li>
            <li>BATTLE PASS</li>
            <li>NEWS</li>
          </ul>
        </div>
        {/* RIght ELement */}
        <div>
          <div className="flex">
            <div>🔍</div>
            <div>Free Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
