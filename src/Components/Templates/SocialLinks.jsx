import React from "react";

const SocialLinks = () => {
  return (
    <div className="px-3 py-3 bg-zinc-100/10 rounded-lg absolute right-0 top-1/2 -translate-y-1/2 flex items-center flex-col gap-2 ">
      <a
        href="/"
        target="_blank"
        className="text-4xl hover:-translate-y-1 duration-200 hover:text-transparent hover:bg-[linear-gradient(white_10%,#9333EA_80%)] hover:bg-clip-text"
      >
        <i className="ri-github-fill"></i>
      </a>
      <a
        href="/"
        target="_blank"
        className="text-4xl hover:-translate-y-1 duration-200 hover:text-transparent hover:bg-[linear-gradient(white_10%,#9333EA_80%)] hover:bg-clip-text"
      >
        <i className="ri-facebook-fill"></i>
      </a>
      <a
        href="/"
        target="_blank"
        className="text-4xl hover:-translate-y-1 duration-200 hover:text-transparent hover:bg-[linear-gradient(white_10%,#9333EA_80%)] hover:bg-clip-text"
      >
        <i className="ri-instagram-fill"></i>
      </a>
      <a
        href="/"
        target="_blank"
        className="text-4xl hover:-translate-y-1 duration-200 hover:text-transparent hover:bg-[linear-gradient(white_10%,#9333EA_80%)] hover:bg-clip-text"
      >
        <i className="ri-linkedin-fill"></i>
      </a>
      <a
        href="/"
        target="_blank"
        className="text-4xl hover:-translate-y-1 duration-200 hover:text-transparent hover:bg-[linear-gradient(white_10%,#9333EA_80%)] hover:bg-clip-text"
      >
        <i className="ri-pinterest-fill"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
