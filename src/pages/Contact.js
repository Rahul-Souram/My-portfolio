import React from "react";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="container bg-dark " id="main">
        <br />
        <h1
          style={{ whiteSpace: "pre-line" }}
          className="text-center display-2 text-decoration-underline mar"
        >
          Contact Me
        </h1>
        <br />
        <div id="firstc">
          <h1 className="text-center" style={{ whiteSpace: "pre-line" }}>
            If you want to get a hold of me
            <br />
            you can send me an email.
          </h1>
          <hr />
          <form
            target="_blank"
            action="https://formsubmit.co/souramrahul@gmail.com"
            method="POST"
            className="bg-secondary p-4 butt"
          >
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Name"
              required
            />{" "}
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Your Email"
              required
            />
            <textarea
              placeholder="Your Message"
              className="form-control mt-3"
              name="message"
              rows="6"
              required
            ></textarea>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-lg btn-primary butt my-3"
              >
                Send Message
              </button>
            </div>
          </form>
          <hr />
        </div>
        <br />
        <div className="text-center mt-">
          <li className="text-info">
            Contact No <FaPhoneAlt /> : +91-9959157666.
          </li>
          <li className="text-info pb-3">
            Email <GoMail /> : souramrahul@gmail.com
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
