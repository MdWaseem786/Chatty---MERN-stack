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
  is

  signup: async (data) => {
    set({ isSigningUp: true});
    try {
      const res = await axiosInstance.post("/auth/signup",data);
      set({authUser: res.data});
      toast.success("Account Created Successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    }finally{
      set({ isSigningUp: false });
    }
      
  },
}));

export default useAuthStore;