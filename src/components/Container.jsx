import Info from "./Info";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <>
      <div className="w-full z-100 absolute top-[20px] left-[10px] ">
        <Navbar />
      </div>
      <div className="w-full overflow-y-hidden">
        <Info />
      </div>
    </>
  );
};

export default Container;
