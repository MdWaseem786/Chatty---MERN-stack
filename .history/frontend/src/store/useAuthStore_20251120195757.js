import { create } from "zustand";
import axiosInstance from "../lib/axios"; // fixed import

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log(error);
      set({ authUser: null }); // fixed typo
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
      
  },
}));

export default useAuthStore;