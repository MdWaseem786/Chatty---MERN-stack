import { create } from "zustand";
import axiosInstance from "../lib/axios"; 
import toast from "react-hot-toast";

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
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });

    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account Created Successfully");

      return true;     // <-- REQUIRED FOR REDIRECT
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");

      return false;    // <-- REQUIRED FOR REDIRECT
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async(  ) => {
    try {
      await axiosInstance.post("/auth/signout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout Failed");
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/signin", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
  
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
  
      set((state) => ({
        authUser: {
          ...state.authUser,
          ...res.data.user  
        },
        isUpdatingProfile: false
      }));
  
      toast.success("Profile Updated Successfully");
  
    } catch (error) {
      console.log("error in updating profile:", error);
      const message = error.response?.data?.message || "Update failed";
      toast.error(message);
  
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  
  
}));

export default useAuthStore;
