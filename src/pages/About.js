import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="bg" className="bg-dark text-light">
      <h2 className="text-center text-dark bg-light p-3 display-3 text-decoration-underline">
        <b>About Me</b>
      </h2>
      <div className="container">
        <h1 className="text-decoration-underline">Name:</h1>
        <h2>Rahul Souram</h2>
        <h1 className="text-decoration-underline">Education :</h1>
        <h2>Bachelor Of Technology</h2>
        <h1 className="text-decoration-underline">College:</h1>
        <h2>Kakatiya Institute Of technology and Science.</h2>
        <h1 className="text-decoration-underline">Specificity:</h1>
        <h2>Information Technology(IT).</h2>
        <hr />
        <div>
          <h1 className="text-decoration-underline">Skill-Set</h1>
          <div className="row">
            <div className="col-lg-6">
              <h1>Basic :</h1>
              <li>
                HTML
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    80
                  </div>
                </div>
              </li>
              <li>
                CSS
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "70%" }}
                  >
                    70
                  </div>
                </div>
              </li>
              <li>
                JAVASCRIPT
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    80
                  </div>
                </div>
              </li>
            </div>
            <div className="col-lg-6">
              <h1>Frameworks:</h1>
              <li>
                BOOTSTRAP
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    style={{ width: "70%" }}
                  >
                    70
                  </div>
                </div>
              </li>
              <li>
                REACT JS
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                  >
                    75
                  </div>
                </div>
              </li>
              <li>
                REDUX
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    style={{ width: "65%" }}
                  >
                    65
                  </div>
                </div>
              </li>
            </div>
          </div>
          <hr />
          <h1 className="text-decoration-underline">
            Also some Knowledge of Backend:
          </h1>
          <li>
            NODE JS
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                role="progressbar"
                style={{ width: "50%" }}
              >
                50
              </div>
            </div>
          </li>{" "}
          <li>
            EXPRESS JS
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                role="progressbar"
                style={{ width: "60%" }}
              >
                60
              </div>
            </div>
          </li>
          <li>
            MONGO DB
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                role="progressbar"
                style={{ width: "40%" }}
              >
                50
              </div>
            </div>
          </li>{" "}
        </div>
        <hr />
        <div
          style={{ display: "grid", justifyContent: "center" }}
          className="p-5"
        >
          <h1>View My Projects</h1>
          <Link to="/projects">
            <button className="btn btn-lg btn-outline-light butt ms-5 mt-3">
              My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
