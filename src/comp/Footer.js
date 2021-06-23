import React from "react";
import { SiGithub, SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer p-3 fixed-bottom">
        <a href="http://fb.com/souramrahul" className="text-info ft">
          <SiFacebook id="a" />
        </a>
        <a href="http://instagram.com/im_rahulsouram7" className="text-info ft">
          <GrInstagram id="a" />
        </a>
        <a
          href="http://linkedin.com/in/rahul-souram-511719156"
          className="text-info ft"
        >
          <FaLinkedin id="a" />
        </a>
        <a href="http://github.com/rahul-souram" className="text-info ft">
          <SiGithub id="a" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
