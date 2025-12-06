import React from "react";

import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
      </Routes>




    </div>
  )
}
