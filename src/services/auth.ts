import { api } from '@/lib/api';
import Cookies from 'js-cookie';
import { LoginRequest, LoginResponse, RefreshTokenResponse, RegisterRequest } from '@/types/auth';

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/users/login', data);

    Cookies.set('token', res?.data?.data?.accessToken, {
      expires: 7,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return res.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/users/logout');

    Cookies.remove('token');
  },

  registerAndLogin: async (data: RegisterRequest) => {
    try {
      await api.post('/users/register', data);

      const loginRes = await authService.login({
        email: data.email,
        password: data.password,
      });

      return loginRes;
    } catch (error) {
      console.error("Register & Login Error:", error);
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
