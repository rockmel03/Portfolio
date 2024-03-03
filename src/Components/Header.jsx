import React from "react";
import Typing from "./Templates/Typing";
import SocialLinks from "./Templates/SocialLinks";

const Header = () => {
  return (
    <header className="relative max-w-screen-xl mx-auto w-full h-screen flex">
      <div className=" p-4 flex-1 flex flex-col justify-center items-start">
        <h3 className="text-3xl font-bold leading-tight">
          Hey, It's <span>me!</span>
        </h3>
        <h1 className="text-[5.5rem] font-black leading-tight">
          Kamal Melkani
        </h1>
        <h2 className="text-5xl font-bold leading-tight">
          I am a{" "}
          <span className=" capitalize text-purple-600 ">
            <Typing data={["frontend developer", "web designer"]} />
          </span>
        </h2>
        <p className="text-lg my-3">
          Passionate frontend developer dedicated to crafting elegant and
          intuitive digital experiences.
        </p>
        <div className="buttons flex gap-2">
          <button className=" text-lg font-semibold border-zinc-50 border-[2px] rounded-md px-4 py-2 outline-none ">
            Explore more
          </button>
          <button className=" text-lg font-semibold border-zinc-50 border-[2px] rounded-md px-4 py-2 outline-none bg-zinc-50 text-black hover:bg-transparent transition-all duration-200 hover:text-zinc-50">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center   ">
        <div
          style={{
            boxShadow: `0 0 8px #9333EA, inset 0 0 8px #9333EA, 
                        0 0 12px #9333EA, inset 0 0 15px #9333EA, 
                        0 0 16px #9333EA, inset 0 0 20px #9333EA, 
                        0 0 20px #9333EA, inset 0 0 25px #9333EA`,

            backgroundPosition: "top",
            backgroundSize: "cover",
            backdropFilter: "grayscale(1)",
          }}
          className="w-[25rem] h-[25rem] rounded-full border-[#fcfcfd] border-[10px]"
        ></div>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
