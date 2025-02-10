import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Educations/Education";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About></About>
        <Education/>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
