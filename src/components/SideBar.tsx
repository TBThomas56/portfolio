import type { ReactElement } from "react";

const SideBar = () => {
  return (
    <div className="fixed top-(--topbar-height) left-0 h-screen w-30 flex flex-col bg-slate-900 text-white items-center gap-6 shadow-xl">
      <div className="mt-6 font-sans">GitHub</div>
      <div className="font-mono">LinkedIn</div>
      <div>CV</div>
    </div>
  );
};

interface SideBarButtonProps {
    name: string
    icon: ReactElement 
}


export default SideBar;
