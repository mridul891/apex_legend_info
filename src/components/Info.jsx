import Energy from "./Energy";
import p1 from "../assets/5.png";
import p5 from "../assets/4.png";
import p3 from "../assets/3.png";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="flex h-full ">
      {/* first column */}
      <motion.div
        initial={{ x: -500 }} // Starts 300px from the bottom
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 1.5,
          duration: 0.5,
        }}
        className="w-[calc(100%/3)] h-full flex-1 flex items-center"
      >
        <div className="flex gap-10 flex-col">
          <div>
            <h3 className="text-4xl">JETT</h3>
            <p className="text-[#0492c2] font-sm">Seoul, South Korea</p>
          </div>
          <div className="flex">
            <div className="bg-black">
              <img src={p3} className="h-[3rem] m-3 p-1" />
            </div>
            <div className="px-3 bg-white">
              <Energy title={"Class"} h3={"Duelist"} />
            </div>
          </div>
        </div>
      </motion.div>
      {/* second column */}
      <div className="w-[calc(100%/3)] h-full  bg-[#0492c2] ">
        <div className="relative ">
          <div className=" ">
            <img
              src={p1}
              className="mt-[1.5rem] ml-10 scale-[100px] opacity-10 object-cover"
            />
          </div>
          <motion.div
            initial={{ y: 0 }} // Starts 300px from the bottom
            animate={{ y: -500, x: -40, scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 2,
              duration: 0.5,
            }} // Controls speed and effect
            className="absolute  "
          >
            <img src={p5} alt="" />
          </motion.div>
        </div>
      </div>

      {/* THird Columns */}
      <motion.div
        initial={{ x: 500 }} // Starts 300px from the bottom
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 1.5,
          duration: 0.5,
        }}
        className="w-[calc(100%/3)] h-full flex-1 flex  justify-center items-center"
      >
        <div className="px-5 flex flex-col gap-5 justify-center mt-[5rem]">
          <p className="text-[14px] font-semibold   font-sans	">
            Jett is a fair-skinned, young woman, and one of the shortest of the
            Protocol agents. She has white hair, which she ties in a bun on the
            back. Her bangs are rather long and remain stably locked. Her eyes
            are a shade of blue, and she looks like she wears eyeliner.
            Jett&apos;s armor has multiple symbols associated with wind such as
            the swirl on her right shoulder pad. Her blue, sleeveless jacket
            features a stylized depiction of the Tailwind logo through some
            clouds. The icons on the backs of her gloves is the same icon on the
            lip of her hoodie and bottom edge of her crop top. A sash and two
            kunai can be seen along her right hip belt.
          </p>
          <div className="flex flex-col gap-3">
            <Energy title={"Basic"} h3={"Cloudburst | updraft"} />
            <Energy title={"Passive"} h3={"Drift "} />
            <div className="flex  gap-10">
              <Energy title={"Signature"} h3={"Tailwind"} />
              <Energy title={"Ultimate"} h3={"Blade Storm"} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
