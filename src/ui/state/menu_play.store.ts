import create from "zustand";

type Store = {
  collapsed: boolean;
  setCollapsed: (state: boolean) => void;
};

export const useMenuPlayStore = create<Store>((set) => ({
  collapsed: false,
  setCollapsed: (state: boolean) => set(() => ({ collapsed: state })),
}));
