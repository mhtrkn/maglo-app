import { create } from "zustand";

interface LoadingStore {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false }),
}));
