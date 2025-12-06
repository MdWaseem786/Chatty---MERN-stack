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
  return <div className='min-h-screen grid lg:grid-cols-2'>
    <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
      
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center mb-8'>
          <div className='flex flex-col items-center gap-2 grou'></div>
        </div>
        <MessageSquare></MessageSquare>
      </div>

    </div>


        
          </div>

};

export default SignUpPage;