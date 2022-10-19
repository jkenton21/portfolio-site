import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Home />
        <Projects />
        <Footer />
    </div>
  );
};

export default App;
