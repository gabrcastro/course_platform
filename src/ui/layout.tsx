import { Outlet } from "react-router-dom";
import { SideMenuComponent } from "./components/side_menu.component";

export default function Layout() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideMenuComponent />
      <main className="w-[80%]">
        <Outlet />
      </main>
    </div>
  );
}
