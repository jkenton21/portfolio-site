import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import './App.css';

const fakeRequest = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 2000));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeRequest().then(() => {
      const loader = document.querySelector(".loader-container");
      if (loader) {
        loader.remove();
        setLoading(!loading);
      }
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div>
      <header className="Header">
        <h1>Jared Kenton</h1>
        <img></img>
      </header>
      <div className="projects">
        <Home />
      </div>
      <footer className="Footer">
        Jared Kenton
      </footer>
    </div>
  );
}

export default App;
