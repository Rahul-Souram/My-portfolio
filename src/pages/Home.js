import React from "react";
import mypic from "../images/mypic.jpg";
import { Link } from "react-router-dom";
import About from "../pages/About";
const Home = () => {
  return (
    <>
      <div className="container-fluid bg-dark" id="main">
        <div className="row">
          <div className="col-lg-6" id="first">
            <img src={mypic} id="img" width="350px" height="350px" />
          </div>
          <div className="col-lg-6" id="second">
            <h1 className="display-2" id="typo">
              Welcome
            </h1>
            <h1 className="display-3" id="typo">
              I'm Rahul Souram
            </h1>
            <h1> Aspiring Front-End Developer</h1>
            <Link to="/about">
              <button className="butt btn btn-info btn-lg text-light m-4">
                More Info
              </button>
            </Link>
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
