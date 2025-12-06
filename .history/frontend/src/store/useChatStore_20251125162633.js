import {create} from "zustand";
import toast from "react-hot-toast";
import {axiosInstance} from "../lib/axios";

export const useAuthStore = create( (set) => ({
    messages:[],
    users : [],
    selectedUsers:null,
    isUsersLoading:false,
    isMessagesLoading:false,


    getusers: async()=>{
        set({ isUsersLoading:true});
        try {
            const res = await axiosInstance.get('/messages/users');
            set({users:res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}))