import { Outlet } from "react-router-dom";
import { SideMenuVideosComponent } from "./components/side_menu_play.component";
import { useMenuPlayStore } from "./state/menu_play.store";

export default function LayoutPlay() {
  const { collapsed } = useMenuPlayStore();

  return (
    <div className="flex flex-row w-screen h-screen">
      {collapsed && (
        <div className="absolute w-screen h-screen overflow-hidden">
          <div className="absolute right-0 w-[80%] h-screen bg-white z-50">
            <SideMenuVideosComponent />
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <SideMenuVideosComponent />
      </div>

      <main className="flex items-center justify-center w-full">
        <Outlet />
      </main>
    </div>
  );
}
