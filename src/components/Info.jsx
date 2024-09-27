import Energy from "./Energy";

const Info = () => {
  return (
    <div className="flex h-full   ">
      <div className="w-[calc(100%/3)] h-full flex-1 flex justify-center items-center">
        Column 1
      </div>
      <div className="w-[calc(100%/3)] h-full flex-1 flex justify-center items-center bg-[#A72F1A]">
        Column 2
      </div>
      <div className="w-[calc(100%/3)] h-full flex-1 flex  justify-center items-center">
        <div className="px-5 flex flex-col gap-5 justify-center mt-[5rem]">
          <p className="text-[14px] font-semibold   font-sans	">
            Bold, brash, fiery and fierce, Kairi Imahara isn’t above greasing
            palms and bending the law. When she was a child, she stole a Titan.
            It belonged to her dad: callsign Viper. She wanted to be just like
            him when she grew up. But the next day he left on a mission and
            never returned. In some ways, she still followed in his footsteps:
            it wasn't a Titan, but her ship offered a decent living. Her
            personal life, however, was anything but. During the day, she
            smuggled precious cargo, and at night, went shot for shot with the
            outlaws and mercs in the bars. But even though she had her ladies,
            her liquor, and her love of the sky, she was still obsessed with
            finding the man who’d put her father in harm’s way: his commander,
            Kuben Blisk.
          </p>
          <div className="flex flex-col gap-3">
            <Energy title={"Tactical Ability"} h3={"Missile Swarm"} />
            <Energy title={"Passive Ability"} h3={"VTOL Jets"} />
            <Energy title={"Ultimate Ability"} h3={"Skyward Dive"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
