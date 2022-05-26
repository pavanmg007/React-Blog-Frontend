import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/technology" element={<Blog key="echnology" category="Technology" />} />
        <Route exact path="/hollywood" element={<Blog key="hollywood" category="Hollywood" />} />
        <Route exact path="/fitness" element={<Blog key="fitness" category="Fitness" />} />
        <Route exact path="/food" element={<Blog key="food" category="Food" />} />
        <Route exact path="/sandalwood" element={<Blog key="sandalwood" category="Sandalwood" />} />
      </Routes>
    </Router>
  );
}

export default App;
