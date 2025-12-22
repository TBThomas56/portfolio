import logo from "../assets/logo.jpg";
import { PiReadCvLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="flex flex-row fixed top-0 left-0 w-full z-50 bg-base-300 h-(--topbar-height) text-center items-center font-sans text-xl">
      <div className="flex text-left flex-3 gap-1.5 items-center font-bold text-3xl ml-20">
        <img src={logo} className="h-10 w-10 object-cover rounded" />
        <div>Thomas Binu Thomas</div>
      </div>
      <div className="flex flex-1 items-center gap-6 text-center">
        <a
          href="https://github.com/TBThomas56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/thomasbinuthomas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxLine />
        </a>
        <a
          href="/portfolio/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiReadCvLogo />
        </a>
        <div>Home</div>
        <div>Blog</div>
      </div>
    </div>
  );
};

export default TopBar;
