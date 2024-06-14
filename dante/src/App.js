import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./about/About";
import Background from "./background/Background";
import Nav from "./nav/Nav";

const App = () => {
  return (
    <div> 
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
