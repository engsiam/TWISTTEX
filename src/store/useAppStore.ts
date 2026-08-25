import { create } from "zustand";

interface AppState {
  mobileNavOpen: boolean;
  activeSection: string;
  setMobileNavOpen: (open: boolean) => void;
  toggleMobileNav: () => void;
  setActiveSection: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  mobileNavOpen: false,
  activeSection: "",
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
  setActiveSection: (id) => set({ activeSection: id }),
}));
