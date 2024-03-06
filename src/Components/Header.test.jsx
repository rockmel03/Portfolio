import React from "react";
import Typing from "./Templates/Typing";
import SocialLinks from "./Templates/SocialLinks";

const Header = () => {
  return (
    <header className="relative max-w-screen-xl mx-auto w-full h-screen flex">
      <div className="flex-1 flex items-center justify-center   ">
        <div
          style={{
            boxShadow: `0 0 8px #dadada, inset 0 0 8px #dadada,
                        0 0 12px #dadada, inset 0 0 15px #dadada,
                        0 0 16px #dadada, inset 0 0 20px #dadada,
                        0 0 20px #dadada, inset 0 0 25px #dadada`,
            border: "10px solid #fcfcfd",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backdropFilter: "grayscale(1)",
          }}
          className="w-[30rem] h-[30rem] rounded-full overflow-hidden"
        >
          <img
            src="/my-photo.png"
            alt=""
            className="w-full h-full object-contain scale-x-[-1] grayscale-[80%]"
          />
        </div>
        {/* <SocialLinks /> */}
      </div>
      <div className=" p-4 flex-1 flex flex-col justify-center items-start">
        <h1 className=" text-[4rem] font-bold capitalize leading-none">
          Turning vision Into <br /> Reality With Code <br /> And Design
        </h1>
        <p className="text-lg my-10">
          Passionate frontend developer crafting immersive digital experiences
          with HTML, CSS, JavaScript, and React.js. Expertise in bringing
          creativity and precision to every project. Let's build something
          incredible together.
        </p>
        <div className="buttons flex items-center gap-5">
          <button className=" text-xl font-bold  text-black bg-zinc-50  border-zinc-50 border-[2px] rounded-lg px-8 py-2 outline-none flex gap-3 items-center justify-center ">
            Resume <i className="ri-external-link-fill"></i>
          </button>
          <a
            href="/"
            className=" text-lg font-semibold relative  after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-zinc-50 after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
