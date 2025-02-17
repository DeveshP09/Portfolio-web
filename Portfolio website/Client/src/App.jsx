import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import MobileNav from "./Components/MobileNav/MobileNav.jsx";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Educations/Education";
import WorkExperience from "./Pages/Work-Experience/WorkExperience";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { Link} from 'react-scroll';

function App() {
  return (
    <>
    <MobileNav/>
      <Layout />
      <div className="container">
        <About></About>
        <Education />
        <WorkExperience />
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <div className="footer">
        <h4 className="text-center ">Made With ❤️ Devesh @2025</h4>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        height="30"
        width="20"
        className="scroll"
        
      />
    </>
  );
}

export default App;
