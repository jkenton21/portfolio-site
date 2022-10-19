import React, { useEffect } from "react";
import atLogo from "../assets/at.jpg";
import phoneLogo from "../assets/cellphone.jpg";
import headshotPhoto from "../assets/headshot.jpg";

const Footer = () => {
    return (
        <div className="FooterContainer">
          <div className="Socials">
            Contact Me
            <p>Feel free to get in touch if you want to learn more!</p>
            <div className="SocialLink">
              <i class="devicon-linkedin-plain"> </i>
              <a href="https://www.linkedin.com/in/jared-kenton-989a54a8/">Jared Kenton</a>
            </div>
            <div className="SocialLink">
              <i class="devicon-github-original-wordmark"> </i>
              <a href="https://github.com/jkenton21">jkenton21</a>
            </div>
            <div className="SocialLink">
              <img src={atLogo} alt="email logo" width="20"/>
              jkenton21@live.com
            </div>
            <div className="SocialLink">
              <img src={phoneLogo} alt="phone logo" width="20px"/>
              (913) 972-0127
            </div>
          </div>
          <div className="Headshot">
            <img className="profilePic" src={headshotPhoto} alt="personal headshot" height="200px" />
          </div>
        </div>
    );
};

export default Footer;