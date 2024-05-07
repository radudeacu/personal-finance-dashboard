import { create } from "zustand";

export const useStore = create((set) => ({
  theme: localStorage.getItem("theme") ?? "light",

  setTheme: (value) => set({ theme: value }),
}));
