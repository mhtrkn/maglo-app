import { create } from "zustand";
import Cookies from "js-cookie";
import { authService } from "@/services/auth";
import { LoginRequest, LoginResponse } from "@/types/auth";
import { useLoadingStore } from "./useLoadingStore";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;

  login: (data: LoginRequest) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: typeof window !== "undefined" ? Cookies.get("token") || null : null,
  loading: false,
  error: null,

  login: async (data: LoginRequest) => {
    const { show, hide } = useLoadingStore.getState();
    set({ loading: true, error: null });
    show();

    try {
      const res = await authService.login(data);
      const token = res?.data?.accessToken || "";

      set({ token, loading: false });
      Cookies.set("token", token, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return res;
    } catch (err) {
      set({ error: 'Error!', loading: false });
      throw err;
    } finally {
      hide();
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await authService.logout();
      set({ token: null, loading: false });
      Cookies.remove("token");
    } catch (err) {
      set({ error: 'Error!', loading: false });
      throw err;
    }
  },

  refreshToken: async () => {
    try {
      const newToken = await authService.refreshToken();
      set({ token: newToken });
    } catch (err) {
      set({ token: null, error: 'Error!' });
      Cookies.remove("token");
      throw err;
    }
  },
}));
