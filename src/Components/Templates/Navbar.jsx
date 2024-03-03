import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto w-full min-h-[10vh] p-3 flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2">
      <h1 className="leading-none font-black text-xl">
        Rock- <br /> Mel03
      </h1>

      <ul className="flex gap-4">
        <li className="text-lg font-medium hover:opacity-80">
          <a href="/">Home</a>
        </li>
        <li className="text-lg font-medium hover:opacity-80">
          <a href="/">Work</a>
        </li>
        <li className="text-lg font-medium hover:opacity-80">
          <a href="/">About</a>
        </li>
        <li className="text-lg font-medium hover:opacity-80">
          <a href="/">
            <i className="ri-heart-line"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
