/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { api } from "@/lib/api";
import { UserProfile } from "@/types/user";

interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;

  fetchProfile: () => Promise<void>;
  clearProfile: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get<{ data: UserProfile }>("/users/profile");
      set({ profile: res.data.data, loading: false });
    } catch (err) {
      set({
        error: "Failed to fetch user profile",
        loading: false,
      });
    }
  },

  clearProfile: () => {
    set({ profile: null, error: null });
  },
}));
