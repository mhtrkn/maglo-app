export interface UserProfile {
  data: UserProfileData
}

export interface UserProfileData {
  id: string;
  fullName: string;
  email: string;
  role: "user" | "admin" | string;
  isActive: boolean;
  lastLoginAt: string;
  lastLoginIP: string;
  createdAt: string;
  updatedAt: string;
}
