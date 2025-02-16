import "./menus.css";
import { IoHome, IoInformationCircleSharp } from "react-icons/io5";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";
import { MdEngineering, MdWebStories } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="../public/profile2.png" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} duration={100}>
                  <IoHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="about" smooth={true} duration={100}>
                  <IoInformationCircleSharp />
                  About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="education" smooth={true} duration={100}>
                  <FaGraduationCap />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="work" smooth={true} duration={100}>
                  <MdEngineering />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="skills" smooth={true} duration={100}>
                  <FaLaptopCode />
                  Skills
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="projects" smooth={true} duration={100}>
                  <MdWebStories />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" smooth={true} duration={100}>
                  <IoMdContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        //toggle   button functionality
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} duration={100}>
                  <IoHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="about" smooth={true} duration={100}>
                  <IoInformationCircleSharp />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="education" smooth={true} duration={100}>
                  <FaGraduationCap />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="work" smooth={true} duration={100}>
                  <MdEngineering />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="skills" smooth={true} duration={100}>
                  <FaLaptopCode />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="projects" smooth={true} duration={100}>
                  <MdWebStories />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" smooth={true} duration={100}>
                  <IoMdContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
