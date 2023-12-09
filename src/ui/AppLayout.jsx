import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid h-screen w-full grid-cols-[18%_auto] text-slate-50  2xl:grid-cols-[13vw_auto]">
      <div></div>
      <Sidebar />
      <main className="overflow-scroll px-16 py-3 pr-28 pt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
