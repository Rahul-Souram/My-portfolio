import React from "react";
import { SiGithub, SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer p-3 ">
        <a
          href="http://linkedin.com/in/rahul-souram-511719156"
          className="text-warning ft"
        >
          <FaLinkedin id="a" />
        </a>
        <a href="http://github.com/rahul-souram" className="text-warning ft">
          <SiGithub id="a" />
        </a>
        <a href="http://fb.com/souramrahul" className="text-warning ft">
          <SiFacebook id="a" />
        </a>
        <a
          href="http://instagram.com/im_rahulsouram7"
          className="text-warning ft"
        >
          <GrInstagram id="a" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
