import { api } from "@/lib/api";
import { UserProfile } from "@/types/user";

export const userService = {
  getProfile: async (): Promise<UserProfile> => {
    try {
      const res = await api.get("/users/profile");

      if (!res?.data) {
        throw new Error("Unexpected API response");
      }

      return res.data as UserProfile;
    } catch (error: unknown) {
      console.error("User Profile Fetch Error:", error);

      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error occurred while fetching user profile.");
    }
  },
};
