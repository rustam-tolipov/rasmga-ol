import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="h-screen bg-[#121212] text-slate-50 grid grid-cols-[18%_auto]">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
