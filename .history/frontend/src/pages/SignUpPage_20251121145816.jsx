import React from 'react'
import { useState } from 'react'
import useAuthStore from '../store/useAuthStore';

export const SignUpPage = () => {

  const[password,setPassoword]=useState(false);
  const[formData,setFormData]=useState({
    fullname:"",
    email:"",
    password:"",
  });
  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {}
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return <div className='min-h'></div>

};

export default SignUpPage;