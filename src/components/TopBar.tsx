const TopBar = () => {
  return (
    <div className="flex flex-row bg-slate-300 h-(--topbar-height) text-center items-center font-bold font-sans text-2xl">
      <div className="flex text-left ml-20 flex-8">Thomas Binu Thomas</div>
      <div className="flex flex-1">Home</div>
      <div className="flex flex-1">Blog</div>
      <div className="flex flex-1">Contact</div>
    </div>
  );
};

export default TopBar;
