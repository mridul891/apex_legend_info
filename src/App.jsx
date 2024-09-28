import "./App.css";

import Container from "./components/Container";
import Red from "./components/Red";
import { motion } from "framer-motion";
function App() {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center relative">
      <div className="absolute h-[100vh] w-[calc((90%/3)-40px)] bg-[#0492c2]">
        <Red />
      </div>
      <motion.div
        initial={{ y: 600 }} // Starts 300px from the bottom
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5,
        }}
        className="flex w-[90vw] h-[95vh] bg-[#fbfcf8] relative z-100 ps-[60px] pe-[60px]   "
      >
        <Container />
      </motion.div>
    </main>
  );
}

export default App;
