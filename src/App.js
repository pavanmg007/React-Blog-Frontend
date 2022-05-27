import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="https://pavanmg007.github.io/React-Blog-Frontend/home" element={<Homepage />} />
        <Route path="https://pavanmg007.github.io/React-Blog-Frontend/" element={<Navigate replace to="https://pavanmg007.github.io/React-Blog-Frontend/home" />} />
        <Route exact path="https://pavanmg007.github.io/React-Blog-Frontend/category/:categoryid" element={<Blog />} />
        <Route exact path="https://pavanmg007.github.io/React-Blog-Frontend/category/:categoryid/article/:articleid" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
