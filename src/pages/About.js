import React from "react";
import { Link } from "react-router-dom";
import { skills, OtherSkills } from "../data";
const About = () => {
  return (
    <div className="bg-light text-dark" id="bg2">
      <h2 className="text-center text-dark p-3 display-3 text-decoration-underline">
        <b>About Me</b>
      </h2>
      <div className="container p-5" id="bg2">
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
              <ul className="pro-bars">
                {skills.map((items) => {
                  const { id, title, width } = items;
                  return (
                    <>
                      <li key={id} className="pb-3">
                        {title}
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: width }}
                          >
                            {width}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr />
          <h1 className="text-decoration-underline">
            Also some Knowledge of Backend:
          </h1>
          <ul className="pro-bars">
            {OtherSkills.map((items) => {
              const { id, title, width } = items;
              return (
                <>
                  <li key={id}>
                    {title}
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                        role="progressbar"
                        style={{ width: width }}
                      >
                        {width}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <hr />
        <Link
          to="/projects"
          style={{ display: "grid", justifyContent: "center" }}
        >
          <but
            className="btn btn-primary butt mt-3"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            My Projects
          </but>
        </Link>
      </div>
    </div>
  );
};

export default About;
