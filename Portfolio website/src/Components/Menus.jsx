import "./menus.css";
import { IoHome, IoInformationCircleSharp } from "react-icons/io5";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";
import { MdEngineering, MdWebStories } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="../public/profile2.png" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <IoHome />
                Home
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <IoInformationCircleSharp />
                About
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaGraduationCap />
                Education
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdEngineering />
                Work Experience
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaLaptopCode />
                Skills
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdWebStories />
                Projects
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <IoMdContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : ( //toggle   button functionality
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <IoHome />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <IoInformationCircleSharp />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaGraduationCap />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdEngineering />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaLaptopCode />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdWebStories />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <IoMdContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
