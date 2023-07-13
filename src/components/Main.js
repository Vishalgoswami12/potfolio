import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects";
import TechStack from "./TechStack/TechStak";

export default function Main() {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/techstack" element={<TechStack/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}