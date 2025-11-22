/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { api } from "@/lib/api";
import { UserProfile } from "@/types/user";
import { useLoadingStore } from "./useLoadingStore";

interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;

  fetchProfile: () => Promise<void>;
  clearProfile: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    const { show, hide } = useLoadingStore.getState();
    set({ loading: true, error: null });
    show();

    try {
      const res = await api.get<{ data: UserProfile }>("/users/profile");
      set({ profile: res.data.data, loading: false, error: null });
    } catch (err) {
      console.error("User Profile Fetch Error:", err);
      set({
        error: "Failed to fetch user profile",
        loading: false,
      });
    } finally {
      hide();
    }
  },

  clearProfile: () => {
    set({ profile: null, error: null });
  },
}));
