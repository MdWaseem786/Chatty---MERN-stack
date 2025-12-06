import React from 'react';
import {useState} from "react";
import {useAuthStore} from "../stores/authStore";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {login, isLoggin}




  return (
    <div>LoginPage</div>
  )
}
