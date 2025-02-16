import { techstackList } from "../../utils/techstackList";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="container techstack">
        <h1 className="col-12 mt-3 mb-1 text-center">Skills</h1>
        <hr />

        <div className="row" id="skills">
          {techstackList.map((tech) => (
            <div key={tech.id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media  d-flex justify-content-right">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow={tech.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: `${tech.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
