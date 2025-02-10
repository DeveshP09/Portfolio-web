import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
