import { GoVideo } from "react-icons/go";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../utils/constants";
import { GrClose } from "react-icons/gr";
import { useMenuPlayStore } from "../state/menu_play.store";
import clsx from "clsx";

interface ItemVideoMenu {
  title: string;
  url: string;
}

export function SideMenuVideosComponent() {
  const { setCollapsed } = useMenuPlayStore();
  const location = useLocation();
  const currentPath = location.pathname;

  const items: ItemVideoMenu[] = [
    {
      title: "01",
      url: "/01",
    },
    {
      title: "02",
      url: "/02",
    },
    {
      title: "03",
      url: "/03",
    },
    {
      title: "04",
      url: "/04",
    },
    {
      title: "05",
      url: "/05",
    },
    {
      title: "06",
      url: "/06",
    },
  ];

  return (
    <div className="relative w-full min-w-[200px]  h-screen flex flex-col py-10 border-r-[.5px] border-r-slate-200">
      <button
        onClick={() => setCollapsed(false)}
        className="block md:hidden absolute top-0 right-0 pt-6 pr-5"
      >
        <GrClose className="size-5" />
      </button>

      <NavLink
        to={routes.HOME}
        onClick={() => setCollapsed(false)}
        className="text-slate-900 text-sm font-bold px-5 flex gap-3 items-center justify-start mb-10 hover:opacity-70"
      >
        <MdArrowBackIos className="size-5" />
        Voltar
      </NavLink>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="flex">
            <NavLink
              to={`${routes.PLAYLIST}${item.url}`}
              className={clsx(
                currentPath === `${routes.PLAYLIST}${item.url}` &&
                  currentPath == `${routes.PLAYLIST}${item.url}` &&
                  "bg-slate-100",
                "w-full pl-5 py-5 items-center justify-start hover:bg-slate-100 text-sm text-slate-900 flex flex-row gap-2"
              )}
            >
              <GoVideo className="size-5" />
              {item.title}
            </NavLink>

            <div
              className={clsx(
                currentPath === `${routes.PLAYLIST}${item.url}` &&
                  currentPath == `${routes.PLAYLIST}${item.url}`
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
