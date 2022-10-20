import React from "react";
import profilePic from "../assets/profilePic.jpg";

const Home = () => {
    return (
        <div className="AboutContainer">
            <div className="HeaderContainer">
                <img className= "HomeProfilePic" src={profilePic} height="200px"/>
                <div className="Name">Jared Kenton</div> 
            </div>
            <div className="About">After getting my degree in Electrical Engineering,
             I went on to become a Project Manager for an electrical controls company for 5 years.
             However, during this time I learned that my passion was for programming and started
             my journey towards becoming a software developer! I have learned a lot and really enjoyed
             the projects that I have gotten to work on. I look forward to getting a job in tech and
             continuing to learn even more along the way!</div>
        </div>
    );
};

export default Home;