import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid h-screen w-full grid-cols-[18%_auto]  text-slate-50">
      <div></div>
      <Sidebar />
      <main className="overflow-scroll px-16 py-3 pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
