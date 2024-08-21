import { Outlet } from "react-router-dom";
import { SideMenuComponent } from "./components/side_menu.component";
import { useMenuStore } from "./state/menu.store";

export default function Layout() {
  const { collapsed } = useMenuStore();

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className={"hidden md:block"}>
        <SideMenuComponent />
      </div>
      {collapsed && (
        <div className="absolute w-screen h-screen overflow-hidden">
          <div className="absolute right-0 w-[80%] h-screen bg-white">
            <SideMenuComponent />
          </div>
        </div>
      )}
      <main className="w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
