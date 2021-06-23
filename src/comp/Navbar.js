import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="container-fluid navbar navbar-expand-lg sticky-top">
        <Link className="navbar-brand ms-3" to="/" id="R">
          ℜ𝔞𝔥𝔲𝔩 𝔖𝔬𝔲𝔯𝔞𝔪
        </Link>
        <button
          className="navbar-toggler text-info"
          id="bars"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 me-5 font-weight-bold">
            <li className="nav-item ">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
