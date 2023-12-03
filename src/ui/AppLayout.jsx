import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid h-screen w-full grid-cols-1 text-slate-50 sm:grid-cols-[18%_auto]  2xl:grid-cols-[13vw_auto]">
      <div className="hidden sm:block"></div>
      <Sidebar />
      <main className="overflow-scroll px-0 py-3 pt-6 sm:px-16 sm:pr-28">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
