import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-[25px] text-white px-10">
      {/* Left Element */}
      <div className="flex-1 flex justify-start  items-center ">
        <img src={logo} className="w-12 h-12" />
      </div>
      {/* Mid ELement */}
      <div className=" flex-1  flex justify-center items-center ">
        <ul className="flex justify-around gap-10 ">
          <li>LEGENDS</li>
          <li>BATTLE PASS</li>
          <li>NEWS</li>
        </ul>
      </div>
      {/* RIght ELement */}
      <div className="flex-1  flex  justify-center items-center rounded">
        <div className="flex shadow-[4px_2px_10px_0px_#0492c2] rounded-lg">
          <span className="bg-black px-3 ">🔍</span>
          <span className="bg-[#0492c2] px-7 font-sm ">Free Download</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
