import React from "react";
import Project from "./Project";
import TitleLetter from "../main/hero/TitleLetter";

const Projects = () => {
  const projects = "Projects"
    .split("")
    .map((letter, idx) => <TitleLetter letter={letter} key={idx} />);

  return (
    <div
      id="projects"
      className="container d-flex flex-column border-bottom py-5"
    >
      <div className="d-flex mb-5 align-self-center" style={{ height: "70px" }}>
        {projects}
      </div>
      <div className="accordion" id={`accordionExample`}></div>
      <Project
        idx="1"
        title="Todo Tracking Application"
        githubLink="https://github.com/caveman0612/trello-app-ts-v4"
        viewLink="https://trello-app-ts-v4.vercel.app/"
        listItems={[
          "Use folders and cards as a todo tracker for working with scrum or agile.",
          "Uses Redux which allows easy management of complex states using reducers and dispatchers.",
          "Implemented React Beautiful Drag and Drop to manipulate the folders and cards.",
        ]}
        tech={
          "JavaScript, React, HTML5, Bootstrap, Redux/Redux-toolkit, Vercel"
        }
      />
      <Project
        idx="2"
        title="Weather Data Application"
        githubLink="https://github.com/caveman0612/weather-app-ts-v2"
        viewLink="https://weather-app-ts-v2.vercel.app/"
        listItems={[
          "Fetches weather data from the open weather map api.",
          "Can search by city, zip code and latitude/longitude.",
          "Designed UI with bootstrap to allow for responsive design.",
          "Incorperated Typescript which allows for better stability",
        ]}
        tech={"TypeScript, React, HTML5, Bootstrap, Git/Github, Vercel"}
      />
      <Project
        idx="3"
        title="Study Tool (flashCards) Application"
        githubLink="https://github.com/caveman0612/flash-card-app-v2"
        viewLink="https://flash-card-app-v2.herokuapp.com/"
        listItems={[
          "Created a frontend application that allows users to create, edit, delete, and study.",
          "Defined frontend routes with React Router, syncing each new view to prevent stale data.",
          "Uses Redux which allows easy management of complex states using reducers and dispatchers.",
        ]}
        tech={
          "JavaScript, React, HTML5, Bootstrap, React-Router, Redux, Heroku"
        }
      />
    </div>
  );
};

export default Projects;
