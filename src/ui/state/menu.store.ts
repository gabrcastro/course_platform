import create from "zustand";

type Store = {
  collapsed: boolean;
  setCollapsed: (state: boolean) => void;
};

export const useMenuStore = create<Store>((set) => ({
  collapsed: false,
  setCollapsed: (state: boolean) => set(() => ({ collapsed: state })),
}));
