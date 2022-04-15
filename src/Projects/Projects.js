import React from "react";
import Project from "./Project";
import TitleLetter from "../main/hero/TitleLetter";

const Projects = () => {
  return (
    <div id="projects" style={{ height: "100vh" }}>
      <div className="container d-flex flex-column">
        <div
          className="d-flex mb-5 align-self-center"
          style={{ height: "70px" }}
        >
          {"Projects".split("").map((letter, idx) => (
            <TitleLetter letter={letter} key={idx} />
          ))}
        </div>

        {/* <h2 className="text-center mb-5 display-3 fw-bold">Projects</h2> */}
        <div className="accordion" id={`accordionExample`}></div>
        <Project
          idx="1"
          title="Todo/Note Taking App (Trello Clone) -- made with React, TypeScript,
            and Redux"
          githubLink="https://github.com/caveman0612/trello-app-ts-v4"
          viewLink="https://trello-app-ts-v4.vercel.app/"
          listItems={[
            "Designed an app to make multiple folders with as many notes as needed.",
            "Used Redux which allowed easy management of complex states.",
            "Implemented React Beautiful Drag and Drop to manipulate the folders and cards.",
            "Technology: JavaScript, React, HTML5, CSS3, Bootstrap, Redux",
          ]}
        />
        <Project
          idx="2"
          title="Weather Data Retrival and displaying Application"
          githubLink="https://github.com/caveman0612/weather-app-react"
          viewLink="https://weather-app-react-kappa.vercel.app/"
          listItems={["", "", "", ""]}
        />
        <Project
          idx="3"
          title=""
          githubLink="https://github.com/caveman0612/weather-app-react"
          viewLink="https://weather-app-react-kappa.vercel.app/"
          listItems={["", "", "", ""]}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Projects;
