import { AiOutlineHistory } from "react-icons/ai";
import { BsPlayBtnFill } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { routes, routesTitles } from "../../utils/constants";
import { GrClose } from "react-icons/gr";
import { useMenuStore } from "../state/menu.store";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export interface ItemMenu {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export function SideMenuComponent() {
  const { setCollapsed } = useMenuStore();
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);

  const items: ItemMenu[] = [
    {
      icon: <CgHomeAlt className="size-5" />,
      title: routesTitles.HOME,
      url: routes.HOME,
    },
    {
      icon: <AiOutlineHistory className="size-5" />,
      title: routesTitles.HISTORY,
      url: routes.HISTORY,
    },
  ];

  return (
    <div className="relative w-full min-w-[200px] h-screen flex flex-col py-10 border-r-[.5px] border-r-slate-200">
      <button
        onClick={() => setCollapsed(false)}
        className="block md:hidden absolute top-0 right-0 pt-6 pr-5"
      >
        <GrClose className="size-5" />
      </button>

      <span className="text-blue-700 text-xl font-bold px-5 flex gap-3 items-center justify-center mb-10 -mt-5">
        <BsPlayBtnFill className="size-6" />
        Playlists
      </span>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="flex">
            <a
              href={item.url}
              className={clsx(
                currentPath === item.url &&
                  currentPath == item.url &&
                  "bg-slate-100",
                "w-full py-5 flex flex-row gap-2 pl-5 text-sm items-center justify-center md:justify-start hover:bg-slate-100 pr-5"
              )}
            >
              {item.icon}
              {item.title}
            </a>

            <div
              className={clsx(
                currentPath === item.url && currentPath == item.url
                  ? "block"
                  : "hidden",
                "w-1 h-[98%] bg-blue-700"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
