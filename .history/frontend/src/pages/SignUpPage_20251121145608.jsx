import React from 'react'
import { useState } from 'react'

export const SignUpPage = () => {

  const[password,setPassoword]=useState(false);
  const[formData,setFormData]=useState({
    fullname:"",
    email:"",
    password:"",
  });
  const {signup, isSigningUp}
  return <div>SignUpPage</div>

};

export default SignUpPage;