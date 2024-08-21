import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { useMenuStore } from "../state/menu.store";

export function TopBarComponent() {
  const { setCollapsed } = useMenuStore();

  return (
    <div className="w-full py-3 flex flex-row items-center justify-between border-b-[.5px] border-b-slate-200 px-10">
      <div className="flex gap-2">
        <input
          className="border-[.5px] border-slate-300 rounded-full px-4 py-2 focus:border-none w-1/2 md:w-full"
          placeholder="Pesquisar"
        />
        <button className="flex items-center justify-center rounded-full border-[.5px] border-slate-200 hover:opacity-70 p-3">
          <IoSearchOutline className="size-5 text-slate-800" />
        </button>
      </div>

      <div className="flex gap-3">
        <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        <button onClick={() => setCollapsed(true)} className="block md:hidden">
          <HiMenuAlt3 className="size-10" />
        </button>
      </div>
    </div>
  );
}
