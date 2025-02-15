import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className="container education" >
        <h1 className="col-12 mt-3 mb-1 text-center">Education Journey</h1>
        <hr />

        <VerticalTimeline lineColor="#1a202c3f" className="line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 4px 6px #0000001a",
              borderRadius: "12px",
            }}
            date="2020-2024"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<img src="../public/MGM.png" className="school-logo" />}

            // icon={<FaGraduationCap/>}
          >
            <h3 className="vertical-timeline-element-title">
              B.E in Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MGM College of Engineering
            </h4>
            <p>Mumbai University</p>

            <div className="button-container">
              <button
                class="btn btn-warning rounded-pill px-3 percent"
                type="button"
              >
                CGPA : 7.77
              </button>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 4px 6px #0000001a",
              borderRadius: "12px",
            }}
            date="2020"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<img src="../public/ALC.jpg" className="school-logo" />}

            // icon={<FaGraduationCap/>}
          >
            <div className="hsc">
              <h3 className="vertical-timeline-element-title">12th ,HSC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                ALC Jr College
              </h4>
              <p>Maharashtra State Board</p>
              <div className="button-container">
                <button
                  class="btn btn-warning rounded-pill px-3 percent"
                  type="button"
                >
                  Percentage : 70.15%
                </button>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 4px 6px #0000001a",
              borderRadius: "12px",
            }}
            date="2018"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <img src="../public/Vivekananda.jpg" className="school-logo" />
            }

            // icon={<FaGraduationCap/>}
          >
            <h3 className="vertical-timeline-element-title">10th ,SSC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vivekananda Public School
            </h4>
            <p>Maharashtra State Board</p>
            <div className="button-container">
              <button
                class="btn btn-warning rounded-pill px-3 percent"
                type="button"
              >
                Percentage : 88.40%
              </button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
