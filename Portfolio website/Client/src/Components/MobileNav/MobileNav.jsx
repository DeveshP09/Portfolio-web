import "./mobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome, IoInformationCircleSharp } from "react-icons/io5";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";
import { MdEngineering, MdWebStories } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { useState } from "react";

const mobileNav = () => {
  const [open, setOpen] = useState(false);

  // handle opne
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu click
  const handleClick = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <RxCross1
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">Devesh Patil Portfolio</span>
        </div>

        {open && (<div className="mobile-nav-menu">
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} duration={100} onClick={handleClick}>
                  <IoHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="about" smooth={true} duration={100} onClick={handleClick}>
                  <IoInformationCircleSharp />
                  About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="education" smooth={true} duration={100} onClick={handleClick}>
                  <FaGraduationCap />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="work" smooth={true} duration={100} onClick={handleClick}>
                  <MdEngineering />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="skills" smooth={true} duration={100} onClick={handleClick}>
                  <FaLaptopCode />
                  Skills
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="projects" smooth={true} duration={100} onClick={handleClick}>
                  <MdWebStories />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" smooth={true} duration={100} onClick={handleClick}>
                  <IoMdContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>)}
        
      </div>
    </>
  );
};

export default mobileNav;
