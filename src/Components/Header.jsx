import React from "react";
import Typing from "./Templates/Typing";
import SocialLinks from "./Templates/SocialLinks";

const Header = () => {
  return (
    <header className="relative max-w-screen-xl mx-auto w-full h-[calc(100vh-12vh)] flex  border-b-[1px] border-b-zinc-700">
      <div className=" p-4 flex-1 flex flex-col justify-center items-start">
        <h3 className="text-3xl font-bold leading-tight">
          Hey, It's <span>me!</span>
        </h3>
        <h1 className="text-[5.5rem] font-gil  whitespace-nowrap font-black leading-tight">
          Kamal Melkani
        </h1>
        <h2 className="text-5xl font-bold leading-tight">
          I am a{" "}
          <span className=" capitalize text-yellow   ">
            <Typing data={["frontend developer", "web designer"]} />
          </span>
        </h2>
        <p className="text-lg my-3">
          {/* Passionate frontend developer dedicated to crafting elegant and
          intuitive digital experiences. */}
          Passionate frontend developer crafting immersive digital experiences
          with HTML, CSS, JavaScript, and React.js. Expertise in bringing
          creativity and precision to every project. Let's build something
          incredible together.
        </p>
        <div className="buttons flex items-center gap-5">
          <button className=" text-xl font-bold bg-black  border-black text-zinc-50 dark:bg-white dark:border-white dark:text-black border-[2px] rounded-lg px-8 py-2 outline-none flex gap-3 items-center justify-center ">
            Resume <i className="ri-external-link-fill"></i>
          </button>
          <a
            href="/"
            className=" text-lg font-semibold relative  after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-black dark:after:bg-white after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center   ">
        <div className="w-full h-full overflow-hidden ">
          <img
            src="/dpAi.png"
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        {/* <SocialLinks /> */}
      </div>
    </header>
  );
};

export default Header;
