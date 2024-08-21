import { AiOutlineHistory } from "react-icons/ai";
import { BsPlayBtnFill } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";

export interface ItemMenu {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export function SideMenuComponent() {
  const items: ItemMenu[] = [
    {
      icon: <CgHomeAlt className="size-5" />,
      title: "Home",
      url: "/",
    },
    {
      icon: <AiOutlineHistory className="size-5" />,
      title: "Vistos Recentemente",
      url: "/recently",
    },
  ];

  return (
    <div className="w-[20%] h-screen flex flex-col py-10 border-r-[.5px] border-r-slate-200">
      <span className="text-slate-900 text-xl font-bold px-5 flex gap-3 items-center justify-center mb-10">
        <BsPlayBtnFill className="size-6" />
        Playlists
      </span>

      {items.map((item) => (
        <a
          href={item.url}
          className="w-full py-5 items-center justify-start hover:bg-slate-100"
        >
          <span className="flex flex-row gap-2 pl-5 text-sm">
            {item.icon}
            {item.title}
          </span>
        </a>
      ))}
    </div>
  );
}
