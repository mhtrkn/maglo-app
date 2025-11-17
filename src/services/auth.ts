import { api } from '@/lib/api';
import Cookies from 'js-cookie';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@/types/auth';

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

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const res = await api.post('/users/register', data);

    return res.data;
  }
};
