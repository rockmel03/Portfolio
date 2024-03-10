import React from "react";
import { GithubIcon, LinkedinIcon, PinterestIcon, TwitterIcon } from "./Icons";
const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto w-full h-[12vh] p-3 flex justify-between items-center shadow-[0_1px]">
      <ul className="flex gap-4">
        {["home", "work", "about", "articles"].map((item, i) => (
          <li
            key={i}
            className="text-xl font-semibold capitalize hover:opacity-80 relative  after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-black dark:after:bg-white after:duration-300 hover:after:w-full"
          >
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <h1 className="leading-none font-semibold text-2xl text-center text-white bg-black dark:text-black dark:bg-white h-14 w-14 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 cursor-default">
        KM
      </h1>

      <div className="flex gap-8">
        <GithubIcon className={`w-8 h-auto dark:bg-white dark:rounded-full `} />
        <TwitterIcon className={`w-8 h-auto `} />
        <LinkedinIcon className={`w-8 h-auto `} />
        <PinterestIcon className={`w-8 h-auto `} />
        <input
          type="checkbox"
          value={"dark"}
          name=""
          id=""
          onChange={(e) => {
            document.querySelector("html").classList.toggle("dark");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
