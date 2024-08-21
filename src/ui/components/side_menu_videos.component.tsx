import { GoVideo } from "react-icons/go";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface ItemVideoMenu {
  title: string;
  url: string;
}

export function SideMenuVideosComponent() {
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
    <div className="w-[20%] h-screen flex flex-col py-10 border-r-[.5px] border-r-slate-200">
      <NavLink
        to={"/"}
        className="text-slate-900 text-sm font-bold px-5 flex gap-3 items-center justify-start mb-10 hover:opacity-70"
      >
        <MdArrowBackIos className="size-5" />
        Voltar
      </NavLink>

      {items.map((item) => (
        <a
          href={item.url}
          className="w-full pl-5 py-5 items-center justify-start hover:bg-slate-100 text-sm text-slate-900 flex flex-row gap-2"
        >
          <GoVideo className="size-5" />
          {item.title}
        </a>
      ))}
    </div>
  );
}
