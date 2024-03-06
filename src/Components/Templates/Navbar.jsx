import React from "react";
import pinterest from "../../assets/svg/pinterest.svg";
import github from "../../assets/svg/github.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";
const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto w-full min-h-[10vh] p-3 flex justify-between items-center fixed z-[99] top-0 left-1/2 -translate-x-1/2">
      <ul className="flex gap-4">
        {["home", "work", "about", "articles"].map((item, i) => (
          <li
            key={i}
            className="text-xl font-medium capitalize hover:opacity-80 relative  after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-zinc-50 after:duration-300 hover:after:w-full"
          >
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <h1 className="leading-none font-black text-2xl text-black text-center bg-white h-14 w-14 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 cursor-default">
        {/* Rock- <br /> Mel03 */}
        KM
      </h1>

      <div className="flex gap-8">
        {[twitter, github, linkedin, pinterest].map((item, index) => (
          <a href="/">
            <img
              key={index}
              src={item}
              alt=""
              className="w-8 h-8 object-contain"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
