import "./workExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <>
      <div className="container work ">
        <h1 className="col-12 mt-3 mb-1 text-center">Work Experience</h1>
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
            date="August 2023 - October 2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<img src="../public/edunet.jpeg" className="school-logo" />}

            // icon={<FaGraduationCap/>}
          >
            <h3 className="vertical-timeline-element-title">Summer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle edunet">
              Edunet Foundation
            </h4>
            <p>Remote</p>

            <div className="button-container">
              <a
                href="https://drive.google.com/file/d/1wc2oSEytYh9bpnS8h0LhMrKnmtmq88g0/view?usp=sharing"
                class="certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Certificate</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokewidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
