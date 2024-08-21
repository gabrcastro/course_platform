import { IoSearchOutline } from "react-icons/io5";

export function TopBarComponent() {
  return (
    <div className="w-full py-3 flex flex-row items-center justify-between border-b-[.5px] border-b-slate-200 px-10">
      <div className="flex gap-2">
        <input
          className="border-[.5px] border-slate-300 rounded-full px-4 py-2 focus:border-none"
          placeholder="Pesquisar"
        />
        <button className="flex items-center justify-center rounded-full border-[.5px] border-slate-200 hover:opacity-70 p-3">
          <IoSearchOutline className="size-5 text-slate-800" />
        </button>
      </div>

      <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
    </div>
  );
}
