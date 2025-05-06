import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experiences";
import Education from "./components/Education";


function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Home />
      <About />
        <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Box>
  );
}

export default App;
