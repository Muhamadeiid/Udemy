import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home"
import Courses from "./Routes/Courses"

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course/:courseId" element={<Courses/>}></Route>
    </Routes>
  );
}

export default App;
