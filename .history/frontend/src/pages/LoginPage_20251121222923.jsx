import React from 'react';
import {useState} from "react";
import {useAuthStore} from "../stores/authStore";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {login, isLogginIn} = useAuthStore();

  const handleSubmit = async(e) => {
    e.preventDefault();
    login(formData);
  }




  return (
  )
}
