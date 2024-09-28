import Info from "./Info";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Container = () => {
  return (
    <>
      <motion.div
        initial={{ x: 1500 }} // Starts 300px from the bottom
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay:1,
          duration: 0.5,
        }}
        className="w-full z-100 absolute top-[20px] left-[10px] "
      >
        <Navbar />
      </motion.div>
      <div className="w-full overflow-y-hidden">
        <Info />
      </div>
    </>
  );
};

export default Container;
