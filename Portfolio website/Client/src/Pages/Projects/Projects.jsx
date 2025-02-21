import "./projects.css";

const Project = () => {
  return (
    <>
      <div className="container projects " id="projects">
        <h1 className="col-12 mt-3 mb-1 text-center">Projects</h1>
        <hr />

        <div className="projects-card">
          <div className="project1">
            <div class="card mb-3 card-content">
              <div className="card-image">
                <img
                  src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-best-practices-.jpg"
                  class="card-img-top image"
                  alt="project1"
                />
              </div>

              <div class="card-body ">
                <div className="card-headimg">
                  <h5 class="card-title">Ecommerce Website </h5>
                  <a
                    href="https://github.com/DeveshP09/The-Unique-One"
                    class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    (Open)
                  </a>
                </div>

                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: `100%` }}></div>
                </div>

                <div className="tags">
                  <span class="badge rounded-pill  tech-tag">Javascript</span>
                  <span class="badge rounded-pill  tech-tag">React.js</span>
                  <span class="badge rounded-pill  tech-tag">Bootstrap</span>
                  <span class="badge rounded-pill  tech-tag">Node.js</span>
                  <span class="badge rounded-pill  tech-tag">Mongodb</span>
                  <span class="badge rounded-pill  tech-tag">Redux</span>
                  <span class="badge rounded-pill  tech-tag">RESTful APIs</span>
                  <span class="badge rounded-pill  tech-tag">Stripe</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project3">
            <div class="card mb-3 card-content">
              <img
                src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/12/myntra-fraud-1734079639.jpg"
                class="card-img-top image"
                alt="project1"
              />
              <div class="card-body ">
                <div className="card-headimg">
                  <h5 class="card-title">Myntra Clone</h5>
                  <a
                    href="https://github.com/DeveshP09/"
                    class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    (Open)
                  </a>
                </div>

                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: `40%` }}></div>
                </div>
                <div className="tags">
                  <span class="badge rounded-pill  tech-tag">Javascript</span>
                  <span class="badge rounded-pill  tech-tag">React.js</span>
                  <span class="badge rounded-pill  tech-tag">Bootstrap</span>
                  <span class="badge rounded-pill  tech-tag">Node.js</span>
                  <span class="badge rounded-pill  tech-tag">Redux</span>
                  <span class="badge rounded-pill  tech-tag">RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project2">
            <div class="card mb-3 card-content">
              <img
                src="../../public/Food_Hub.png"
                class="card-img-top image"
                alt="project1"
              />
              <div class="card-body ">
                <div className="card-headimg">
                  <h5 class="card-title">Food Hub</h5>
                  <a
                    href="https://github.com/DeveshP09/"
                    class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    (Open)
                  </a>
                </div>

                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: `100%` }}></div>
                </div>
                <div className="tags">
                  <span class="badge rounded-pill  tech-tag">Javascript</span>
                  <span class="badge rounded-pill  tech-tag">HTML</span>
                  <span class="badge rounded-pill  tech-tag">CSS</span>
                  <span class="badge rounded-pill  tech-tag">SQL</span>
                  <span class="badge rounded-pill  tech-tag"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
