import React, { useEffect } from "react";
import atLogo from "../assets/at.jpg";
import phoneLogo from "../assets/cellphone.jpg";
import headshotPhoto from "../assets/headshot.jpg";

const Footer = () => {
    return (
        <div className="FooterContainer">
          Contact Me
          <div className="socials">
            Feel free to get in touch if you want to learn more!
            <div>
              <i class="devicon-linkedin-plain"> </i>
              <a href="https://www.linkedin.com/in/jared-kenton-989a54a8/">Jared Kenton</a>
            </div>
            <div>
              <i class="devicon-github-original-wordmark"> </i>
              <a href="https://github.com/jkenton21">jkenton21</a>
            </div>
            <div>
              <img src={atLogo} alt="email logo" />
              jkenton21@live.com
            </div>
            <div>
              <img src={phoneLogo} alt="phone logo" />
              (913) 972-0127
            </div>
          </div>
          <div className="headshot">
            <img className="profilePic" src={headshotPhoto} alt="personal headshot" height="200px" />
          </div>
        </div>
    );
};

export default Footer;