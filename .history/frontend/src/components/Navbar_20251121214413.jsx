import React from 'react';
import useAuthStore from '../store/useAuthStore.jsx';

const Navbar = () => {
  const{logout, authUser} = useAuthStore();


  return (
    
    <div>Navbar</div>
  )
}

