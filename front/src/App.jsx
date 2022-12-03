import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </>
  );
};

export default App;
