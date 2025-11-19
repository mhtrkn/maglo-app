export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role?: string;
  isActive?: boolean;
  lastLoginAt?: string;
  lastLoginIP?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponseData {
  user: User;
  accessToken: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginResponseData;
}

export interface RegisterResponseData {
  id: string;
  fullName: string;
  email: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: RegisterResponseData;
}

export interface RefreshTokenResponse {
  accessToken: string;
}
