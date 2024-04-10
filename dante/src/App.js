import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./about/About";
import Background from "./background/Background";

const App = () => {
  return (
    <Router>
      <Background />

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
