import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-5  about-image">
            <img src="../../public/devesh.jpg" alt="image" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About Me</h1>
            <p>
              <ul>
                <li>
                  I am Devesh Patil, graduated from Mumbai University with
                  degree in Information Technology
                </li>
                <li>
                  Adaptive learner, Passionate about staying up-to-date with the
                  latest technologies
                </li>
                <li>
                  Having expertise in Java, Python, Javascript, React.js and SQL
                </li>
                <li>
                  Commitment to lifelong learning and to adapt new technologies
                  to tackle the next big challenge.
                </li>
                <li>
                  Regularly setting personal objectives that complement the
                  company's technological advancements
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
