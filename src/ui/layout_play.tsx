import { Outlet } from "react-router-dom";
import { SideMenuVideosComponent } from "./components/side_menu_videos.component";

export default function LayoutPlay() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideMenuVideosComponent />
      <main className="flex items-center justify-center w-[80%]">
        <Outlet />
      </main>
    </div>
  );
}
