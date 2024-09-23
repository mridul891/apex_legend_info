import Info from "./Info";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <div className="bg-white  h-[90vh] m-10 relative border-2 border-lime-400">
      <div className="absolute top-0 left-0">
        <Navbar />
      </div>
      <div className="border-2 border-black h-full">
        <Info />
      </div>
    </div>
  );
};

export default Container;
