import React from "react";

import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/signup" element={<HomePage />}></Route>
        <Route path="/profile" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>




    </div>
  )
}
