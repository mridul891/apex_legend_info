import Info from "./Info";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <>
      <div className="w-full absolute top-[30px] left-0 ">
        <Navbar />
      </div>
      <div className="w-full ">
        <Info />
      </div>
    </>
  );
};

export default Container;
