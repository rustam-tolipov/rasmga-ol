import React from "react";

const Sidebar = () => {
  return (
    <aside className="border-r-[1px] border-slate-300 grid grid-rows-[10%_auto_15%] py-3 pt-12 px-4">
      <div className="">
        <img src="images/logo.svg" alt="Profile" className="h-[2rem]" />
      </div>
      <nav className="">
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>

      <div className="bg-gray-900">Footer</div>
    </aside>
  );
};

export default Sidebar;
