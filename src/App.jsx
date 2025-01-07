import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Article from "./pages/Article.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/artticle" element={<Article />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
