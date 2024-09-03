import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home"
import Courses from "./Routes/Courses"
import Cart from "./Routes/Cart";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course/:courseId" element={<Courses/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
}

export default App;
