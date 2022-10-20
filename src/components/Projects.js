import React from "react";
import calculatorScreenshot from "../assets/calculator.jpg";
import todoScreenshot from "../assets/ToDo.jpg";
import weatherappScreenshot from "../assets/Weather.jpg";
import memorygameScreenshot from "../assets/MemoryGame.jpg";

const Projects = () => {
    return (
        <div className="ProjectsContainer">
            <div className="ProjectsHeader">Projects</div> 
            <div className="HeaderDesc">These are some of the projects that
              I believe showcase what I have learned and what I am capable of.
              I look forward to learning even more and adding to this portfolio.</div>
            <div className="ProjectsCardContainer">
                <div className="ProjectCard">
                    <img src={calculatorScreenshot} alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/Calculator"><i class="devicon-github-original colored"></i></a>
                        <a href="https://jkenton21.github.io/Calculator/">Basic Calculator App</a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <img src={todoScreenshot} alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/todo-list"><i class="devicon-github-original colored"></i></a>
                        <a href="https://jkenton21.github.io/todo-list/">To-Do List</a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <img src={weatherappScreenshot} alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/weather-app"><i class="devicon-github-original colored"></i></a>
                        <a href="https://jkenton21.github.io/weather-app/">Weather App</a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <img src="" alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/battleship"><i class="devicon-github-original colored"></i></a>
                        <a href="">Battleship</a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <img src={memorygameScreenshot} alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/memory-card"><i class="devicon-github-original colored"></i></a>
                        <a href="https://jkenton21.github.io/memory-card/">Memory Card Game</a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <img src="" alt="project screenshot" height="90%"/>
                    <div className="ProjectLinks">
                        <a href="https://github.com/jkenton21/shopping-cart"><i class="devicon-github-original colored"></i></a>
                        <a href="">Shopping Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;