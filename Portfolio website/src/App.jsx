import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Educations/Education";
import WorkExperience from "./Pages/Work-Experience/WorkExperience";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About></About>
        <Education/>
        <WorkExperience/>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <div className="footer">
        <h4 className="text-center ">Made With ❤️ Devesh @2025</h4>
      </div>
    </>
  );
}

export default App;
