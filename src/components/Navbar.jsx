import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center  text-[25px] text-white">
      {/* Left Element */}
      <div className="flex-1 flex justify-start pl-10 items-center ">
        <img src={logo} className="w-12 h-12" />
      </div>
      {/* Mid ELement */}
      <div className=" flex-1  flex justify-center items-center ">
        <ul className="flex justify-between gap-10 ">
          <li>LEGENDS</li>
          <li>BATTLE PASS</li>
          <li>NEWS</li>
        </ul>
      </div>
      {/* RIght ELement */}
      <div className="flex-1  flex  justify-center items-center ">
        <div className="flex shadow-[4px_2px_10px_0px_#a72f1ae7]">
          <div className="bg-black px-3">🔍</div>
          <div className="bg-[#A72F1A] px-7 font-sm ">Free Download</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
