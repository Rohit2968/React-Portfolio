import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="contact-marg">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-kumar-8b604a275/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/i/flow/login" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Rohit2968" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            className="items"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rohit2968raj@gmail.com&su=Hello%20Rohit!&body=Hi%20Rohit,%0D%0A%0D%0AI'm%20reaching%20out%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;