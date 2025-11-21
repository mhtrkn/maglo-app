/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/api';
import Cookies from 'js-cookie';
import { LoginRequest, LoginResponse, RefreshTokenResponse, RegisterRequest } from '@/types/auth';
import { toast } from 'sonner';

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const res = await api.post('/users/login', data);

      const accessToken = res?.data?.data?.accessToken;

      Cookies.set('token', accessToken, {
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      toast.success("Welcome back!", {
        description: "You have logged in successfully.",
      });

      return res.data;
    } catch (error: any) {
      console.error("Login error:", error);

      const message =
        error?.response?.data?.message ||
        "Something went wrong while trying to sign in.";

      toast.error("Login failed", { description: message });

      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await api.post('/users/logout');
      Cookies.remove('token');

      toast.success("Logout successful!", {
        description: "Hope to see you again soon 👋",
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Oops!", {
        description: "We couldn't complete the logout process. Please try again later.",
      });
    }
  },

  registerAndLogin: async (data: RegisterRequest) => {
    try {
      await api.post('/users/register', data);

      const loginRes = await authService.login({
        email: data.email,
        password: data.password,
      });

      toast.success("Welcome", {
        description: "You’re all set! Your account has been created.",
      });

      return loginRes;
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong while trying to sign in.";

      toast.error("Login failed", { description: message });
    }
  },

  refreshToken: async (): Promise<string> => {
    try {
      const res = await api.post<RefreshTokenResponse>("/users/refresh-token");

      if (!res?.data?.accessToken) {
        throw new Error("Failed to refresh access token");
      }

      Cookies.set("token", res.data.accessToken, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return res.data.accessToken;
    } catch (error: unknown) {
      console.error("Refresh Token Error:", error);
      throw error;
    }
  },
};
