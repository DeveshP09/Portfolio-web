import "./home.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/Docs/Devesh_Patil_resume.pdf";
import Card from "./card";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Greetings, I am</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Devesh Patil"], //Typewriter effect
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deveshpatil162@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              HIRE ME
            </a>
            <a className="btn btn-cv" href={resume}>
              MY RESUME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
